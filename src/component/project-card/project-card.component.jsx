import React from "react";
import './project-card.styles.scss';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

const ProjectCard = (props) => {
    const navigate = useNavigate()

    return (
        <div className="card" onClick={() => navigate(props.path)} style={{backgroundImage: `url(${props.image})`}}>
            <div className="card-content">
                <h2 className="card-title">
                    {props.title}
                </h2>
                <p className="card-body">
                    {props.body}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard;

