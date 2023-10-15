package models

import (
	"database/sql"
	"fmt"
)

type Question struct {
	ID         int
	Question   string
	Gewichtung int
}

type Answer struct {
	ID        int
	Answer    string
	IsCorrect int
}

type QuestionWithAnswers struct {
	Question
	Answers []*Answer
}

type QuestionModel struct {
	DB *sql.DB
}

func (m *QuestionModel) SelectQuestions() ([]*QuestionWithAnswers, error) {
	stmt := `SELECT question_id, question, gewichtung FROM quiz_questions LIMIT 20`
	rows, err := m.DB.Query(stmt)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	questionsWithAnswers := []*QuestionWithAnswers{}

	for rows.Next() {
		q := &Question{}

		err = rows.Scan(&q.ID, &q.Question, &q.Gewichtung)
		if err != nil {
			return nil, err
		}

		answers, err := m.SelectAnswersForQuestion(q.ID)
		if err != nil {
			return nil, err
		}

		questionWithAnswers := &QuestionWithAnswers{
			Question: *q,
			Answers:  answers,
		}

		questionsWithAnswers = append(questionsWithAnswers, questionWithAnswers)
	}

	if err = rows.Err(); err != nil {
		fmt.Println("test6")
		return nil, err
	}

	return questionsWithAnswers, nil
}

func (m *QuestionModel) SelectAnswersForQuestion(questionID int) ([]*Answer, error) {
	stmt := `SELECT answer_id, answer, is_correct FROM quiz_answers WHERE question_id=$1`
	rows, err := m.DB.Query(stmt, questionID)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	answers := []*Answer{}

	for rows.Next() {
		a := &Answer{}

		err = rows.Scan(&a.ID, &a.Answer, &a.IsCorrect)
		if err != nil {
			return nil, err
		}

		answers = append(answers, a)
	}

	if err = rows.Err(); err != nil {
		return nil, err
	}

	return answers, nil
}
