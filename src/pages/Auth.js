import React, {useState} from 'react';
import {Card, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {useDispatch} from "react-redux";
import {setUserEmail, setUserRole, auth} from "../reducers/usersSlice";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const click = async () => {
        if (isLogin) {
            const response = await login(email, password);
            console.log("Login:")
            console.log(response)
            dispatch(setUserRole(response.role))
            dispatch(setUserEmail(response.email))
            dispatch(auth())
            navigate(SHOP_ROUTE)
        } else {
            const response = await registration(email, password);
            console.log("Registration:")
            console.log(response)
            navigate(LOGIN_ROUTE)
        }

    }


    return (
        <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 350}}>
            <Card style={{width:600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">

                    <Form.Control type="email" placeholder="Введите email..." className="mt-3" value={email} onChange={e => setEmail(e.target.value)}></Form.Control>
                    <Form.Control type="password" placeholder="Введите пароль..." className="mt-3" value={password} onChange={e => setPassword(e.target.value)}></Form.Control>
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
                        <Button variant={"outline-success"} onClick={click}>
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </Button>
                    </Row>

                </Form>

            </Card>
        </Container>
    );
};

export default Auth;
