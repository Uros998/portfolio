import React, {useEffect, useState} from "react";
import './homepage.styles.scss';
import Header from "../../component/header/header.component";
import Instagram from '../../assets/instagram.png';
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import IsumImage from "../../assets/mockup/isum-mockup-1.png";
import Etilen from "../../assets/mockup/etilen.png";
import LibraLab from "../../assets/mockup/libra-lab.png";
import Bump from "../../assets/mockup/bump.png";
// import Sport from "../../assets/mockup/sport-analitik.psd";
import IST from "../../assets/mockup/IST-card.png";
import ProjectCard from "../../component/project-card/project-card.component";
import Footer from "../../component/footer/footer.component";
import ScrollDown from "../../component/scroll-down/scroll-down.component";

const cards = [
    {
        title: 'ISUM',
        body: '',
        technology: 'Angular & Spring',
        image: IsumImage,
        path: '/isum',
        routerLink: true,
        // side: 'left'
    },
    {
        title: 'IST Working Hours',
        body: '',
        technology: 'Angular & Spring',
        image: IST,
        path: '/ist-hours',
        routerLink: true,
        // side: 'right'
    },
    {
        title: 'Etilen',
        body: '',
        technology: 'React',
        image: Etilen,
        path: 'https://hemijskociscenjenis.com/',
        routerLink: false,
        // side: 'left'
    },
    {
        title: 'Libra Lab',
        body: '',
        technology: 'React',
        image: LibraLab,
        path: 'https://www.libralab.rs/',
        routerLink: false,
        // side: 'left'
    },
    {
        title: 'Bump-Software',
        body: '',
        technology: 'React',
        image: Bump,
        path: 'https://bump-software.com/',
        routerLink: false,
        // side: 'left'
    },
    // {
    //     title: 'Sport Analytik Centar',
    //     body: '',
    //     technology: 'Wordpress',
    //     image: Sport,
    //     path: 'https://sportanalytikcentar.rs/',
    //     routerLink: false,
    //     // side: 'left'
    // },
];

const HomePage = () => {

    useEffect(() => {
        window.scrollTo({top: 0});
    }, [])


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
                    <p>I'm</p>
                    <h1>UROŠ</h1>
                    <h3>A software engineering student, currently a frontend developer.</h3>
                </div>

                <div className="social-icons">
                    <a className='social-icon' href='https://github.com/Uros998'><img src={github}/></a>
                    <a className='social-icon' href='https://www.instagram.com/uros_milovanovic/'><img src={Instagram}/></a>
                    <a className='social-icon' href='https://www.linkedin.com/in/uros-milovanovic-590712233/'><img
                        src={linkedin}/></a>
                </div>
            </div>
            <div className='scroll-down'>
                <ScrollDown/>
            </div>
            <div className="project-homepage">
                {/*<h2>These Are My Projects</h2>*/}
                <div className="cards" >
                    {cards.map(c => <ProjectCard {...c} key={c} />)}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage;


