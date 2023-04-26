


function NavbarList(props) {
    return (
        <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-md-3">
                {props.children}
            </div>
        </div>
    );
}
export default NavbarList;