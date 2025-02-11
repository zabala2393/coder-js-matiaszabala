import CartWidget from "./CartWidget"
import { NavLink } from 'react-router'
import { Container, Nav, Navbar } from "react-bootstrap"

function NavBar() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand as={NavLink} to='/'>Free-shop New York</Navbar.Brand>
                <Nav.Link as={NavLink} to='/category/clothes'>Clothes</Nav.Link>
                <Nav.Link as={NavLink} to='/category/electronics'>Electronics</Nav.Link>
                <Nav.Link as={NavLink} to='/category/shoes'>Shoes</Nav.Link>
                <Nav.Link as={NavLink} to='/category/makeup'>Makeup</Nav.Link>
                <Nav.Link as={NavLink} to='/cart'><CartWidget></CartWidget></Nav.Link>
            </Container>
        </Navbar>
    )
}
export default NavBar