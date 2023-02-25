import React from 'react'
import "../styles/Home.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';


const Home = () => {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi, I am Karol</h2>
                <div className="prompt">
                    <p>A junior software developer with a passion for learing</p>
                    <AlternateEmailIcon />
                    <LinkedInIcon />
                    <GitHubIcon />
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>ReactJS, Redux, HTML, CSS, Tailwind, Sass, BootStrap</span>
                    </li>
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span>NodeJs, ExpressJS, MongoDB, MySQL, Flask</span>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <span>JavaScript, TypeScript, Python</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home