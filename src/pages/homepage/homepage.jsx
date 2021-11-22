import React from "react";
import './homepage.styles.scss';
import Header from "../../component/header/header.component";
import Instagram from '../../assets/instagram.png';
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import ISTHoursImage from "../../assets/project1.jpg";
import IsumImage from "../../assets/logo-02-crveni.png";
import ProjectCard from "../../component/project-card/project-card.component";


const cards = [
    {
        title: 'Metropolitan Isum',
        body: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat harum ipsa maiores\n' +
            ' perspiciatis praesentium provident quam quia reiciendis r   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat harum ipsa maiores\n' +
            ' perspiciatis praesentium provident quam quia reiciendis rem!',
        image: IsumImage,
        path: '/isum'
    },
    {
        title: 'IST Working Hours',
        body: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat harum ipsa maiores\n' +
            ' perspiciatis praesentium provident quam quia reiciendis r   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat harum ipsa maiores\n' +
            ' perspiciatis praesentium provident quam quia reiciendis rem!',
        image: ISTHoursImage,
        path: '/ist-hours'
    }
];

const HomePage = () => (
    <div className='homepage'>
        <div className="container">
            <Header/>
            <div className='homepage-text-box'>
                <p>I'M</p>
                <h1>UROŠ</h1>
                <h3>I'm software engineer specializing in the development of web systems.</h3>
            </div>
            <div className="social-icons">
                <a className='social-icon' href='https://github.com/Uros998'><img src={github}/></a>
                <a className='social-icon' href='https://www.instagram.com/uros_milovanovic/'><img src={Instagram}/></a>
                <a className='social-icon' href='https://www.instagram.com/uros_milovanovic/'><img src={linkedin}/></a>
            </div>
        </div>

        <div className="project-homepage">
            {cards.map(c => <ProjectCard {...c}  />)}
        </div>
    </div>
)

export default HomePage;


