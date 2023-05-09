import React from 'react';
import {Card, Col, Container, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {CHECKOUT_ROUTE} from "../utils/consts";

const Cart = () => {

    const cartProducts = useSelector(state => state.users.currentOrder.cart)
    const navigate = useNavigate()
    const totalValue = cartProducts.reduce((total, current) => {
        const currentItemValue = current.price * current.count;
        return total + currentItemValue;
    }, 0)

    return (
        <Container>
            <section className="mt-5 mb-4">
                <Row>
                    <Col lg={8}>
                        <Card className="mb-4">
                           <Card.Body>
                               <h5 className="mb-4">Корзина (<span>{cartProducts.length}</span> товара)</h5>

                               {cartProducts.map(product =>
                                   <Row className="mb-4">
                                       <Col md={4} xl={2} lg={2}>
                                           <div className="mb-3 mb-md-0">
                                               <Image className="img-fluid w-100" src={product.picture}></Image>
                                           </div>
                                       </Col>
                                       <Col md={8} xl={10} lg={10}>
                                           <div>
                                               <div className="d-flex justify-content-between">
                                                   <div>
                                                       <h5>{product.name}</h5>
                                                       <p className="mb-2 text-uppercase small">Категория: <span>{product.category}</span></p>
                                                           <p className="mb-2 text-uppercase small">Количество:
                                                               <span>{product.count}</span>
                                                           </p>
                                                       <p className="mb-2 text-uppercase small">Компания: {product.company}</p>
                                                       <p className="mb-2 text-uppercase small">Цена за шт.: <span>{product.price}</span> ₽</p>
                                                   </div>
                                               </div>

                                               <div className="mt-3 mb-2 d-flex justify-content-between align-items-center">
                                                   <div>
                                                       <Button  variant={"outline-danger"} className="card-link-secondary small me-4"><i
                                                           className="fas fa-trash-alt mr-1"></i> Убрать предмет</Button>
                                                       <Button variant={"outline-success"}>
                                                           <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                height="16" fill="currentColor"
                                                                className="bi bi-plus-circle me-1" viewBox="0 0 16 16">
                                                               <path
                                                                   d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                               <path
                                                                   d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                                           </svg>
                                                           Добавить предмет
                                                       </Button>
                                                   </div>

                                                   <p className="mb-0"><span><strong><span></span>{product.price*product.count} ₽</strong></span>
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
                    <Col lg={4}>


                        <Card className="mb-4">
                            <Card.Body>

                                <h5 className="mb-2">Сводка заказа </h5>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Стоимость набранного товара
                                        <span><span>{totalValue}</span>₽</span>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex justify-content-between align-items-center px-0 pb-2">
                                        Общее кол-во товара
                                        <span>5 товаров</span>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Общая стоимость</strong>
                                        </div>
                                        <span><strong><span>{totalValue}</span>₽</strong></span>
                                    </ListGroupItem>
                                </ListGroup>
                                <Button type={"submit"} variant={"outline-success"} className="waves-effect waves-light btn-block" onClick={() => navigate(CHECKOUT_ROUTE)}>Оформить заказ</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </Container>
    );
};

export default Cart;