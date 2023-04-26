import {Nav} from 'react-bootstrap'
import {NavLink} from "react-router-dom";


function NavbarItemList(props) {
    return (
        <Nav.Item className="px-2 fs-5 underlined-text">
            <Nav.Link href={props.url}>{props.text}</Nav.Link>
        </Nav.Item>
    );
}

export default NavbarItemList;