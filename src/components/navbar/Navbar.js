import NavbarLogo from "../navbar-logo/NavbarLogo";
import NavbarList from "../navbar-list/NavbarList";
import NavbarItemList from "../navbar-item-list/NavbarItemList";
import './Navbar.css';
import {useDispatch, useSelector} from "react-redux";
import Button from 'react-bootstrap/Button';
import {Container, Navbar} from "react-bootstrap";

//TODO: Rework after backend finished, to make single method execution in dispatchers which correlates to role choosen
function CustomNavbar() {
    const isAuth = useSelector(state => state.users.isAuth)
    const currentRole = useSelector(state => state.users.role)
    const dispatch = useDispatch()

    return (
        <Container fluid className="header">
            <Container fluid="xxl">
                <Navbar className="navbar-dark text-white py-md-2">
                    <NavbarLogo/>
                    {isAuth && currentRole === "admin" ?
                        <NavbarList>
                            <NavbarItemList url="/" text="Главная"/>
                            <NavbarItemList url="/faq" text="FAQ"/>
                            <NavbarItemList url="/admin" text="Админ панель"/>



                            {/*<Button onClick={() => {*/}
                            {/*    dispatch(unAuth())*/}
                            {/*}}>Выйти</Button>*/}
                        </NavbarList>
                        :
                        isAuth ?
                            <NavbarList>
                                <NavbarItemList url="/" text="Главная"/>
                                <NavbarItemList url="/faq" text="FAQ"/>
                                <NavbarItemList url="/cart" text="Корзина"/>


                                {/*<Button onClick={() => {*/}
                                {/*    dispatch(unAuth())*/}
                                {/*}}>Выйти</Button>*/}
                            </NavbarList>
                            :
                            <NavbarList>
                                <NavbarItemList url="/" text="Главная"/>
                                <NavbarItemList url="/faq" text="FAQ"/>
                                <NavbarItemList url="/login" text="Войти"/>
                            </NavbarList>
                    }
                </Navbar>
            </Container>
        </Container>
    );
}

export default CustomNavbar;