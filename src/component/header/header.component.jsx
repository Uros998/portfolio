import React, {useEffect, useState} from "react";
import './header.styles.scss';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {

    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShowScroll(window.scrollY >= 100);
        })
    }, []);

    return (
        <nav className={showScroll ? "nav-black" : "nav-none"}>
            <Link className='logo' to='/'>
                <p className="logo-txt">U|M</p>
            </Link>
            <input type="checkbox" id="ham-menu"/>
            <label htmlFor="ham-menu">
                <div className="hide-des">
                    <span className="menu-line"/>
                    <span className="menu-line"/>
                    <span className="menu-line"/>
                    <span className="menu-line"/>
                    <span className="menu-line"/>
                    <span className="menu-line"/>
                </div>

            </label>
            <div className="full-page-green"/>
            <div className="ham-menu">
                <ul className="centre-text bold-text options">
                    <li><NavLink activeClassName="selected" className='option' to='/'>Home</NavLink></li>
                    <li><NavLink activeClassName="selected" className='option' to='/about'>About</NavLink></li>
                    <li><NavLink activeClassName="selected" className='option' to='/contact'>Resume</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;

