import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'


export function ItemCount({ item }) {

    const [count, setCount] = useState(0)
    const { addToCart, cart } = useContext(CartContext)

    const handleAddToCart = () => {

        const isInCart = cart.some(prod => prod.id === item.id)

        if (isInCart) { addToCart({ quantity: count }) } else {
            addToCart({ ...item, quantity: count })
        }
    }

    const handleAdd = () => {

        setCount(count + 1)

    }

    const handleSubtract = () => {
        if (count > '0')
            return (
                setCount(count - 1)
            )
    }

    return (
        <div>
            <p style={{ border: 'solid 1 white' }}>{count}</p>
            <button style={{ backgroundColor: 'lightblue' }} onClick={handleSubtract}>-</button>
            <button style={{ backgroundColor: 'lightgreen' }} onClick={handleAdd}>+</button>
            <button style={{ backgroundColor: 'beige' }} onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount