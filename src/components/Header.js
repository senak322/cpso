import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {
    return (
        <header className="header">
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>ЦПСО</Navbar.Brand>
                    {props.loggedIn ? <button type="button" onClick={props.onLogout}>Выйти</button> : ''}
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;