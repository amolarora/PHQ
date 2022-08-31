import React from 'react';
import logoImg from '../images/phq_logo.jpg';
import MobileNav from './MobileNav.js';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
            <div className="wrapper">
                <div className="logo">
                    <img src={logoImg} width="100" height="70"></img>
                </div>

                <nav>
                    <Link className="navLink" to="/">Home</Link>
                </nav>

            </div>
        </header>
    );
}

export default Nav;