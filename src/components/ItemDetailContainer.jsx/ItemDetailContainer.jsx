import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import Itemcount from '../Itemcount.jsx/Itemcount'
import {useParams} from 'react-router-dom'

const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades`)
  }
  
  const tortas = [
    {   id:1,
        img:'https://cdn.discordapp.com/attachments/765787078399098880/995576655336702042/TORTAS-WEB-08-300x300-removebg-preview.png',
        tortatitulo:'Minicake Bauhaus',
        categoria:'Chocolate',
        precio:'4950',
        boton: <Itemcount initial={0} stock={8} onAdd={onAdd}/>
    },
    {
        id:2,
        img:'https://cdn.discordapp.com/attachments/765787078399098880/995576655571587072/TORTAS-WEB-29-300x300-removebg-preview.png',
        tortatitulo:'Hudson',
        categoria:'Vainilla',
        precio:'4150',
        boton: <Itemcount initial={0} stock={4} onAdd={onAdd}/>
    },
    {
        id:3,
        img:'https://cdn.discordapp.com/attachments/765787078399098880/995576656032964628/TORTAS-WEB-32-300x300-removebg-preview.png',
        tortatitulo:'Chococheesecake',
        categoria:'Vainilla',
        precio:'4450',
        boton: <Itemcount initial={0} stock={9} onAdd={onAdd}/>
    },
    {
        id:4,
        img:'https://cdn.discordapp.com/attachments/765787078399098880/995576656032964628/TORTAS-WEB-32-300x300-removebg-preview.png',
        tortatitulo:'Chococheesecake',
        categoria:'Vainilla',
        precio:'4450',
        boton: <Itemcount initial={0} stock={9} onAdd={onAdd}/>
    },
    {
        id:5,
        img:'https://cdn.discordapp.com/attachments/765787078399098880/995576656032964628/TORTAS-WEB-32-300x300-removebg-preview.png',
        tortatitulo:'Chococheesecake',
        categoria:'Chocolate',
        precio:'4450',
        boton: <Itemcount initial={0} stock={9} onAdd={onAdd}/>
    },
                {
        id:6,
        img:'https://cdn.discordapp.com/attachments/765787078399098880/995576656032964628/TORTAS-WEB-32-300x300-removebg-preview.png',
        tortatitulo:'Chococheesecake',
        categoria:'Chocolate',
        precio:'4450',
        boton: <Itemcount initial={0} stock={9} onAdd={onAdd}/>
    }
]

const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([])
    const {detalleId} = useParams()
    useEffect(() => {
      const getDatos = new Promise( resolve  => {
        setTimeout(() => {
            resolve(tortas)
        }, 2000);
      });
      getDatos.then(res => setDatos(res.find(tortas => tortas.id === parseInt(detalleId))))

    }, [])
  return (
    <ItemDetail datos={datos}/>
  )
}

export default ItemDetailContainer