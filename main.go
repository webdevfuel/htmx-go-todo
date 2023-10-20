package main

import (
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	err := openDB()
	if err != nil {
		log.Panic(err)
	}
	defer closeDB()
	err = setupDB()
	if err != nil {
		log.Panic(err)
	}
	err = parseTemplates()
	if err != nil {
		log.Panic(err)
	}
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Handle("/static/*", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))
	r.Get("/", handleGetTasks)
	r.Post("/tasks", handleCreateTask)
	r.Put("/tasks/{id}/toggle", handleToggleTask)
	r.Delete("/tasks/{id}", handleDeleteTask)
	r.Get("/tasks/{id}/edit", handleEditTask)
	http.ListenAndServe("localhost:3000", r)
}
