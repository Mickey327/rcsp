import React from 'react';
import {Col, Container, Row, Image} from "react-bootstrap";
import {useSelector} from "react-redux";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";

const Checkout = () => {
    const username = useSelector(state => state.users.email)
    const currentOrder = useSelector(state => state.users.currentOrder)
    const totalValue = currentOrder.cart.reduce((total, current) => {
        const currentItemValue = current.price * current.count;
        return total + currentItemValue;
    }, 0)
    const navigate = useNavigate()


    return (
        <Container>
            <Row className="mt-3  text-white">
                <Col xs={10} sm={10} md={10} className="well col-xs-offset-1 col-sm-offset-1 col-md-offset-1">
                    <Row>
                        <Col xs={6} sm={6} md={6} className="p-0">
                            <em>Спасибо за заказ, {username}!</em>
                            <br/>
                        </Col>
                        <Col xs={6} sm={6} md={6} className="text-end">
                            <p>
                                <em>Чек #: <span>{currentOrder.id}</span></em>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <div className="text-center">
                            <h1>Детали заказа</h1>
                        </div>

                        <table className="table col-12 table-hover text-white">
                            <thead>
                            <tr>
                                <th className="col-3">Изображение</th>
                                <th className="col-3">Название</th>
                                <th className="col-3">Количество</th>
                                <th className="col-3">Общая цена</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/*цикл по каждому предмету*/}
                            {currentOrder.cart.map(item =>
                                <tr className="text-white">
                                    <td className="col-3">
                                        <Image className="img-fluid w-100"
                                             src={item.picture}
                                             alt="Sample"/>

                                    </td>
                                    <td className="col-3 text-white">{item.name}</td>
                                    <td className="col-3 text-white">{item.count}</td>
                                    <td className="col-3 text-white">{item.price * item.count}₽</td>
                                </tr>
                            )}

                            </tbody>
                        </table>
                        <div className="mb-3 d-inline-block">
                            <div className="d-flex justify-content-between">
                                <h2>Итого: {totalValue}₽</h2>
                                <Button onClick={() => navigate(SHOP_ROUTE)}>Вернуться к покупкам</Button>
                            </div>
                        </div>

                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;