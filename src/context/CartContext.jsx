import React, {useState, useContext} from 'react'

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const clearCart = () => setCart([])
const isInCart = (id) => cart.find (product => product.id === id) ? true : false;
const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id)
        newCart.push({ ...item, quantity: newQuantity})
        setCart(newCart)
    }

    const totalPrecio = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0)
    }

    const totalProductos = () => cart.reduce((acumulado, productoSeleccionado) => acumulado + productoSeleccionado.quantity, 0)






  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrecio,
        totalProductos,
        cart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider