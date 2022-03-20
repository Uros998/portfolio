import React, {useEffect} from "react";
import "./about-page.styles.scss";
import Header from "../../component/header/header.component";
import AboutImage from "../../assets/about-image-v3.jpg"
import Footer from "../../component/footer/footer.component";
import github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import Angular from "../../assets/logo/angular.png";
import HtmlCss from "../../assets/logo/html-css.png";
import Javascript from "../../assets/logo/javascript.png";
import ReactLogo from "../../assets/logo/react.png";
import Spring from "../../assets/logo/spring.png";
import Java from "../../assets/logo/java.png";
import Php from "../../assets/logo/php.png";
import MqSql from "../../assets/logo/mysql.png";
import Photoshop from "../../assets/logo/photoshop.png";


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
                <div className="about-info-container">
                    <div className="info-experience">
                        <div className="experience-title">
                            <div className="accent"/>
                            <h2>Experience</h2>
                            <p>Catch up on what I've been up to recently:</p>
                        </div>
                        <div className="experience-cards">

                            <div className="lines">
                                <div className="end-line"/>
                                <div className="dot"/>
                                <div className="line"/>
                                <div className="dot"/>

                            </div>
                            <div className="e-cards">
                                <div className="e-card">
                                    <h1>December 2021 - Ongoing</h1>
                                    <p>Software Developer at <span>University of Metropolitan</span></p>
                                    <p>Full stack - Angular & Spring</p>
                                </div>
                                <div className="e-card">
                                    <h1>Avgust 2020 - December 2021</h1>
                                    <p>Software Developer at <span>University of Metropolitan</span></p>
                                    <p>Frontend - Angular</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-skills">
                    <div className="info-skills-container">
                        <div className="skills-title">
                            <div className="accent-1"/>
                            <h2>My Skills</h2>
                            <div className="accent-1"/>
                        </div>
                        <div className="skiills-sub-title">
                            <p>The technologies I've been working on now</p>
                        </div>
                        <div className="skills">
                            <div className="skill-left">
                                <div className="skill">
                                    <div className="skill-img">
                                        <img src={Angular}/>
                                    </div>
                                    <div className="skill-title">
                                        <h3>Angular <span>1 YEARS</span></h3>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-img">
                                        <img src={HtmlCss}/>
                                    </div>
                                    <div className="skill-title">
                                        <h3>HTML / CSS <span>3 YEARS</span></h3>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-img">
                                        <img src={Javascript}/>
                                    </div>
                                    <div className="skill-title">
                                        <h3>Javascript <span>2 YEARS</span></h3>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-img">
                                        <img src={MqSql}/>
                                    </div>
                                    <div className="skill-title">
                                        <h3>MySql <span>1 YEARS</span></h3>
                                    </div>
                                </div>

                            </div>
                            <div className="skill-right">
                                <div className="skill">
                                    <div className="skill-img">
                                        <img src={ReactLogo}/>
                                    </div>
                                    <div className="skill-title">
                                        <h3>React <span>6 MONTHS</span></h3>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-img">
                                        <img src={Spring}/>
                                    </div>
                                    <div className="skill-title">
                                        <h3>Spring <span>3 MONTHS</span></h3>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-img">
                                        <img src={Java}/>
                                    </div>
                                    <div className="skill-title">
                                        <h3>Java <span>3 YEARS</span></h3>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-img">
                                        <img src={Photoshop}/>
                                    </div>
                                    <div className="skill-title">
                                        <h3>Photoshop <span>5 MONTHS</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-info-container">
                    <div className="info-faculty">
                        <div className="faculty-title">
                            <div className="accent"/>
                            <h2>Faculty</h2>
                        </div>
                        <div className="faculty-text">
                            <p>Current student of software engineering at the Metropolitan University.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AboutPage;




