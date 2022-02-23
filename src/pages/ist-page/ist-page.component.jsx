import React from "react";
import "./ist-page.styles.scss";
import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";
import IstMockUp from "../../assets/mockup/ist-mock-up-screens.png";


const IstPage = () => {


    return (
        <>
            <div className="ist">
                <Header/>
                <div className="ist-image">
                    <div className="img-ist">
                        <div className="ist-title">
                            <h2>IST</h2>
                            <h5>Working Hours</h5>
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
                        <p>I co-founded this dügl with 2 other people, David and Josh, who helped develop the app. Dügl
                            is a goal-setting app where you can track and share goals with your friends. I was
                            responsible for UX/UI, branding, as well as business (marketing, customer development). As
                            the Design and Product lead, I created the end-to-end user experience and branding, working
                            with the other two co-founders to bring it live to iOS and Android</p>
                    </div>
                </div>
                <div className="ist-mock-up">
                    <img src={IstMockUp}/>
                </div>
                <div className="ist-container">
                    <div className="ist-problems">
                        <h2>THE PROBLEMS</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque consectetur consequatur
                            cupiditate dolore dolores enim facere, fugit, hic id illum laudantium nesciunt, numquam
                            praesentium saepe sequi tempora vel voluptatum!</p>
                    </div>
                    <div className="ist-solution">
                        <h2>SOLUTION</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque consectetur consequatur
                            cupiditate dolore dolores enim facere, fugit, hic id illum laudantium nesciunt, numquam
                            praesentium saepe sequi tempora vel voluptatum!</p>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )

}

export default IstPage;
