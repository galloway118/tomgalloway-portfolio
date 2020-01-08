import React, { Component } from 'react';
import './sidebar.css';
import {Link} from 'react-router-dom';


class SideBar extends Component {
    render() {
    return (
    <nav className="sidebar">
        <ul>
        <li><Link to="/App">Home</Link></li>
            <li><Link to="/about_me">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
    );
};

};

export default SideBar;
