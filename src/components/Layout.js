import React from "react";
import { Outlet } from "react-router-dom";
import books from "../images/books.jpg";
import Header from "./Header";
import Footer from "./Footer.js";

function Layout({ loggedIn, onLogout }) {
  return (
    <>
      <Header loggedIn={loggedIn} onLogout={onLogout} />

      <main
        className={`main ${loggedIn ? "main__loggined" : ""}`}
        style={{ backgroundImage: `url(${books})` }}
      >
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;
