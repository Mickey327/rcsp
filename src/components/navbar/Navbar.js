import NavbarLogo from "../navbar-logo/NavbarLogo";
import NavbarList from "../navbar-list/NavbarList";
import NavbarItemList from "../navbar-item-list/NavbarItemList";
import './Navbar.css';
import {useDispatch, useSelector} from "react-redux";
import Button from 'react-bootstrap/Button';
import {auth, authAdmin, increment, unAuth} from "../../reducers/usersSlice";
import {Container, Navbar} from "react-bootstrap";

//TODO: Rework after backend finished, to make single method execution in dispatchers which correlates to role choose
function CustomNavbar() {
    const isAuth = useSelector(state => state.users.isAuth)
    const currentRole = useSelector(state => state.users.role)
    const counter = useSelector(state => state.users.count)
    const dispatch = useDispatch()
    console.log("Is user authenticated:" + isAuth)
    return (
        <Container fluid className="header">
            <Container fluid="xxl">
                <Navbar expand="md" className="navbar-dark text-white py-md-2">
                    <NavbarLogo/>
                    {isAuth && currentRole === "admin" ?
                        <NavbarList>
                            <NavbarItemList url="/" text="Главная"/>
                            <NavbarItemList url="/faq" text="FAQ"/>
                            <NavbarItemList url="/admin" text="Админ панель"/>
                            <Button onClick={() => {
                                dispatch(unAuth())
                            }}>Выйти</Button>
                        </NavbarList>
                        :
                        isAuth ?
                            <NavbarList>
                                <NavbarItemList url="/" text="Главная"/>
                                <NavbarItemList url="/faq" text="FAQ"/>
                                <NavbarItemList url="/cart" text="Корзина"/>
                                <Button onClick={() => {
                                    dispatch(unAuth())
                                }}>Выйти</Button>
                            </NavbarList>
                            :
                            <NavbarList>
                                <NavbarItemList url="/" text="Главная"/>
                                <NavbarItemList url="/faq" text="FAQ"/>
                                <Button className="me-2" onClick={() => {
                                    dispatch(auth())
                                }}>Войти как пользователь</Button>
                                <Button onClick={() => {
                                    dispatch(authAdmin())
                                }}>Войти как админ</Button>
                            </NavbarList>


                    }
                    <div className="d-inline-flex justify-content-between">
                        <p className="m-2">Значение счётчика: {counter}</p>
                        <Button onClick={() => {
                            dispatch(increment())
                        }}>Увеличить счётчик через redux</Button>
                    </div>
                </Navbar>
            </Container>
        </Container>
    );
}

export default CustomNavbar;