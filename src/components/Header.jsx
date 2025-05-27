import '../pages/Home.css';
import logo from "../assets/images/abelist-cropped.png"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/"><img className="logo" src={logo} alt="" /></Link>
            <nav>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : undefined}>Projects</NavLink>
                <NavLink to="/games" className={({ isActive }) => isActive ? "active" : undefined}>Games</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : undefined}>About</NavLink>
            </nav>
        </header>
    );
};
export default Header;