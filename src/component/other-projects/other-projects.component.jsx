import React from "react";
import "./other-project.styles.scss";
import IsumImage from "../../assets/mockup/isum-mockup-1.png";
import IST from "../../assets/mockup/IST-card.png";
import Website from "../../assets/mockup/website-mockup-psd.jpg";
import OtherProjectsCards from "../other-projects-cards/other-projects-cards.component";


const OtherProjects = () => {
    const cards = [
        {
            title: 'ISUM',
            body: '',
            technology: 'Angular & Spring',
            image: IsumImage,
            path: '/isum',
            // side: 'left'
        },
        {
            title: 'IST Working Hours',
            body: '',
            technology: 'Angular & Spring',
            image: IST,
            path: '/ist-hours',
            // side: 'right'
        },
        {
            title: 'Websites',
            body: '',
            technology: 'React',
            image: Website,
            path: '/isum',
            // side: 'left'
        }
    ];


    return (
        <div className="other-projects">
            <div className="other-projects-title">
                <h2>Thanks for reading, feel free to check out my other projects!</h2>
            </div>
            <div className="other-cards-project">
                {cards.map(c => <OtherProjectsCards {...c}  />)}
            </div>
        </div>
    )


}

export default OtherProjects;


