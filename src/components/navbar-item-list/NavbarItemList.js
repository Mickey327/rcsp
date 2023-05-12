import {Nav} from 'react-bootstrap'
import {useNavigate} from "react-router-dom";


function NavbarItemList(props) {
    const navigate = useNavigate()

    return (
        <Nav.Item className="px-2 fs-5 underlined-text">
            <Nav.Link onClick={() => navigate(props.url)} href={props.url}>{props.text}</Nav.Link>
        </Nav.Item>
    );
}

export default NavbarItemList;