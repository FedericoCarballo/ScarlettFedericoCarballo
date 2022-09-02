import React, { useState } from "react";
import Itemcount from "../Itemcount.jsx/Itemcount";
import { Link } from 'react-router-dom'
import '../ItemDetailContainer.jsx/ItemDetail.css'



const ItemDetail = ({ datos }) => {
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (cantidad) => {
    setGoToCart(true)
  };

  return (
    <>
      <div className="container">
        <div className="caja-producto">
          <div className="imagen-torta">
            <a href="">
              <img src={datos.img} alt="" />
            </a>
          </div>
          <div className="detalles-torta">
            <h5>{datos.tortatitulo}</h5>
            <p>Precio: ${datos.precio}</p>
          </div>
          {
            goToCart
            ? <Link to='/cart'>Termine su compra</Link>
            : <Itemcount initial={0} stock={9} onAdd={onAdd} />
          }
          
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
