import React, {useEffect, useState} from "react";
import './homepage.styles.scss';
import Header from "../../component/header/header.component";
import Instagram from '../../assets/instagram.png';
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import IsumImage from "../../assets/iusm.png";
import ProjectCard from "../../component/project-card/project-card.component";
import Footer from "../../component/footer/footer.component";
import ScrollDown from "../../component/scroll-down/scroll-down.component";


const cards = [
    {
        title: 'ISUM',
        body: 'Information System University Metropolitan',
        technology: 'Angular and Spring',
        image: IsumImage,
        path: '/isum',
        side: 'left'
    },
    {
        title: 'IST Working Hours',
        body: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat harum ipsa maiores\n' +
            ' perspiciatis praesentium provident quam quia reiciendis r   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat harum ipsa maiores\n' +
            ' perspiciatis praesentium provident quam quia reiciendis rem!',
        image: IsumImage,
        path: '/ist-hours',
        side: 'right'
    }
];

const HomePage = () => {

    // const [showScroll, setShowScroll] = useState(true);
    // hidden={!showScroll}

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //       setShowScroll(window.scrollY >= 800);
    //     })
    // }, [])


    return (
    <div className='homepage'>
        <div className="container">
            <Header/>
            <div className='homepage-text-box'>
                <p>I am</p>
                <h1>UROŠ</h1>
                <h3>A software engineering student, currently a web systems developer.</h3>
            </div>

            <div className="social-icons">

                <a className='social-icon' href='https://github.com/Uros998'><img src={github}/></a>
                <a className='social-icon' href='https://www.instagram.com/uros_milovanovic/'><img src={Instagram}/></a>
                <a className='social-icon' href='https://www.instagram.com/uros_milovanovic/'><img src={linkedin}/></a>
            </div>
        </div>
        <div className='scroll-down' >
            <ScrollDown/>
        </div>
        <div className="project-homepage">
            <h2>This Is My Projects</h2>
            {cards.map(c => <ProjectCard {...c}  />)}
        </div>
        <Footer/>
    </div>
    )
}

export default HomePage;


