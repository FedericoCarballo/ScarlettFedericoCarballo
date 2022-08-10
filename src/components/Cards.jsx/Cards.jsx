import React from 'react'
import './Cards.css'

function Cards(props) {
    const { img, tortatitulo, precio, boton} = props;
  return (
    <>
        <div className="container">
          <div className="caja-producto">
            <div className="imagen-torta">
              <img src={img} alt="" />
            </div>
            <div className="detalles-torta">
              <h5>{tortatitulo}</h5>
              <p>Precio: ${precio}</p>
            </div>
            <button className="carrito-compras">{boton}</button>
          </div>
        </div>
    </>
  )
}

export default Cards