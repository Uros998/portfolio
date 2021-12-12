import React, {useEffect} from "react";
import "./isum-page.styles.scss";
import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";
// import IsumMockup from "../../assets/mockup/isum-mockup-page-v2.png";


const IsumPage = () => {

    useEffect(() => {
        window.scrollTo({top: 0});
    }, [])


    return (
        <>
            <div className='isum'>
                <Header/>
                <div className="isum-image">
                    <div className="img-isum">
                        <div className="isum-title">
                            <h2>ISUM</h2>
                            <h5>Information System University Of Metropolitan</h5>
                        </div>
                    </div>
                </div>
                <div className="isum-container">
                    <div className="isum-info">
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
                            <p>Jan 2021 - Jan 2022</p>
                        </div>
                    </div>
                    <div className="isum-overview">
                        <h2>OVERVIEW</h2>
                        <p>I co-founded this dügl with 2 other people, David and Josh, who helped develop the app. Dügl
                            is a goal-setting app where you can track and share goals with your friends. I was
                            responsible for UX/UI, branding, as well as business (marketing, customer development). As
                            the Design and Product lead, I created the end-to-end user experience and branding, working
                            with the other two co-founders to bring it live to iOS and Android</p>
                    </div>
                    <div className="isum-problems">
                        <h2>PROBLEMS</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque consectetur consequatur
                            cupiditate dolore dolores enim facere, fugit, hic id illum laudantium nesciunt, numquam
                            praesentium saepe sequi tempora vel voluptatum!</p>
                    </div>
                    <div className="isum-solution">
                        <h2>SOLUTION</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque consectetur consequatur
                            cupiditate dolore dolores enim facere, fugit, hic id illum laudantium nesciunt, numquam
                            praesentium saepe sequi tempora vel voluptatum!</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}


export default IsumPage;