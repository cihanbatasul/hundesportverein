package main

import (
	"net/http"
)

func (app *application) routes() *http.ServeMux {
	mux := http.NewServeMux()

	mux.HandleFunc("/", app.Home)
	mux.HandleFunc("/login", app.Login)
	mux.HandleFunc("/register", app.Register)
	mux.HandleFunc("/quiz", app.Quiz)
	mux.HandleFunc("/quiz/send", app.QuizSend)
	return mux
}
