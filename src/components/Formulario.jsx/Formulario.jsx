import React from 'react'
import { useState } from 'react'
import '../Formulario.jsx/Formulario.css'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useCartContext } from '../../context/CartContext'


const Formulario = () => {
const [nombre, setNombre] = useState('')
const [apellido, setApellido] = useState('')
const [telefono, setTel] = useState('')
const [email, setEmail] = useState('')
const [idCompra, setIdCompra] = useState('')

const { cart, totalPrecio } = useCartContext()


function handleClick(e) {
  e.preventDefault()

  const pedido = {
    buyer: {nombre: nombre,
       apellido: apellido,
        telefono: telefono,
         email: email},
    carrito: cart.map(product => ({titulo: product.tortatitulo, precio: product.precio, quantity: product.quantity})),
    total: totalPrecio()
  }

 if (!nombre || !apellido || !telefono || !email) return;

  
  const db = getFirestore()
  const col = collection(db, 'orders')
  addDoc(col, pedido).then(({id}) => setIdCompra(id))
}

  return (
    <>
    <div className="login-page">
  <div className="form">
    <h3>Formulario de compra</h3>
    <p>ID de compra:{idCompra} </p>
    <form className="register-form">
      <input onChange={(e) => setNombre(e.target.value)} type="text" name='nombre' placeholder="Nombre" value={nombre} required   />

      <input onChange={(e) => setApellido(e.target.value)} type="text" name='apellido' placeholder='Apellido' value={apellido} required />

      <input onChange={(e) => setTel(e.target.value)} type="text" name='telefono' placeholder="Numero de telefono" value={telefono} required />

      <input onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="Correo electronico" value={email} required />

      <button type='submit' onClick={handleClick}>Enviar datos</button>
    </form>
  </div>
</div>
    </>
  )
}

export default Formulario