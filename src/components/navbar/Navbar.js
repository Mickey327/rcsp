import NavbarLogo from "../navbar-logo/NavbarLogo";
import NavbarList from "../navbar-list/NavbarList";
import NavbarItemList from "../navbar-item-list/NavbarItemList";
import './Navbar.css';
import {useDispatch, useSelector} from "react-redux";
import Button from 'react-bootstrap/Button';
import {Container, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, CART_ROUTE, LOGIN_ROUTE} from "../../utils/consts";

//TODO: Rework after backend finished, to make single method execution in dispatchers which correlates to role choosen
function CustomNavbar() {
    //const isAuth = useSelector(state => state.users.isAuth)
    //const currentRole = useSelector(state => state.users.role)
    const cartCount = 0
    const currentRole = "user"
    const isAuth = true
    const navigate = useNavigate()
    //const dispatch = useDispatch()

    return (
        <Container fluid className="header">
            <Container fluid="xxl">
                <Navbar className="navbar-dark text-white py-md-2">
                    <NavbarLogo/>
                    <NavbarList>
                        <NavbarItemList url="/" text="Главная"/>
                        <NavbarItemList url="/faq" text="FAQ"/>
                    </NavbarList>
                    {isAuth && currentRole === "admin" ?
                        <div>
                            <Button className="me-2" variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Панель администратора</Button>
                            <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Выйти</Button>
                        </div>
                        :
                        isAuth ?
                            <div>
                                <Button className="me-2" variant={"outline-light"} onClick={() => navigate(CART_ROUTE)}>Корзина {cartCount}</Button>
                                <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Выйти</Button>
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