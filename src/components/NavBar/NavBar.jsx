import { Link, NavLink } from "react-router-dom";
import Avatar from "../../images/navbar_logo.png";

const NavBar = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid d-flex justify-content-between">
                    <Link to="/">
                        <img src={Avatar} alt="" style={{ width: 50, height: 50, borderRadius: 50 }} />
                    </Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/blog">
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
