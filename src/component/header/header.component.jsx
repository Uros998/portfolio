import React from "react";
import './header.styles.scss';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <div className="header">
            <nav>
                <Link className='logo' to='/'>
                    <p className="logo-txt">U|M</p>
                </Link>
                <ul className='options'>
                    <li><Link className='option'   to='/'>Home</Link></li>
                    <li><Link className='option' to='/about'>About</Link></li>
                    <li><Link className='option' to='/contact'>Resume</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;

