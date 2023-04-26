import {Link} from "react-router-dom";


function NavbarItemList(props) {
    return (
        <a href={props.url} className="nav-item nav-link px-2 fs-5 underlined-text">{props.text}</a>
    );
}

export default NavbarItemList;