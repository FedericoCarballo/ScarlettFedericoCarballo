import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem.jsx/CartItem'
import '../Cart.jsx/Cart.css'


const Cart = () => {
  const { cart, totalPrecio } = useCartContext()
  
  if (cart.length === 0) {
    return (
      <>
      <div className='carrito-si'>
      <p>No has agregado productos al carrito.</p>
      <Link to="/"> Hacer compras </Link>
      </div>

      </>
    );
  }

  return (
    <>
     {
      cart.map(product => <CartItem key={product.id} product={product} />)
     }

<div></div>
     <p>
      total: {totalPrecio()}
     </p>
    </>
  )


}

export default Cart