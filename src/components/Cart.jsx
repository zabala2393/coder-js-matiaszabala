import CartList from './CartList'
import Button from 'react-bootstrap/esm/Button'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router'
import { Container } from 'react-bootstrap'
function Cart() {

    const { cart, getTotal } = useCart()

    if (cart.length === 0) {
        return (
            <Container>
                <h2>No hay productos aun en el carrito</h2>
                <Button as={Link} to='/'>Ver catalogo de productos</Button>
            </Container>
        )
    } return (
        <div>
            <CartList items={cart}></CartList>
            <p>Total : ${getTotal()}</p>
            <Button as={Link} to='/checkout'>Finalizar compra</Button>
        </div>
    )
}
export default Cart