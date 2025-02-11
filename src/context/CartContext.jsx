import { createContext, useContext } from "react"

export const useCart = () => useContext(CartContext)
export const CartContext = createContext(null) 

