import React from "react";
import './project-card.styles.scss';
// import {useNavigate} from "react-router";

const ProjectCard = (props) => {
    // const navigate = useNavigate()


    // style={{backgroundImage: `url(${props.image})`}}
    // onClick={() => navigate(props.path)}

    const style = {
        float: props.side,
        // backgroundImage:`url(${props.image})`
    }


    return (
        <>
            <div className="card"  style={style}>
                <h1>{props.title}</h1>
                <h3>{props.body}</h3>
                <p>{props.technology}</p>
            </div>
        </>

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

