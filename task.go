package main

import "context"

type Item struct {
	ID        int
	Title     string
	Completed bool
}

type Tasks struct {
	Items          []Item
	Count          int
	CompletedCount int
}

func fetchTasks() ([]Item, error) {
	var items []Item
	rows, err := DB.Query("select id, title, completed from tasks order by postition;")
	if err != nil {
		return []Item{}, err
	}
	defer rows.Close()
	for rows.Next() {
		item := Item{}
		err := rows.Scan(&item.ID, &item.Title, &item.Completed)
		if err != nil {
			return []Item{}, err
		}
		items = append(items, item)
	}
	return items, nil
}

func fetchTask(ID int) (Item, error) {
	var item Item
	err := DB.QueryRow("select id, title, completed from tasks where id = (?)", ID).Scan(&item.ID, &item.Title, &item.Completed)
	if err != nil {
		return Item{}, err
	}
	return item, nil
}

func updateTask(ID int, title string) (Item, error) {
	var item Item
	err := DB.QueryRow("update tasks set title = (?) where id = (?) returning id, title, completed", title, ID).Scan(&item.ID, &item.Title, &item.Completed)
	if err != nil {
		return Item{}, err
	}
	return item, nil
}

func fetchCount() (int, error) {
	var count int
	err := DB.QueryRow("select count(*) from tasks;").Scan(&count)
	if err != nil {
		return 0, err
	}
	return count, nil
}

func insertTask(title string) (Item, error) {
	count, err := fetchCount()
	if err != nil {
		return Item{}, err
	}
	var id int
	err = DB.QueryRow("insert into tasks (title, position) values (?, ?) returning id", title, count).Scan(&id)
	if err != nil {
		return Item{}, err
	}
	item := Item{ID: id, Title: title, Completed: false}
	return item, nil
}

func deleteTask(ctx context.Context, ID int) error {
	_, err := DB.Exec("delete from tasks where id = (?)", ID)
	if err != nil {
		return err
	}
	rows, err := DB.Query("select id from tasks order by position")
	if err != nil {
		return err
	}
	var ids []int
	for rows.Next() {
		var id int
		err := rows.Scan(&id)
		if err != nil {
			return err
		}
		ids = append(ids, id)
	}
	tx, err := DB.BeginTx(ctx, nil)
	if err != nil {
		return err
	}
	defer tx.Rollback()
	for idx, id := range ids {
		_, err := DB.Exec("update tasks set position = (?) where id = (?)", idx, id)
		if err != nil {
			return err
		}
	}
	err = tx.Commit()
	if err != nil {
		return err
	}
	return nil
}

func orderTasks(ctx context.Context, values []int) error {
	tx, err := DB.BeginTx(ctx, nil)
	if err != nil {
		return err
	}
	defer tx.Rollback()
	for i, v := range values {
		_, err := tx.Exec("update tasks set position = (?) where id = (?)", i, v)
		if err != nil {
			return err
		}
	}
	if err := tx.Commit(); err != nil {
		return err
	}
	return nil
}
