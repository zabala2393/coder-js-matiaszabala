
import { getProduct } from '../firebase/db'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import ItemDetail from './ItemDetail'


function ItemDetailContainer () {
    const [item, setItem] = useState()
    const { id } = useParams()
    useEffect (() => {
        getProduct(id)
        .then(res=> setItem(res))
    }, [id] )

    return (
        <ItemDetail item={item}/>        
    )
}
export default ItemDetailContainer