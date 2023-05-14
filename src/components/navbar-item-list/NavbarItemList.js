import {NavItem} from 'react-bootstrap'
import {NavLink} from "react-router-dom";


function NavbarItemList(props) {

    return (
        <NavItem className="px-2 fs-5 underlined-text">
            <NavLink style={{ textDecoration: 'none'}} className="text-white"  to={props.url}>{props.text}</NavLink>
        </NavItem>
    );
}

export default NavbarItemList;