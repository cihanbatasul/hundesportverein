package models

import (
	"database/sql"
	"errors"
)

type User struct {
	ID         int
	email      string
	password   string
	first_name string
	last_name  string
}

type UserModel struct {
	DB *sql.DB
}

func (m *UserModel) Get(id int) (*User, error) {
	stmt := `SELECT user_id, user_email, user_first_name, user_last_name FROM users WHERE user_id=$1`

	row := m.DB.QueryRow(stmt, id)
	s := &User{}

	err := row.Scan(&s.ID, &s.email, &s.first_name, &s.last_name)

	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return nil, ErrNoUserRecord
		} else {
			return nil, err
		}
	}
	return s, nil
}

func (m *UserModel) Insert(email string, password string, first_name string, last_name string) (int, error) {
	stmt := `SELECT user_id FROM users WHERE user_email=$1`
	var existingUserID int
	err := m.DB.QueryRow(stmt, email).Scan(&existingUserID)
	if err == nil {
		return 0, UserAlreadyExists
	} else if err != sql.ErrNoRows {
		return 0, err
	}

	stmt = `INSERT INTO users (user_email, user_password, user_first_name, user_last_name) VALUES ($1, $2, $3, $4) RETURNING user_id`

	var id int
	err = m.DB.QueryRow(stmt, email, password, first_name, last_name).Scan(&id)
	if err != nil {
		return 0, err
	}

	return id, nil
}

func (m *UserModel) Authenticate(email string, password string) (bool, error) {
	stmt := `SELECT user_email, user_password FROM users WHERE LOWER(user_email)=LOWER($1)`
	var password_db string
	var email_db string
	err := m.DB.QueryRow(stmt, email).Scan(&email_db, &password_db)
	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return false, ErrNoUserRecord
		} else {
			return false, err
		}
	}

	if password_db != password {
		return false, PasswordNotSame
	}

	return true, nil
}
