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
        <div className="header">
            <nav className={showScroll? "nav-black" : "nav-none"} >
                <Link className='logo' to='/'>
                    <p className="logo-txt">U|M</p>
                </Link>
                <button id="burger" className="open-main-nav">
                    <span className="burger"/>
                    <span className="burger"/>
                </button>
                <ul className='options'>
                    <li><NavLink activeClassName="selected" className='option' to='/'>Home</NavLink></li>
                    <li><NavLink activeClassName="selected" className='option' to='/about'>About</NavLink></li>
                    <li><NavLink activeClassName="selected" className='option' to='/contact'>Resume</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;

