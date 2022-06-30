import React, {useEffect} from "react";
import "./isum-page.styles.scss";
import Footer from "../../component/footer/footer.component";
import OtherProjects from "../../component/other-projects/other-projects.component";
import IsumBackgroundImg from "../../assets/mockup/isum-background-img.png";
import IsumMockUp from "../../assets/mockup/isum-mock-up-screens-v4.png";
import Header from "../../component/header/header.component";


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
                        <p>Considering that the faculty has been working for many years, it had an old system that was
                            made a long time ago. The system worked solidly but it was difficult to maintain it and add
                            new things. The system was made with old technologies so that was a problem because the
                            technology is advancing day by day. Therefore, the time has come to change that and create a
                            new system.
                        </p>
                    </div>
                </div>

                <div className="isum-background">
                    <div className="isum-background-img">
                        <img src={IsumBackgroundImg}/>
                    </div>
                    <div className="isum-background-text">
                        <h2>BACKGROUND</h2>
                        <h3>Team Contribution</h3>
                        <p>The team that worked on this system consisted of 8 students (scholarship holders). We were
                            divided into frontend and backend developer. The team was new and during the development of
                            the system, most students studied the technology in which the system was developed (Angular
                            and Spring).</p>

                        <h3>My Contribution</h3>
                        <p>My job on this project was frontend. I participated in developing the logic, connecting the
                            service with the backend and designing the pages.</p>
                    </div>
                </div>
                <div className="isum-container">

                    <div className="isum-problems">
                        <h2>THE PROBLEMS</h2>
                        <p>The problem with the old system is that it was made in old technology. Also, the system is
                            too patched up and it is difficult to maintain it. The problem with the old system is that
                            it is almost impossible to add new things.</p>
                    </div>

                </div>
                <div className="isum-mock-up">
                    <img src={IsumMockUp}/>
                </div>
                <div className="isum-container">

                    <div className="isum-solution">
                        <h2>SOLUTION</h2>
                        <p>

                            The solution we came up with is to start the entire system from scratch. We had a good team
                            divided into frontend and backend developers. Conceived how the system should function and
                            started developing it.</p>
                    </div>
                </div>
                <OtherProjects/>
                <Footer/>
            </div>
        </>
    )
}


export default IsumPage;
