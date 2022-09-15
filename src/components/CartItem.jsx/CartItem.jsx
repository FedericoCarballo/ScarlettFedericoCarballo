import React from "react";
import { useCartContext } from "../../context/CartContext";
import "../CartItem.jsx/CartItem.css";

const CartItem = ({ product }) => {
  const { removeProduct } = useCartContext()
  return (
    <>
      <div className="ItemCart">
        <section className="detalles-cart">
          <div>
            <img
              src={product.img}
              alt={product.tortatitulo}
            />
          </div>
          <div className="info-cart">
            <h2>{product.tortatitulo}</h2>
            <p> {product.quantity} x {product.precio} </p>
            <div className="subtotal">
              <span>Subtotal: ${product.quantity * product.precio} </span>
            </div>
          </div>
        </section>
        <div onClick={ () => removeProduct(product.id)} className="delete">
          <h3>X</h3>
        </div>
      </div>
      <hr className="hr-cart" />
    </>
  );
};

export default CartItem;
