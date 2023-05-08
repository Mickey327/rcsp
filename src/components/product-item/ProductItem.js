import './ProductItem.css'
import {Col, Image, Button, Card} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import {PRODUCT_ROUTE} from "../../utils/consts";
import {useSelector} from "react-redux";
//TODO: check how to make image as a card property and work it correctly
function ProductItem({product}) {
    const navigate = useNavigate()
    const isAuth = useSelector(state => state.users.isAuth)

    return (
        <Col xs={12} sm={6} md={4} xl={3} onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}>
            <Card className="h-100" style={{cursor: "pointer"}}>
                <Image height = {150} width = {"100%"} src={product.picture} className="card-img-left" alt="..."></Image>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="mb-2">
                        <span>Категория: {product.category}</span><br/>
                        <span>Издатель: {product.company}</span><br/>
                        <span>Средний рейтинг: {product.rating}🌟</span><br/>
                        <span className="text-black">Цена: <span className="text-black price">{product.price} &#8381;</span> / 1 шт.</span>
                    </Card.Text>
                    <div className="d-inline mt-2">
                        <Button variant={"outline-success"} className="me-2">{isAuth ? "Добавить в корзину": "Подробнее о товаре"}</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProductItem;