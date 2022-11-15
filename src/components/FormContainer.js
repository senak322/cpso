import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function FormContainer(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin(email, password);
  }

  function handleChangeEmail(e) {
    setEmail(e.currentTarget.value);
    console.log(email);
  }

  function handleChangePassword(e) {
    setPassword(e.currentTarget.value);
    console.log(password);
  }

  React.useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  return (
    <div className="form__container">
      <div className="form__wrapper">
        <h1 className="form__title">Войти на платформу ЦПСО</h1>
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextLogin">
            <Form.Label column sm="2">
              Логин
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Логин"
                value={email || ""}
                onChange={handleChangeEmail}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Пароль
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="password"
                placeholder="Пароль"
                value={password || ""}
                onChange={handleChangePassword}
              />
            </Col>
          </Form.Group>
          <div className="form__container_submit">
          <Button type="submit" className="mt-3">
            Войти
          </Button>
          <a href="https://hssc-exam.ru/login/forgot_password.php" target="_block" className="form__link">Забыли логин или пароль?</a>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default FormContainer;
