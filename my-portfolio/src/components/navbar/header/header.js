import React from 'react';
import './Header.css';

const Banner = props => {
    return (
        <header className="banner">
            <h1>{props.user} Portfolio Page</h1>
        </header>
    );
};

export default Banner