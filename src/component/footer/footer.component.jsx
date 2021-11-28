import React from "react";
import './footer.styles.scss';
import github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";


const Footer = () => (
    <div className='footer'>
        <h2>Say hi, and let's chat!</h2>
        <p>Shoot me an email at <span><a href="mailto:uros.milovanovic98@gmail.com">uros.milovanovic98@gmail.com</a></span> or find me at</p>
        <div className="social-icons-footer">
            <a className='social-icon-footer' href='https://github.com/Uros998'><img src={github}/></a>
            <a className='social-icon-footer' href='https://www.instagram.com/uros_milovanovic/'><img src={Instagram}/></a>
            <a className='social-icon-footer' href='https://www.instagram.com/uros_milovanovic/'><img src={linkedin}/></a>
        </div>
    </div>
)


export default Footer;
