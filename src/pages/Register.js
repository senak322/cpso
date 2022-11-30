import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import useFormAndValidation from "../utils/useFormAndValidation.js";
import { Link } from "react-router-dom";

function Register(props) {
  const formValues = {
    name: "",
    email: ""
  };

  const { values, handleChange, setValues, errors, isValid, handleBlur } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister(values.name, values.email);
  }

  React.useEffect(() => {
    setValues(formValues);
  }, []);

  return (
    <div className="form__container">
      <div className="form__wrapper">
        <h1 className="form__title">Регистрация на платформе ЦПСО</h1>
        <Form className="form" onSubmit={handleSubmit} noValidate>
        <Form.Group as={Row} controlId="formPlaintextName">
            <Form.Label column sm="2">
            ФИО
            </Form.Label>
            <Col sm="10">
              <Form.Control
                className="input"
                required
                name="name"
                type="text"
                placeholder="ФИО"
                value={values.name || ""}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span
                className={`form__error ${
                  isValid ? "" : "form__error_type_active"
                }`}
              >
                {errors.name}
              </span>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextLogin">
            <Form.Label column sm="2">
            E-mail
            </Form.Label>
            <Col sm="10">
              <Form.Control
                className="input"
                required
                name="email"
                type="email"
                placeholder="E-mail"
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

          
          <div className="form__container_submit">
            <Button
              type="submit"
              className={`${isValid ? "" : "disabled"}`}
            >
              {props.isLoading ? "Регистрация..." : "Зарегистрироваться"}
            </Button>
            <p>Уже зарегистрированы?</p>
            <Link
            to="/signin"
            className="link"
          >
            <Button
              type="submit"
              variant="light"
            >Войти
            </Button>
          </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
