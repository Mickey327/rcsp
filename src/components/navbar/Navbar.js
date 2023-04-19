import NavbarLogo from "../navbar-logo/NavbarLogo";
import NavbarBurger from "../navbar-burger/NavbarBurger";
import NavbarList from "../navbar-list/NavbarList";
import NavbarItemList from "../navbar-item-list/NavbarItemList";
import './Navbar.css';

function Navbar() {
    return (
        <div className="container-fluid header">
            <div className="container-xxl">
                <nav className="navbar navbar-expand-md navbar-dark text-white py-md-2">
                    <NavbarLogo/>
                    <NavbarBurger/>
                    <NavbarList>
                        <NavbarItemList url="/" text="Главная"/>
                        <NavbarItemList url="/catalog" text="Каталог"/>
                        <NavbarItemList url="/faq" text="FAQ"/>
                    </NavbarList>
                </nav>
            </div>
        </div>
    );
}
export default Navbar;