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



      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
            <img src="https://cdn.discordapp.com/attachments/987629512449720340/1027291570774495272/menu.png" alt="" />
        </label>
        <Link to="/" className="logo">
    <img src={logo} alt="" />
  </Link>
  <ul className="ul-listas">
<li><NavLink to="/"> Inicio</NavLink></li>
  <li><NavLink to="/">Listado de Tortas</NavLink>
  </li>
  <li><NavLink to="/">Contacto</NavLink></li>
      <li><NavLink to="/">Sobre Nosotros</NavLink></li>
      <li><NavLink to="/cart"><Cartwidget/><span className="total-productos">{totalProductos () || "0"}</span></NavLink></li>
</ul>
    </nav>



      </header>
      <section className="zona1"></section>


      
    </>
  );
}

export default Navbar;
