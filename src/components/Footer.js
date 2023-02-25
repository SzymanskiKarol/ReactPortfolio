import React from 'react'
import "../styles/Footer.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <AlternateEmailIcon />
                <LinkedInIcon />
                <GitHubIcon />
            </div>
            <p>&copy; 2023 KaSz</p>
        </div>
    )
}

export default Footer