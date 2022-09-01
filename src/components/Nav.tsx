import React from 'react';
import logoImg from '../images/phq_logo.jpg';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
            <div className="wrapper">
                <div className="logo">
                    <Link to="/">
                        <img src={logoImg} alt="PHQ Logo" width="100" height="70"></img>
                    </Link>
                </div>

                <nav>
                    <Link className="navLink" to="/">Home</Link>
                </nav>

            </div>
        </header>
    );
}

export default Nav;