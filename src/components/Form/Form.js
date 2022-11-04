import React from 'react';
import './Form.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function FormContainer() {
    return (
        <div className="form__container">

            <div className="form__wrapper">
                <h1 className="form__title">Войти на платформу ЦПСО</h1>
                <Form className="form">
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Логин
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Логин" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Пароль
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Пароль" />
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default FormContainer;