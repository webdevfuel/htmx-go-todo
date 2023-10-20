package main

import (
	"log"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
)

func handleGetTasks(w http.ResponseWriter, _ *http.Request) {
	items, err := fetchTasks()
	if err != nil {
		log.Printf("error fetching tasks %v", err)
		return
	}
	count, err := fetchCount()
	if err != nil {
		log.Printf("error fetching count %v", err)
	}
	completedCount, err := fetchCompletedCount()
	if err != nil {
		log.Printf("error fetching completed count %v", err)
	}
	data := Tasks{
		Items:          items,
		Count:          count,
		CompletedCount: completedCount,
	}
	tmpl.ExecuteTemplate(w, "Base", data)
}

func handleCreateTask(w http.ResponseWriter, r *http.Request) {
	title := r.FormValue("title")
	if title == "" {
		tmpl.ExecuteTemplate(w, "Form", nil)
		return
	}
	item, err := insertTask(title)
	if err != nil {
		log.Printf("error inserting task %v", err)
		return
	}
	count, err := fetchCount()
	if err != nil {
		log.Printf("error fetching count %v", err)
		return
	}
	w.WriteHeader(http.StatusCreated)
	tmpl.ExecuteTemplate(w, "Form", nil)
	tmpl.ExecuteTemplate(w, "Item", map[string]any{"Item": item, "SwapOOB": true})
	tmpl.ExecuteTemplate(w, "TotalCount", map[string]any{"Count": count, "SwapOOB": true})
}

func handleToggleTask(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(chi.URLParam(r, "id"))
	if err != nil {
		log.Printf("error parsing id into int %v", err)
		return
	}
	_, err = toggleTask(id)
	if err != nil {
		log.Printf("error toggling task %v", err)
		return
	}
	completedCount, err := fetchCompletedCount()
	if err != nil {
		log.Printf("error fetching completed count %v", err)
		return
	}
	tmpl.ExecuteTemplate(w, "CompletedCount", map[string]any{"Count": completedCount, "SwapOOB": true})
}
