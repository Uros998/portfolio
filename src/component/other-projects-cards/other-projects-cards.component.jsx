import React from "react";
import "./other-projects-cards.styles.scss";
import {useNavigate} from "react-router-dom";


const OtherProjectsCards = (props) => {

    const navigate = useNavigate();
    const style = {
        backgroundImage: `url(${props.image})`
    }

    return (
        <>
            <div className="mini-card" onClick={() => navigate(props.path)}>
                <div className="mini-card-image" style={style}>
                    <div className="mini-card-body">
                        <h1>{props.title}</h1>
                        <h3>{props.body}</h3>
                        <p>{props.technology}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtherProjectsCards;
