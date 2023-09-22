import React from "react"
import "../Form/Form.css"
import Form from "../Form/Form"

function Register() {
  return (
    <main>
      <Form
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        question="Уже зарегистрированы?"
        linkText=" Войти"
        link="/signin"
      >
        <label className="form__label">
          Имя
          <input
            name="name"
            className="form__input"
            id="name-input"
            type="text"
            minLength="2"
            maxLength="40"
            required
            placeholder="имя"
          />
          <span className="form__input-text">Заполните поле "Имя".</span>
        </label>
        <label className="form__label">
          E-mail
          <input
            name="email"
            className="form__input"
            id="email-input"
            type="email"
            required
            placeholder="почта"
          />
          <span className="form__input-text">Адрес электронной почты должен содержать символ "@".</span>
        </label>
        <label className="form__label">
          Пароль
          <input
            name="password"
            className="form__input"
            id="password-input"
            type="password"
            required
            minLength="8"
            maxLength="14"
            placeholder="пароль"
          />
          <span className="form__input-text">Заполните поле "Пароль".</span>
        </label>
      </Form>
    </main>
  )
}

export default Register