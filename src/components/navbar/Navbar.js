import NavbarLogo from "../navbar-logo/NavbarLogo";
import NavbarList from "../navbar-list/NavbarList";
import NavbarItemList from "../navbar-item-list/NavbarItemList";
import './Navbar.css';
import {useDispatch, useSelector} from "react-redux";
import Button from 'react-bootstrap/Button';
import {Container, Navbar} from "react-bootstrap";
import {useNavigate, useSearchParams} from "react-router-dom";
import {ADMIN_ROUTE, CART_ROUTE, FAQ_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {logout} from "../../http/userAPI";
import {setOrder, setUserEmail, setUserId, unAuth} from "../../reducers/usersSlice";
import {useEffect} from "react";
import {readOrder} from "../../http/orderAPI";


function CustomNavbar() {
    const user = useSelector(state => state.users)
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (user.role === "user" && Object.keys(user.order).length === 0) {
            searchParams.set('fetch', 'eager')
            readOrder(searchParams).then(data => {
                dispatch(setOrder(data.order))
            })
        }
    }, [dispatch, searchParams, user.order, user.role])

    const userLogout = async () => {
        logout().then(() => {
            dispatch(setUserId(0))
            dispatch(setUserEmail(''))
            dispatch(setOrder({}))
            dispatch(unAuth())
        })
        navigate(LOGIN_ROUTE)
    }

    return (
        <Container fluid className="header">
            <Container fluid="xxl">
                <Navbar className="navbar-dark text-white py-md-2">
                    <NavbarLogo/>
                    <NavbarList>
                        <NavbarItemList key={SHOP_ROUTE} url={SHOP_ROUTE} text="Главная"/>
                        <NavbarItemList key={FAQ_ROUTE} url={FAQ_ROUTE} text="FAQ"/>
                    </NavbarList>
                    {user.isAuth && user.role === "admin" ?
                        <div>
                            <Button className="me-2" variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Панель администратора</Button>
                            <Button variant={"outline-light"} onClick={() => userLogout()}>Выйти</Button>
                        </div>
                        :
                        user.isAuth ?
                            <div>
                                <Button className="me-2" variant={"outline-light"} onClick={() => navigate(CART_ROUTE)}>Корзина {user.order.count}</Button>
                                <Button variant={"outline-light"} onClick={() => userLogout()}>Выйти</Button>
                            </div>
                            :
                            <div>
                                <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Войти</Button>
                            </div>

                    }
                </Navbar>
            </Container>
        </Container>
    );
}

export default CustomNavbar;