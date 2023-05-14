import './ProductItem.css'
import {Col, Image, Button, Card} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import {PRODUCT_ROUTE} from "../../utils/consts";
import {useDispatch, useSelector} from "react-redux";
import {updateOrderProduct} from "../../http/orderAPI";
import {setOrder} from "../../reducers/usersSlice";

function ProductItem({product}) {
    const navigate = useNavigate()
    const user = useSelector(state => state.users)
    const dispatch = useDispatch()

    const addToCart = (productID, orderID) => {
        console.log(user)
        updateOrderProduct(productID, orderID, 1).then((data) => {
            dispatch(setOrder(data.order))
        }).catch(() => console.log("error updating order cart"))
    }


    return (
        <Col xs={12} sm={6} md={4} xl={3}>
            <Card className="h-100">
                <Image style={{cursor: "pointer"}} height = {150} width = {"100%"} onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)} src={process.env.REACT_APP_API_URL + product.image} className="card-img-left" alt="..."></Image>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="mb-2">
                        <span className="text-black">Цена: <span className="text-black price">{product.price} &#8381;</span> / 1 шт.</span><br/>
                        {product.stock > 0 &&
                            <span className="text-black">В наличии: {product.stock} шт.</span>
                        }
                    </Card.Text>
                    <div className="d-inline mt-2">
                        {product.stock === 0 ?
                            <p className="text-danger">Нет в наличии</p>
                            :
                            user.isAuth && user.role === "user"
                            ?
                                <Button variant={"outline-success"} className="me-2" onClick={() => addToCart(product.id, user.order.id)}>Добавить в корзину</Button>
                            :
                                <Button variant={"outline-success"} className="me-2" onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}>Подробнее о товаре</Button>
                        }
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProductItem;