import React from 'react'
import "../styles/ProjectDisplay.css"
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} alt="project-image" />
            <p>Skills: <b>{project.skills}</b></p>
            <GitHubIcon />
        </div>
    )
}

export default ProjectDisplay