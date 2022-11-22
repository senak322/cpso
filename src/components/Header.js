import React from 'react';
import logoHeader from '../images/cpso_logo_header.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {
    return (
        <header className="header">
            <Navbar className="p-0">
                <Container>
                    <a href="https://hssc-exam.ru"><img src={logoHeader} className="header__logo" alt="Платформа ЦПСО"></img></a>
                    {props.loggedIn ? <button type="button" onClick={props.onLogout}>Выйти</button> : ''}
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;

{/* <a href="https://hssc-exam.ru" class="navbar-brand has-logo
            ">
            <span class="logo d-none d-sm-inline">
                <img src="//hssc-exam.ru/pluginfile.php/1/theme_moove/logo/1663852834/Cpso_HrznRu.png" alt="Платформа ЦПСО">
            </span>
    </a> */}