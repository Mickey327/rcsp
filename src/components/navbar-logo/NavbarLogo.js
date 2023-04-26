import logo from "../../logo.svg";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../../ulits/consts";
import {Image, NavbarBrand} from "react-bootstrap";


function NavbarLogo() {
    return (
        <NavLink
            to={SHOP_ROUTE}
            className="d-flex text-white text-decoration-none align-items-center fs-4 me-md-auto">
            <NavbarBrand>
                <Image src={logo} alt="logo" className="me-2" width="48" height="48" aria-label="Gametrade"></Image>
                Gametrade
            </NavbarBrand>
        </NavLink>
    );
}

export default NavbarLogo;