import React from 'react';
import './Navbar.css';

const Navbar = props => { 
    return (
    <header className="navbar">
        <nav>
            <div className="navbar_links"></div>
                <img src='./Tom_Galloway.png' alt="Tom G logo picture"></img>
                <div>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About me</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
);
};

export default Navbar