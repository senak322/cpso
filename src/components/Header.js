import React from "react";
import logoHeader from "../images/cpso_logo_header.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import person from "../images/person.png";

function Header(props) {
  return (
    <header className="header">
      <Navbar className="p-0">
        <Container fluid>
          <a href="https://hssc-exam.ru">
            <img
              src={logoHeader}
              className="header__logo"
              alt="Платформа ЦПСО"
            ></img>
          </a>
          {props.loggedIn ? (
            <DropdownButton
              align="end"
              title={<img src={person} className="header__image" alt="Фото профиля"></img>}
              id="dropdown-menu-align-end"
              variant="light"
            >
              
              <Dropdown.Item eventKey="1">User Name</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="2">Оценки</Dropdown.Item>
              <Dropdown.Item eventKey="3">Настройки</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4" onClick={props.onLogout}>Выход</Dropdown.Item>
            </DropdownButton>
          ) : (
            ""
          )}
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

{
  /* <a href="https://hssc-exam.ru" class="navbar-brand has-logo
            ">
            <span class="logo d-none d-sm-inline">
                <img src="//hssc-exam.ru/pluginfile.php/1/theme_moove/logo/1663852834/Cpso_HrznRu.png" alt="Платформа ЦПСО">
            </span>
    </a> */
}
