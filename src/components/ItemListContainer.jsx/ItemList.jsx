import React from 'react'
import Item from './Item'

const ItemList = ({datos = []}) => {
  return (
    <>
    <div className='section-1'>
    {datos.map(tortas => <Item key={tortas.id} carta={tortas} />)}
    </div>

    </>
  )
}

export default ItemList