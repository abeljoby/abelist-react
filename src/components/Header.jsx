import React from "react";
import '../pages/Home.css';
import logo from "../assets/images/abelist-cropped.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/"><img className="logo" src={logo} alt="" srcset=""></img></Link>
            <nav>
                <Link to="/projects">Projects</Link>
                <Link to="/games">Games</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    );
};
export default Header;