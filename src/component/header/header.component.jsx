import React, {useEffect, useState} from "react";
import './header.styles.scss';
import {Link} from 'react-router-dom';

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
                <ul className='options'>
                    <li><Link className='option' to='/'>Home</Link></li>
                    <li><Link className='option' to='/about'>About</Link></li>
                    <li><Link className='option' to='/contact'>Resume</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;

