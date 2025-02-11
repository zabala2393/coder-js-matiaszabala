import { CartContext } from "./CartContext";
import { useState } from "react";

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([])
    const addToCart = item => {
        const isInCart = cart.some(prod => prod.id === item.id)
        if (!isInCart) return setCart([...cart, item])
    }

    const getQty = () => {
        const quantities = cart.map(item => item.quantity)
        const quantitiesTotal = quantities.reduce((acc, current) => acc + current, 0)
        return quantitiesTotal
    }

    const getTotal = () => {
        const totales = cart.map(item => item.quantity * item.price)
        const total = totales.reduce((acc, current) => acc + current, 0)
        return total
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, getQty, getTotal }}>
            {children}
        </CartContext.Provider>
    )
}