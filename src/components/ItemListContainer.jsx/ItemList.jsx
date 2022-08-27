import React from 'react'
import Item from './Item'

const ItemList = (datos = []) => {
  return (
    datos.map(tortas => <Item key={tortas.id} carta={tortas} />)
  )
}

export default ItemList