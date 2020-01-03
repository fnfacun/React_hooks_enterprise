import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header id="header">
            <nav className="menu">
                <a></a>
            </nav>
            <h1 className="logo">miaov.com</h1>
            <Link className="user" to="/login"></Link>
        </header>
    )
};

export default Header;