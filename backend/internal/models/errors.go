package models

import "errors"

var ErrNoUserRecord = errors.New("models: no matching user record found")

var PasswordNotSame = errors.New("models: Password not same as database password")

var UserAlreadyExists = errors.New("User with this email already exists")
