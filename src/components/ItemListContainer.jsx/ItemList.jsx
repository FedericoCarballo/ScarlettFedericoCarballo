import React from 'react'
import Item from './Item'
import { Link } from "react-router-dom";
import './Item.css'

const ItemList = ({datos}) => {
  return (
    <>
          <div className="titulo-tortas">
      <h1>Tortas</h1>
      <hr className="hr-tortas" />
      <div className='categorias'>
        <span className='categorias-torta'><Link to="/tortas/Chocolate" className='categorias-torta'> Chocolate </Link></span>
        <span className='categorias-torta'><Link to="/tortas/Vainilla" className='categorias-torta'> Vainilla</Link></span>
      </div>
      </div>
    <div className='section-1'>
    {datos.map(tortas => <Item key={tortas.id} carta={tortas} />)}
    </div>

    </>
  )
}

export default ItemList