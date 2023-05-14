import React, {useState} from 'react';
import {Card, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {useDispatch} from "react-redux";
import {setUserEmail, setUserRole, auth, setOrder, setUserId} from "../reducers/usersSlice";
import SuccessfulRegister from "../components/modals/registration/SuccessfulRegister";
import {readOrder} from "../http/orderAPI";

const Auth = () => {
    const [registerVisible, setRegisterVisible] = useState(false)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    const click = async () => {
        if (isLogin) {
            login(email, password).then((response) => {
                //load user data
                dispatch(setUserRole(response.role))
                dispatch(setUserEmail(response.email))
                dispatch(setUserId(response.id))
                dispatch(auth())
                readOrder().then((data) => {
                    dispatch(setOrder(data.order))
                }).finally(() => navigate(SHOP_ROUTE))

            }).catch((error) => {
                setError(error.response.data.message)
            })
        } else {
            registration(email, password).then(() => {
                setRegisterVisible(true)

            }).catch((error) => {
                setError(error.response.data.message)
            })

        }

    }


    return (
        <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 150}}>
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
                        {error !== '' &&
                            <span className="text-danger">{error}</span>
                        }
                    </Row>
                </Form>
            </Card>
            <SuccessfulRegister show={registerVisible} onHide={() => setRegisterVisible(false)}/>
        </Container>
    );
};

export default Auth;
