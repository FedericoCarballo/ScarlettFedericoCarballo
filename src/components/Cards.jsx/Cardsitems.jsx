import React from 'react'
import Cards from './Cards'
import './Cards.css'

function Cardsitems() {

    const datos = [
        {
            img:'https://cdn.discordapp.com/attachments/765787078399098880/995576655336702042/TORTAS-WEB-08-300x300-removebg-preview.png',
            tortatitulo:'Minicake Bauhaus',
            precio:'4950',
            boton: 'Comprar ya'
        },
        {
            img:'https://cdn.discordapp.com/attachments/765787078399098880/995576655571587072/TORTAS-WEB-29-300x300-removebg-preview.png',
            tortatitulo:'Hudson',
            precio:'4150',
            boton: 'Comprar ya'
        },
        {
            img:'https://cdn.discordapp.com/attachments/765787078399098880/995576656032964628/TORTAS-WEB-32-300x300-removebg-preview.png',
            tortatitulo:'Chococheesecake',
            precio:'4450',
            boton: 'Comprar ya'
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