import React, { Component } from 'react';
import './sidebar.css';


class SideBar extends Component {
    render() {
    return (
    <nav className="sidebar">
        <ul>
        <li><a>Home</a></li>
        <li><a>About-me</a></li>
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>
        </ul>
    </nav>
    );
};

};

export default SideBar;
