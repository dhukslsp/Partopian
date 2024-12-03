import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">MyWebsite</div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Product</a></li>
                <li><a href="#services">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <ul className="nav-links">
                <li><a href="#home">Login</a></li>
                <li><a href="#about">Signup</a></li>
            </ul>
        </nav>
    );
};

export default Navbar