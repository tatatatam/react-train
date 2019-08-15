import React from 'react';
import './header.css'
const Header = () => {
    return (
        <React.Fragment>
            <ul>
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </React.Fragment>
    )
}
export default Header;