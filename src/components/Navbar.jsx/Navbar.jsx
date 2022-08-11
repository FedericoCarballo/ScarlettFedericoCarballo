import React from "react";
import Cartwidget from "../Cartwidget.jsx/Cartwidget";
import "./Navbar.css";
import logo from "./scarlettlogo.png";
import '../Cartwidget.jsx/cartwidget.png'

function Navbar() {

  const navBarItems = ["Tienda +", "Nosotros", "Contacto", "Registrate", <Cartwidget />];
  
  window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
  })

  return (
    <>
      <header>
        <nav className="navbar">
          <a href="/" className="logo">
            <img src={logo} alt="" />
          </a>
          <div className="menu">
            <ul className="list">
            {navBarItems.map((item) => (
              <li key={item}><a href="/">{item}</a></li>
            ))}
            </ul>
          </div>
        </nav>
      </header>
      <section className="zona1"></section>

      <div className="titulo-tortas">
      <h1>Tortas</h1>
      <hr className="hr-tortas" />
      </div>
      
    </>
  );
}

export default Navbar;
