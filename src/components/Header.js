import React from "react";
import logoHeader from "../images/cpso_logo_header.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logout from "../images/exit.png";
import Notifications from "./Notifications.js";

function Header(props) {
  return (
    <header className="header">
      <Navbar className="p-0">
        <Container fluid>
          <a href="https://hssc-exam.ru" target="_blank" rel="noreferrer">
            <img
              src={logoHeader}
              className="header__logo"
              alt="Платформа ЦПСО"
            ></img>
          </a>
          {props.loggedIn ? (
            <div className="header__container">
              <Notifications />
              <button
                type="button"
                className="header__logout"
                onClick={props.onLogout}
              >
                <img
                  className="header__logout_img"
                  alt="Выйти"
                  src={logout}
                ></img>
                Выйти
              </button>
            </div>
          ) : (
            ""
          )}
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
