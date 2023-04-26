import './CardItem.css'
import {Col, Image, Button, Card} from "react-bootstrap";
function CardProduct({image, card}) {
    return (
        <Col>
            <Card className="h-100">
                <Image src={image} className="card-img-left" alt="..."></Image>
                <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                    <div className="d-inline">
                        <Button variant="primary" className="me-2">Купить</Button>
                        <span className="text-black"> <span className="text-black price">{card.price} &#8381;</span> / 1 шт.</span>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CardProduct;