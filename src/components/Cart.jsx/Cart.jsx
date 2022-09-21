import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem.jsx/CartItem'
import '../Cart.jsx/Cart.css'
import Formulario from '../Formulario.jsx/Formulario'


const Cart = () => {
  const { cart, totalPrecio } = useCartContext()
  
  if (cart.length === 0) {
    return (
      <>
      <div className='carrito-vacio'></div>
      <div className='carrito-si'>
      <p>No has agregado productos al carrito.</p>
      <Link style={{textDecoration: "none"}} to="/"><div className='boton-hacercompras'>¡Haz click para hacer tus compras!</div></Link>
      </div>
      
      

      </>
    );
  }

  return (
    <>
     {
      cart.map(product => <CartItem key={product.id} product={product} />)
     }

     <p className='total-precio'>
      Total: ${totalPrecio()}
     </p>
    
    <div className='formulario-finalizar'>
      <Formulario/>
    </div>

     
    </>
  )


}

export default Cart