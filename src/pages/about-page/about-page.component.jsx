import React, {useEffect} from "react";
import "./about-page.styles.scss";
import Header from "../../component/header/header.component";
import AboutImage from "../../assets/about-image-v3.jpg"
import Footer from "../../component/footer/footer.component";
import github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";


const AboutPage = () => {

    useEffect(() => {
        window.scrollTo({top: 0});
    }, [])

    return (
        <>
            <Header/>
            <div className="about-content">
                <div className="about-image">
                    <img src={AboutImage}/>
                </div>
                <div className="about-me-info">
                    <div className="about-title">
                        <h1>Hello again! ✌🏻</h1>
                        <h1>I'm <span className="name">Uroš Milovanović</span></h1>
                    </div>
                    <div className="about-text">
                        <p>I'm Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa
                            delectus deleniti dignissimos, dolor doloribus eaque, eligendi esse expedita harum impedit
                            libero nemo perferendis qui sed totam voluptate. Amet aperiam at culpa earum esse impedit
                            ipsam
                            provident quo recusandae repellat!</p>
                    </div>
                    <div className="about-social-icons">
                        <a className='about-social-icon' href='https://github.com/Uros998'><img src={github}/></a>
                        <a className='about-social-icon' href='https://www.instagram.com/uros_milovanovic/'><img
                            src={Instagram}/></a>
                        <a className='about-social-icon' href='https://www.instagram.com/uros_milovanovic/'><img
                            src={linkedin}/></a>
                    </div>
                </div>
            </div>
            <div className="about-info">
                <div className="info">
                    <h1>Faculty</h1>
                </div>
                <div className="info">
                    <h1>Experience</h1>
                </div>
                <div className="info">
                    <h1>Skils</h1>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AboutPage;




