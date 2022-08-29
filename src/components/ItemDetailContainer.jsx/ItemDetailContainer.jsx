import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import Itemcount from '../Itemcount.jsx/Itemcount'

const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades`)
  }
  
const tortas = [
    {   id:1,
        img:'https://cdn.discordapp.com/attachments/765787078399098880/995576655336702042/TORTAS-WEB-08-300x300-removebg-preview.png',
        tortatitulo:'Minicake Bauhaus',
        precio:'4950',
        boton: <Itemcount initial={0} stock={8} onAdd={onAdd}/>
    },]

const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([])
    useEffect(() => {
      const getDatos = new Promise( resolve  => {
        setTimeout(() => {
            resolve(tortas)
        }, 2000);
      });
      getDatos.then(res => setDatos(res))

    }, [])
  return (
    <ItemDetail datos={datos}/>
  )
}

export default ItemDetailContainer