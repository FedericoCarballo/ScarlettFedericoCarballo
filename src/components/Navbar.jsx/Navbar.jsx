import React from "react";
import "./Navbar.css";
import logo from "./scarlettlogo.png";

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <a href="/" className="logo">
            <img src={logo} alt="" />
          </a>
          <div className="menu">
            <ul className="list">
              <li>
                <a href="/">Tienda +</a>
              </li>
              <li>
                <a href="/">Nosotros</a>
              </li>
              <li>
                <a href="/">Contacto</a>
              </li>
              <li>
                <a href="/">Registrate</a>
              </li>
              <li><a href="/">Tus compras: $0</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <section className="zona1"></section>
    </>
  );
}

export default Navbar;
