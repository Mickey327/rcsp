import NavbarLogo from "../navbar-logo/NavbarLogo";
import NavbarList from "../navbar-list/NavbarList";
import NavbarItemList from "../navbar-item-list/NavbarItemList";
import './Navbar.css';
import {observer} from "mobx-react-lite";
import {useDispatch, useSelector} from "react-redux";
import Button from 'react-bootstrap/Button';
import {auth, increment, unAuth} from "../../reducers/usersSlice";

function Navbar() {
    const isAuth = useSelector(state => state.users.isAuth)
    const counter = useSelector(state => state.users.count)
    const dispatch = useDispatch()
    console.log("Is user authenticated:" + isAuth)
    return (
        <div className="container-fluid header">
            <div className="container-xxl">
                <nav className="navbar navbar-expand-md navbar-dark text-white py-md-2">
                    <NavbarLogo/>
                    {isAuth ?
                        <NavbarList>
                            <NavbarItemList url="/" text="Главная"/>
                            <NavbarItemList url="/faq" text="FAQ"/>
                            <NavbarItemList url="/cart" text="Корзина"/>
                            <NavbarItemList url="/admin" text="Админ панель"/>
                            <Button onClick={() => {dispatch(unAuth())}}>Выйти</Button>
                        </NavbarList>
                        :
                        <NavbarList>
                            <NavbarItemList url="/" text="Главная"/>
                            <NavbarItemList url="/faq" text="FAQ"/>
                            <Button onClick={() => {dispatch(auth())}}>Войти</Button>
                        </NavbarList>
                    }
                    <div className="d-inline-flex justify-content-between">
                        <p className="m-2">Значение счётчика: {counter}</p>
                        <Button onClick={() => {dispatch(increment())}}>Увеличить счётчик через redux</Button>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default observer(Navbar);