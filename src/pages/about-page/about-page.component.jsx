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
import MqSql from "../../assets/logo/mysql.png";
import Photoshop from "../../assets/logo/photoshop.png";
import "animate.css/animate.min.css";
import {AnimationOnScroll} from 'react-animation-on-scroll';

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
                        <h1>Hello again!
                            <AnimationOnScroll animateIn='animation__animate animate__shakeX' animateOnce={true}>
                                <span>  ✌🏻  </span>
                            </AnimationOnScroll>
                        </h1>
                        <h2>I'm <span className="name">Uroš Milovanović</span></h2>
                    </div>
                    <div className="about-text">
                        <p>I'm a software engineer who likes new experiences and having fun. I look at work as a
                            challenge through which I learn new things and improve myself. My friends would say I am a
                            very interesting person and surrounding me is always positive energy. All my life I have
                            been playing different kinds of sports, and my biggest passion is travelling.
                        </p>
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
                                    <h1>August 2020 - December 2021</h1>
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
                                        <h3>Angular <span>3 YEARS</span></h3>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-img">
                                        <img src={HtmlCss}/>
                                    </div>
                                    <div className="skill-title">
                                        <h3>HTML / CSS <span>4 YEARS</span></h3>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-img">
                                        <img src={Javascript}/>
                                    </div>
                                    <div className="skill-title">
                                        <h3>Javascript <span>3 YEARS</span></h3>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-img">
                                        <img src={MqSql}/>
                                    </div>
                                    <div className="skill-title">
                                        <h3>MySql <span>2 YEARS</span></h3>
                                    </div>
                                </div>

                            </div>
                            <div className="skill-right">
                                <div className="skill">
                                    <div className="skill-img">
                                        <img src={ReactLogo}/>
                                    </div>
                                    <div className="skill-title">
                                        <h3>React <span>1 YEAR</span></h3>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-img">
                                        <img src={Spring}/>
                                    </div>
                                    <div className="skill-title">
                                        <h3>Spring <span>2 YEARS</span></h3>
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
                                        <h3>Photoshop <span>10 MONTHS</span></h3>
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
                            <p><span>This is my journey.</span> It all started when I entered the faculty in 2019. I
                                finished the first year on schedule and
                                then successfully enrolled in the second year. I then received an offer to join the
                                team as a faculty scholar, which I was very excited about and of course accepted the
                                offer immediately. After that, I
                                finished the second and the third year also on schedule and I am currently a final year
                                student. In addition
                                to graduating from the faculty as a regular student, I have two years of work
                                experience behind me. The experience I gained helped me a lot with learning new
                                technologies and getting used to a working environment along with client cooperation.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AboutPage;




