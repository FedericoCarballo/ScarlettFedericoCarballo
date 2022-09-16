import React from "react";
import Cartwidget from "../Cartwidget.jsx/Cartwidget";
import "./Navbar.css";
import logo from "./scarlettlogo.png";
import '../Cartwidget.jsx/cartwidget.png'
import {NavLink} from 'react-router-dom'  
import { useCartContext } from '../../context/CartContext'

function Navbar() {
  const {totalProductos} = useCartContext()

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
              <li><NavLink to="/tortas/Chocolate">Chocolate</NavLink></li>
              <li><NavLink to="/tortas/Vainilla">Vainilla</NavLink></li>
              <li><NavLink to="/">Contacto</NavLink></li>
              <li><NavLink to="/">Registrate</NavLink></li>
              <li><NavLink to="/cart"><Cartwidget/><span className="total-productos">{totalProductos () || ""}</span></NavLink></li>

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
