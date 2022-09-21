import React from "react";
import "../ItemListContainer.jsx/Item.css"
import { Link } from 'react-router-dom'


const Item = ({carta}) => {


  return (
    <>

      <div className="container">
        <div className="caja-producto">
          <div className="imagen-torta">
            <Link to={`/detalle/${carta.id}`}><img src={carta.img} alt="" /></Link>
          </div>
          <div className="detalles-torta">
            <h5>{carta.tortatitulo}</h5>
            <p>Precio: ${carta.precio}</p>
          </div>
          <Link style={{textDecoration:"none"}} to={`/detalle/${carta.id}`}><div className="detalles-boton">Detalles</div></Link>
        </div>
      </div>
    </>
  );
};

export default Item;
