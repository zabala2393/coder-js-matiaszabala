import { useState, useEffect, useContext } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router'
import { getProducts, getProductsByCategory } from '../firebase/db'
import { CartContext } from '../context/CartContext'

function ItemListContainer() {

    const [items, setItems] = useState([])
    const { id } = useParams()
    const cart = useContext(CartContext)


    useEffect(() => {
        if (id) {
            getProductsByCategory(id)
                .then(res => setItems(res))
        } else {
            getProducts()
                .then(res => setItems(res))
        }

    }, [id])
    return (
        <ItemList items={items}></ItemList>
    )
}
export default ItemListContainer