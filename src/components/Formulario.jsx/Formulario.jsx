import React from 'react'
import { useState } from 'react'
import '../Formulario.jsx/Formulario.css'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const Formulario = ( {totalPrecio, cart } ) => {
    const [formulario, setFormulario] = useState ({
        buyer: {
            email: "",
            nombre:"",
            apellido: "",
            telefono: "",
        },
    total: totalPrecio,
    cart: cart
    })

    const {buyer: {email, nombre, apellido, telefono},} = formulario

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormulario({
            ...formulario,
            buyer: {
                ...formulario.buyer,
                [name]: value
            }
        })
    }


    const handleClick = async (e) => {
        e.preventDefault()
        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        await addDoc(ordersCollection, formulario)
    }

  return (
    <>
    <div className="login-page">
  <div className="form">
    <h3>Formulario de compra</h3>
    <form className="register-form">
      <input type="text" name='nombre' placeholder="Nombre" value={nombre} onChange={handleChange} />

      <input type="text" name='apellido' placeholder='Apellido' value={apellido} onChange={handleChange} />

      <input type="text" name='telefono' placeholder="Numero de telefono" value={telefono} onChange={handleChange}/>

      <input type="email" name='email' placeholder="Correo electronico" value={email} onChange={handleChange}/>

      <button type='submit' onClick={handleClick}>Enviar datos</button>
    </form>
  </div>
</div>
    </>
  )
}

export default Formulario