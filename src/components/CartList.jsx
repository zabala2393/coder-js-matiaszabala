import { ListGroupItem, ListGroup, Button } from "react-bootstrap"
import { useCart } from "../context/CartContext"
import ItemCount from "./ItemCount"

function CartList(item) {

    const { cart } = useCart()
    return (
        <ListGroup >{cart.map(item =>
        (<ListGroupItem key={item.id}>
            {item.name}x{item.quantity}
            ${item.price}
            <ItemCount></ItemCount>
        </ListGroupItem>))}
        </ListGroup>
    )
}
export default CartList