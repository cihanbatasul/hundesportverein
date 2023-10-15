package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func (app *application) Home(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		app.not_found(w)
		return
	}

	w.Write([]byte("Hello"))
}

type LoginForm struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func (app *application) Login(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		w.Header().Set("Allow", http.MethodPost)
		app.client_error(w, http.StatusMethodNotAllowed)
		return
	}

	var formData LoginForm
	if err := json.NewDecoder(r.Body).Decode(&formData); err != nil {
		app.server_error(w, err)
		return
	}

	success, err := app.users.Authenticate(formData.Email, formData.Password)
	if err != nil {
		app.server_error(w, err)
		return
	}

	if success {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Authentication sucessful"))
	} else {
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte("Authentication failed"))
	}

}

type RegisterRequest struct {
	Email     string `json:"email"`
	Password  string `json:"password"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
}

func (app *application) Register(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		w.Header().Set("Allow", http.MethodPost)
		app.client_error(w, http.StatusMethodNotAllowed)
		return
	}

	var reqBody RegisterRequest
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&reqBody); err != nil {
		app.client_error(w, http.StatusBadRequest)
		return
	}

	id, err := app.users.Insert(reqBody.Email, reqBody.Password, reqBody.FirstName, reqBody.LastName)
	if err != nil {
		app.server_error(w, err)
		return
	}

	w.WriteHeader(http.StatusOK)

	fmt.Fprintf(w, "User ID: %d", id)
}

func (app *application) Quiz(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.Header().Set("Allow", http.MethodGet)
		app.client_error(w, http.StatusMethodNotAllowed)
		return
	}

	questionsWithAnswers, err := app.quiz.SelectQuestions()
	if err != nil {
		app.server_error(w, err)
		return
	}

	responseData, err := json.Marshal(questionsWithAnswers)
	if err != nil {
		app.server_error(w, err)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	w.WriteHeader(http.StatusOK)
	w.Write(responseData)
}

func (app *application) QuizSend(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		w.Header().Set("Allow", http.MethodPost)
		app.client_error(w, http.StatusMethodNotAllowed)
		return
	}

	w.Write([]byte("QuizSend Answer"))
}
