import React from 'react';
import {Col, Container, Form, Image, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux";

const Product = () => {
    const product = {id: 1, name: "Destiny", category:"Шутер", company:"Bungie", price: 259, description: "Крутая дестини", picture:"data:image/jpeg;base64,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"}

    const isAuth = useSelector(state => state.users.isAuth)

    return (
        <Container>
            <Row>
                <Col sm={5}>
                    <Image className="mt-5 w-100" src={product.picture}></Image>
                </Col>
                <Col sm={7} className="mt-5  text-white">
                    <h1>{product.name}</h1>
                    <h4>Категория: {product.category}</h4>
                    <h4>Описание: {product.description}</h4>
                    <h4>Цена: <span>{product.price}</span> ₽</h4>
                    {isAuth ? <Button variant="outline-success">Добавить в корзину</Button> : <p>Авторизуйтесь, чтобы добавить в корзину</p>}
                </Col>
            </Row>
            <Row className="mt-2">
                <Col className="text-white">
                    <h3>Отзывы</h3>

                    {/*TODO: ADD REVIEWS COMPONENT AND MAP THEM HERE*/}
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Будем признательны, если вы оставите свой отзыв!</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Тут можете написать ваш отзыв о товаре..." />
                        </Form.Group>
                        {isAuth
                            ?
                            <Button variant={"outline-success"}>
                                Отправить отзыв
                            </Button>
                            :
                            <p>Авторизуйтесь, чтобы оставить отзыв.</p>
                        }

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Product;