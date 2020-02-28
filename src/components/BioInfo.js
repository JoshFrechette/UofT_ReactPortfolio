import React, { Component } from "react";
import "../styles/BioInfo.css";
import BioPic from "../img/JF-LinkedIn.jpg";

export default class BioInfo extends Component {
    render() {
        return (
            <div className="bio">
            <h2 id="about-me">About Me</h2>
            <hr></hr>
            <img src={BioPic} className="profile" alt="Professional profile of Josh Frechette"></img>
            <h3>Josh Fr&eacute;chette</h3>
            <p>
            Web Developer with a certificate in Full Stack Web Development from the University of Toronto. Experience as a Graphic Designer 
            and gained a bachelor's degree in Graphic Design at the Ontarion College of Art &amp; Design. Background in the hospitality industry, 
            including supervising and management roles. Design software skills in Adobe Creative Suite and Coding skills in HTML, CSS, and Javascript.
            </p>
    
            <p>
            Strong abilities in teamwork, organization, and handling stress with composure. I enjoy applying new web capabilities to practical applications.
            Passionate about successfully taking a project from concept to actualization.
            </p>
    
            <p>
            Using my combined expertise to create an immersive user experience, I'm excited to join a team of like-minded individuals who are striving to leave their mark on the web.
            </p>
            <i class="far fa-file-pdf"></i> <a class="resume" href="Assets/JoshuaFrechette_Resume_2019.pdf" target="_blank">View Resume</a>
            </div>
        )
    }
}
