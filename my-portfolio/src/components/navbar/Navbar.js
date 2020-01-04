import React from 'react';
import Sidebutton from './Navbar_button';
import './Navbar.css';


const Navbar = props => { 
    return (
    <header className="navbar">
        <nav className="navbar_links">
            <div className="navbar_toggle">
                 <Sidebutton click={props.navBarClickHandler}/>
            </div>
            <img className="tomglogo" src="https://media.licdn.com/dms/image/C5603AQHz6b92YS5oiQ/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=XXmAMwLi8vDmprq4JrHC9QDVZc99ImxJjCqcQH2BCJM"></img>
                <div className="spacer"></div>
                <div className="navbar_items">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About-me</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
);
};





export default Navbar