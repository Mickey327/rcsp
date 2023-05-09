import React from 'react';
import {Card, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 350}}>
            <Card style={{width:600}} className="p-5">

                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">

                    <Form.Control placeholder="Введите email..." className="mt-3"></Form.Control>
                    <Form.Control placeholder="Введите пароль..." className="mt-3"></Form.Control>
                    <Row className="d-flex justify-content-between mt-3 px-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <Button variant={"outline-success"}>
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </Button>
                    </Row>

                </Form>

            </Card>
        </Container>
    );
};

export default Auth;
