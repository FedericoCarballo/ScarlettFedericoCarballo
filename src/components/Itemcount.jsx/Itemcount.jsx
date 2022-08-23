import React, {useState} from 'react'
import './Itemcount.css'



const Itemcount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)
    


  return (
    <>
        <div className='contador'>
        <button disabled={count >stock}onClick={() => setCount(count + 1)}>+</button>
        <span>{count}</span>
        <button disabled={count <= 1} onClick={() => setCount(count - 1)}>-</button>
    </div>
            <div>
        <button disabled={stock <= 0} onClick={() => onAdd(count)} className='carrito-compras'>Agregar al carrito</button>
        </div>
    </>
  )
}

export default Itemcount