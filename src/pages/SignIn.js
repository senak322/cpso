import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import useFormAndValidation from "../utils/useFormAndValidation.js";
import { Link, Navigate } from "react-router-dom";

function SignIn(props) {

  const { values, handleChange, setValues, errors, isValid, handleBlur, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin(values.email, values.password);
  }

  useEffect(() => {
    const formValues = {};
    setValues(formValues);
    resetForm();
  }, [resetForm, setValues]);

  if (props.loggedIn) {
    return (
      <Navigate to="/home/user-info" />
    )
  }

  return (
    <div className="form__container">
      <div className="form__wrapper">
        <h1 className="form__title">Войти на платформу ЦПСО</h1>
        <Form className="form" onSubmit={handleSubmit} noValidate>
          <Form.Group as={Row} controlId="formPlaintextLogin">
            <Form.Label column sm="2">
              Логин
            </Form.Label>
            <Col sm="10">
              <Form.Control
                className="input"
                required
                name="email"
                type="email"
                placeholder="Логин"
                value={values.email || ""}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span
                className={`form__error ${
                  isValid ? "" : "form__error_type_active"
                }`}
              >
                {errors.email}
              </span>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Пароль
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                name="password"
                type="password"
                placeholder="Пароль"
                value={values.password || ""}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span
                className={`form__error ${
                  isValid ? "" : "form__error_type_active"
                }`}
              >
                {errors.password}
              </span>
            </Col>
          </Form.Group>

          <div className="form__container_submit">
            <Button
              type="submit"
              className={`${isValid ? "" : "disabled"}`}
            >
              {props.isLoading ? "Вход..." : "Войти"}
            </Button>
            <a
              href="https://hssc-exam.ru/login/forgot_password.php"
              target="_block"
              className="form__link"
            >
              Забыли логин или пароль?
            </a>
            <Link
            to="/register"
            className="link"
          >
            <Button
              type="submit"
              variant="light"
            >Регистрация
            </Button>
          </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;
