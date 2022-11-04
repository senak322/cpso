import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <header className="header">
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>ЦПСО</Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;