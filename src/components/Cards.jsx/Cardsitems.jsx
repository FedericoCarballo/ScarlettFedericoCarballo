import React from 'react'
import Cards from './Cards'
import './Cards.css'
import Itemcount from '../Itemcount.jsx/Itemcount'

function Cardsitems() {

  const onAdd = (cantidad) => {
    if (cantidad <= 0) {
      alert("Suma unidades para poder sumar tus productos al carrito")
    } else {
      alert("Compraste " + (cantidad) + " unidades")
    }
  }

    const datos = [
        {
            img:'https://cdn.discordapp.com/attachments/765787078399098880/995576655336702042/TORTAS-WEB-08-300x300-removebg-preview.png',
            tortatitulo:'Minicake Bauhaus',
            precio:'4950',
            boton: <Itemcount initial={0} stock={8} onAdd={onAdd }/>
        },
        {
            img:'https://cdn.discordapp.com/attachments/765787078399098880/995576655571587072/TORTAS-WEB-29-300x300-removebg-preview.png',
            tortatitulo:'Hudson',
            precio:'4150',
            boton: <Itemcount initial={0} stock={4} onAdd={onAdd}/>
        },
        {
            img:'https://cdn.discordapp.com/attachments/765787078399098880/995576656032964628/TORTAS-WEB-32-300x300-removebg-preview.png',
            tortatitulo:'Chococheesecake',
            precio:'4450',
            boton: <Itemcount initial={0} stock={9} onAdd={onAdd}/>
        }
    ]
  return (
    <>
              <div className="section-1">
              {datos.map((items,index) =>(
                <Cards key={index} img={items.img} tortatitulo={items.tortatitulo} precio={items.precio} boton= {items.boton} />
              ))}
              </div>
    </>
  )
}

export default Cardsitems