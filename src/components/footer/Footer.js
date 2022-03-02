import React from "react";
import './Footer.css';
import fbIcon from '../../resources/facebook-icon.png';
import githubIcon from '../../resources/github-icon.png';
import linkedinIcon from '../../resources/linkedin-icon.png';

export default function Footer() {
    return (
        <footer>
            <a href="https://www.facebook.com/thanthu.nair"><img src={fbIcon} /></a>
            <a href="https://github.com/Thanthu"><img src={githubIcon} /></a>
            <a href="https://www.linkedin.com/in/thanthu-nair-4871a778/"><img src={linkedinIcon} /></a>
        </footer>
    );
}