import './CardItem.css'
import {Col, Image, Button, Card} from "react-bootstrap";
//TODO: check how to make image as a card property and work it correctly
function CardProduct(props) {
    return (
        <Col>
            <Card className="h-100">
                <Image src={props.product.picture} className="card-img-left" alt="..."></Image>
                <Card.Body>
                    <Card.Title>{props.product.name}</Card.Title>
                    <Card.Text>{props.product.description}</Card.Text>
                    <div className="d-inline">
                        <Button variant="primary" className="me-2">Купить</Button>
                        <span className="text-black"> <span className="text-black price">{props.product.price} &#8381;</span> / 1 шт.</span>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CardProduct;