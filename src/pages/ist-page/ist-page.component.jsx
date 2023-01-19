import React, {useEffect} from "react";
import "./ist-page.styles.scss";
import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";
import IstMockUp from "../../assets/mockup/ist-mock-up-screens.png";
import IstBackgroundImg from "../../assets/mockup/ist-backgroun-img.png";
import OtherProjects from "../../component/other-projects/other-projects.component";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const IstPage = () => {

    useEffect(() => {
        window.scrollTo({top: 0});
    }, [])


    return (
        <>
            <div className="ist">
                <Header/>
                <div className="ist-image">
                    <div className="img-ist">
                        <div className="ist-title">
                            <h2>IST</h2>
                            {/*<AnimationOnScroll animateIn='animation__animate animate__fadeInUp' animateOnce={true}>*/}
                            <h5>Working Hours</h5>
                            {/*</AnimationOnScroll>*/}
                        </div>
                    </div>
                </div>
                <div className="ist-container">
                    <div className="ist-info">
                        <div className="info">
                            <h2>Technology</h2>
                            <p>Angular, Spring </p>
                        </div>
                        <div className="border">
                        </div>
                        <div className="info">
                            <h2>Tools</h2>
                            <p>Webstorm, IntelliJ, DataGrip</p>
                        </div>
                        <div className="border">
                        </div>
                        <div className="info">
                            <h2>Timeline</h2>
                            <p>Oct 2020 - Dec 2020</p>
                        </div>
                    </div>
                    <div className="ist-overview">
                        <h2>OVERVIEW</h2>
                        <p>As scholarship holders at the faculty, we pay off the faculty fees by working at the faculty.
                            Each student has his own category, which has a certain price, which is calculated after the
                            total number of hours worked. Those records were kept manually in Excel and on the computer,
                            so we came up with the idea
                            of creating an application.</p>
                    </div>
                </div>
                <div className="ist-background">
                    <div className="ist-background-img">
                        <img src={IstBackgroundImg}/>
                    </div>
                    <div className="ist-background-text">
                        <h2>BACKGROUND</h2>
                        <h3>Team Contribution</h3>
                        <p>
                            The team that worked on the application consisted of 3 students. For the whole team, this
                            was the first serious application they had worked on so far. That's why we all worked
                            full-stack in order to decide what suits us better and what works best for us.</p>

                        <h3>My Contribution</h3>
                        <p>This is my first serious application that I worked with two other students. We worked
                            full-stack (Angular and Spring) on this application. My contribution was developing the
                            logic, creating the design, connecting the service with the backend and writing certain
                            services.
                        </p>
                    </div>
                </div>
                <div className="ist-container">
                    <div className="ist-problems">
                        <h2>THE PROBLEMS</h2>
                        <p>The problem we had was that we kept records in excel and had to enter and calculate
                            everything manually. Errors often occurred and it was difficult to keep records. we also did
                            not always have insight into how much we had left to pay and how much we earned.
                        </p>
                    </div>
                </div>
                <div className="ist-mock-up">
                    <img src={IstMockUp}/>
                </div>
                <div className="ist-container">
                    <div className="ist-solution">
                        <h2>SOLUTION</h2>
                        <p>We designed the application and thus solved all the problems we had before. The application
                            was transparent and at any moment we could see how much we earned and how much we paid in
                            school fees. Also, entering and reviewing time was simple and intuitive.
                        </p>
                    </div>
                </div>
                {/*<OtherProjects/>*/}
                <Footer/>
            </div>
        </>
    )

}

export default IstPage;
