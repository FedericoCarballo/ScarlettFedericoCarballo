import React from "react";
import "../ItemListContainer.jsx/Item.css"

const Item = ({carta}) => {
  return (
    <>
      <div className="container">
        <div className="caja-producto">
          <div className="imagen-torta">
            <img src={carta.img} alt="" />
          </div>
          <div className="detalles-torta">
            <h5>{carta.tortatitulo}</h5>
            <p>Precio: ${carta.precio}</p>
          </div>
          {carta.boton}
        </div>
      </div>
    </>
  );
};

export default Item;
