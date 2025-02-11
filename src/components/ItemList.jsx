import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router'

function ItemList({ items, label, bgc }) {
    const navigate = useNavigate()
    return (<Container style={{ backgroundColor: bgc }}>
        {label = 'Bienvenidos a la tienda!!!'}
        <Row>
            {items.map(item => (
                <Col key={item.id}  >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Card.Text>
                                ${item.price}
                            </Card.Text>
                            <Button variant="primary" onClick={() => navigate(`/products/${item.id}`)}>Detalles</Button>
                        </Card.Body>
                    </Card></Col>))
            }
        </Row>
    </Container>)
}
export default ItemList