import React, { useState } from "react";
import Itemcount from "../Itemcount.jsx/Itemcount";
import { Link } from 'react-router-dom'
import '../ItemDetailContainer.jsx/ItemDetail.css'
import { useCartContext } from "../../context/CartContext";



const ItemDetail = ({ datos }) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext()

  const onAdd = (cantidad) => {
    setGoToCart(true)
    addProduct(datos, cantidad)
  };

  return (
    <>
      <div className="container">
        <div className="caja-producto">
          <div className="imagen-torta">
            <Link to="/">
              <img src={datos.img} alt="" />
            </Link>
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
