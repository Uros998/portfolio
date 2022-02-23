import React from "react";
import './project-card.styles.scss';
import {useNavigate} from "react-router";

const ProjectCard = (props) => {
    const navigate = useNavigate()


    // style={{backgroundImage: `url(${props.image})`}}

    const style = {
        backgroundImage: `url(${props.image})`
    }


    return (
        <div className="card" onClick={() => navigate(props.path)}>
            <div className="card-image" style={style}>
                <div className="card-body">
                    <h1>{props.title}</h1>
                    <h3>{props.body}</h3>
                    <p>{props.technology}</p>
                </div>
            </div>

        </div>

        // {/*<div className="card-content">*/}
        // {/*    <h2 className="card-title">*/}
        // {/*        {props.title}*/}
        // {/*    </h2>*/}
        // {/*    <p className="card-body">*/}
        // {/*        {props.body}*/}
        // {/*    </p>*/}
        // {/*</div>*/}

    )
}

export default ProjectCard;

