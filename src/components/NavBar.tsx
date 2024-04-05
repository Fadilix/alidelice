import "../scss/Navbar.scss";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="alida-logo">AliDélice</div>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Buy cakes</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;