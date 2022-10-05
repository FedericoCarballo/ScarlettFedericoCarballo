import React from "react";
import Cartwidget from "../Cartwidget.jsx/Cartwidget";
import "./Navbar.css";
import logo from "./scarlettlogo.png";
import '../Cartwidget.jsx/cartwidget.png'
import {NavLink} from 'react-router-dom'  
import { useCartContext } from '../../context/CartContext'
import { Link } from "react-router-dom";


function Navbar() {
  const {totalProductos} = useCartContext()
  window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
})



  return (
    <>
      <header>


<nav id="primary_nav_wrap" className="navbar">
  <Link to="/" className="logo">
    <img src={logo} alt="" />
  </Link>


  <div className="menu">
<ul className="list">
<li><NavLink to="/"> Inicio</NavLink></li>
  <li><NavLink to="/">Tortas</NavLink>
    <ul className="categorias-tortas">
      <li><NavLink className="categorias" to="/tortas/Vainilla">Vainilla</NavLink></li>
      <li><NavLink className="categorias" to="/tortas/Chocolate">Chocolate</NavLink></li>
    </ul>
  </li>
  <li><NavLink to="/">Contacto</NavLink></li>
      <li><NavLink to="/">Sobre Nosotros</NavLink></li>
      <li><NavLink to="/cart"><Cartwidget/><span className="total-productos">{totalProductos () || "0"}</span></NavLink></li>
</ul>
</div>
</nav>
      </header>
      <section className="zona1"></section>


      
    </>
  );
}

export default Navbar;
