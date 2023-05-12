import NavbarLogo from "../navbar-logo/NavbarLogo";
import NavbarList from "../navbar-list/NavbarList";
import NavbarItemList from "../navbar-item-list/NavbarItemList";
import './Navbar.css';
import {useDispatch, useSelector} from "react-redux";
import Button from 'react-bootstrap/Button';
import {Container, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, CART_ROUTE, FAQ_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {logout} from "../../http/userAPI";
import {unAuth} from "../../reducers/usersSlice";

//TODO: Rework after backend finished, to make single method execution in dispatchers which correlates to role choosen
function CustomNavbar() {
    const isAuth = useSelector(state => state.users.isAuth)
    const currentRole = useSelector(state => state.users.role)
    const cartCount = 0
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userLogout = async () => {
        const response = await logout();
        console.log(response)
        dispatch(unAuth())
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
                    {isAuth && currentRole === "admin" ?
                        <div>
                            <Button className="me-2" variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Панель администратора</Button>
                            <Button variant={"outline-light"} onClick={() => userLogout()}>Выйти</Button>
                        </div>
                        :
                        isAuth ?
                            <div>
                                <Button className="me-2" variant={"outline-light"} onClick={() => navigate(CART_ROUTE)}>Корзина {cartCount}</Button>
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