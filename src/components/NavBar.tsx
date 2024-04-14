import "../scss/Navbar.scss";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="alida-logo">AliDélice</div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#legateau">Buy cakes</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;