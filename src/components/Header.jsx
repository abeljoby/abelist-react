import React from "react";
import logo from "../assets/images/abelist-cropped.png"

const Header = () => {
    return (
        <header>
            <img class="logo" src={logo} alt="" srcset=""></img>
            <nav>
                <a href="../projects">Projects</a>
                <a href="../games">Games</a>
                <a href="../about">About</a>
            </nav>
        </header>
    );
};
export default Header;