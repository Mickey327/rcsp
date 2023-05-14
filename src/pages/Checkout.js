import React, {useEffect, useState} from 'react';
import {Col, Container, Row, Image} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate, useSearchParams} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {readOrderById} from "../http/orderAPI";

const Checkout = () => {
    const [order, setOrder] = useState({})
    const [searchParams] = useSearchParams()
    const [error, setError] = useState('')
    const [errorNumber, setErrorNumber] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        readOrderById(searchParams.get('orderID')).then((data) => {
            setOrder(data.order)
        }).catch((error) => {
            console.log(error)
            setError(error.response.data.message)
            setErrorNumber(error.response.status)
        })
    }, [searchParams])


    return (
        <Container>
            {order.id !== undefined ?
            <Row className="mt-3  text-white">
                <Col xs={10} sm={10} md={10} className="well col-xs-offset-1 col-sm-offset-1 col-md-offset-1">
                    <Row>
                        <Col xs={6} sm={6} md={6} className="p-0">
                            <em>Спасибо за заказ!</em>
                            <br/>
                        </Col>
                        <Col xs={6} sm={6} md={6} className="text-end">
                            <p>
                                <em>Чек #: <span>{order.id}</span></em>
                            </p>
                            <p>
                                <em>Статус заказа#: <span>{order.status}</span></em>
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
                            {order.order_items !== undefined && order.order_items.map(item =>
                                <tr className="text-white">
                                    <td className="col-3">
                                        <Image className="img-fluid w-100"
                                             src={process.env.REACT_APP_API_URL + item.product.image}
                                             alt="Sample"/>

                                    </td>
                                    <td className="col-3 text-white">{item.product.name}</td>
                                    <td className="col-3 text-white">{item.quantity}</td>
                                    <td className="col-3 text-white">{item.product.price * item.quantity}₽</td>
                                </tr>
                            )}

                            </tbody>
                        </table>
                        <div className="mb-3 d-inline-block">
                            <div className="d-flex justify-content-between">
                                <h2>Итого: {order.total}₽</h2>
                                <Button onClick={() => navigate(SHOP_ROUTE)}>Вернуться к покупкам</Button>
                            </div>
                        </div>

                    </Row>
                </Col>
            </Row>
            :
                <div className="d-flex align-items-center justify-content-center vh-100">
                    <div className="text-center text-white">
                        <h1 className="display-1 fw-bold">{errorNumber}</h1>
                        <p className="fs-3">{error}</p>
                        <p className="lead">
                            Страница, которую вы искали не существует.
                        </p>
                        <Button variant={"primary"} onClick={() => navigate(SHOP_ROUTE)}>Вернуться в магазин</Button>
                    </div>
                </div>
            }
        </Container>
    );
};

export default Checkout;