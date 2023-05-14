import React from 'react';
import {Card, Col, Container, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {CHECKOUT_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {processOrder, removeProductOrder, updateOrderProduct} from "../http/orderAPI";
import {setOrder} from "../reducers/usersSlice";


const Cart = () => {

    const user = useSelector(state => state.users)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const increaseItemQuantity = (productID, orderID) => {
        updateOrderProduct(productID, orderID, 1).then((data) => {
            dispatch(setOrder(data.order))
        }).catch(() => console.log("error increasing item quantity"))
    }

    const decreaseItemQuantity = (productID, orderID) => {
        updateOrderProduct(productID, orderID, -1).then((data) => {
            dispatch(setOrder(data.order))
        }).catch(() => console.log("error decreasing item quantity"))
    }

    const removeItem = (productID, orderID) => {
        removeProductOrder(productID, orderID).then((data) => {
            dispatch(setOrder(data.order))
        }).catch(() => console.log("error removing item from cart"))
    }

    const productRusString = (count) => {
        if (count % 10 === 1) {
            return "товар"
        } else if (count % 10 > 1 && count % 10 < 5) {
            return "товара"
        } else {
            return "товаров"
        }
    }

    const clickProcessOrder = () => {
        processOrder().then(r => {
                console.log(r)
                if (r.order.id !== undefined) {
                    navigate({
                        pathname: CHECKOUT_ROUTE,
                        search: "?orderID=" + r.order.id
                    } )
                }

            }
        ).catch(() => console.log("error processing order"))
    }

    return (

        <Container>
            <section className="mt-5 mb-4">
                <Row>
                    <Col lg={8}>
                        <Card className="mb-4">
                           <Card.Body>
                               <h5 className="mb-4">Корзина (<span>{user.order.count}</span> {productRusString(user.order.count)})</h5>
                               {user.order.count === 0 &&
                                <div className="d-flex w-100 justify-content-center align-items-center">
                                    <div className="text-center text-black">
                                        <p className="fs-3">Ваша корзина пуста.</p>
                                        <p className="lead">
                                            Наполните её товарами, чтобы оформить заказ.
                                        </p>
                                        <Button variant={"primary"} onClick={() => navigate(SHOP_ROUTE)}>Вернуться в магазин</Button>
                                    </div>
                                </div>
                               }
                               {user.order.order_items !== undefined && user.order.order_items !== null && user.order.order_items.map(item =>
                                   <Row key={item.product.id} id={item.product.id} className="mb-4">
                                       <Col md={4} xl={2} lg={2}>
                                           <div className="mb-3 mb-md-0">
                                               <Image className="img-fluid w-100" src={process.env.REACT_APP_API_URL + item.product.image}></Image>
                                           </div>
                                       </Col>
                                       <Col md={8} xl={10} lg={10}>
                                           <div>
                                               <div className="d-flex justify-content-between">
                                                   <div>
                                                       <h5>{item.product.name}</h5>
                                                       <p className="mb-2 text-uppercase small">Категория: <span>{item.product.category.name}</span></p>
                                                           <p className="mb-2 text-uppercase small">Количество:
                                                               <span>{item.quantity}</span>
                                                           </p>
                                                       <p className="mb-2 text-uppercase small">Компания: {item.product.company.name}</p>
                                                       <p className="mb-2 text-uppercase small">Цена за шт.: <span>{item.product.price}</span> ₽</p>
                                                   </div>
                                               </div>

                                               <div className="mt-3 mb-2 d-flex justify-content-between align-items-center">
                                                   <div>
                                                       <Button  variant={"outline-danger"} className="card-link-secondary small me-4" onClick={() => removeItem(item.product.id, user.order.id)}><i
                                                           className="fas fa-trash-alt mr-1"></i> Удалить</Button>
                                                       {item.quantity > 1 &&
                                                           <Button variant={"outline-warning"} className="me-4" onClick={() => decreaseItemQuantity(item.product.id, user.order.id, -1)}>
                                                               <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                    height="16" fill="currentColor"
                                                                    className="bi bi-dash-circle me-1" viewBox="0 0 16 16">
                                                                   <path
                                                                       d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                                   <path
                                                                       d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                                               </svg>
                                                               Уменьшить кол-во
                                                           </Button>
                                                       }
                                                       {item.product.stock > item.quantity &&
                                                           <Button variant={"outline-success"} onClick={() => increaseItemQuantity(item.product.id, user.order.id)}>
                                                               <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                    height="16" fill="currentColor"
                                                                    className="bi bi-plus-circle me-1" viewBox="0 0 16 16">
                                                                   <path
                                                                       d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                                   <path
                                                                       d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                                               </svg>
                                                               Добавить кол-во
                                                           </Button>
                                                       }
                                                   </div>

                                                   <p className="mb-0"><span><strong><span></span>{item.product.price * item.quantity} ₽</strong></span>
                                                   </p>
                                               </div>
                                           </div>
                                       </Col>
                                       <hr className="mb-2"/>
                                   </Row>
                               )}

                           </Card.Body>
                        </Card>
                    </Col>
                    {user.order.count > 0 &&
                        <Col lg={4}>


                            <Card className="mb-4">
                                <Card.Body>

                                    <h5 className="mb-2">Сводка заказа </h5>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem
                                            className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Стоимость набранных товаров
                                            <span><span>{user.order.total}</span>₽</span>
                                        </ListGroupItem>
                                        <ListGroupItem
                                            className="d-flex justify-content-between align-items-center px-0 pb-2">
                                            Общее кол-во товара
                                            <span>{user.order.count} {productRusString(user.order.count)} </span>
                                        </ListGroupItem>
                                        <ListGroupItem
                                            className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Общая стоимость</strong>
                                            </div>
                                            <span><strong><span>{user.order.total}</span>₽</strong></span>
                                        </ListGroupItem>
                                    </ListGroup>


                                    <Button type={"submit"} variant={"outline-success"}
                                            className="waves-effect waves-light btn-block"
                                            onClick={() => clickProcessOrder()}>Оформить заказ</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    }
                </Row>
            </section>
        </Container>
    );
};

export default Cart;