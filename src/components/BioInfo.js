import React from "react";
import "../styles/BioInfo.css";
import BioPic from "../img/JF-LinkedIn.jpg";
import CV from "../img/JoshuaFrechette_resume_2021.pdf";

let bioInfo = () => {

    return (
        <div className="grid bio align-center sectionbg">

            <div className="grid grid-padding-x">
                <div className="cell"><h2 className="sectionhead" id="about-me">About Me</h2></div>
                <hr></hr>
            </div>

            <div className="grid-x grid-padding-x align-center">

                <div className="grid grid-margin-y" id="content">

                    <div className="small-12 medium-6 cell stats">
                        <img src={BioPic} className="profile" alt="Professional profile of Josh Frechette"></img>
                        <h4 className="ownername">Josh Fr&eacute;chette</h4>

                        <div className="grid-x auto">
                            <div className="cell small-2"><i class="bioicon fas fa-user-tag"></i></div>
                            <div className="cell small-8"><p>Web Developer<br></br>Graphic Designer</p></div>
                        </div>
                        <div className="grid-x auto">
                            <div className="cell small-2"><i class="bioicon fas fa-map-pin"></i></div>
                            <div className="cell small-8"><p>Toronto, Ontario, Canada</p></div></div>
                        <div className=" button secondary "> <i className="pdf far fa-file-pdf"></i> <a className="resume" href={CV} target="_blank" rel="noopener noreferrer">View Resume</a></div>
                    </div>

                </div>

                <div className="small-12 large-6 cell blurb">
                    <p>
                        Web Developer with a certificate in Full Stack Web Development from the University of Toronto. Experience as a Graphic Designer
                        and gained a bachelor's degree in Graphic Design at the Ontario College of Art &amp; Design. Background in the hospitality industry,
                        including supervising and management roles. Design software skills in Adobe Creative Suite and Coding skills in HTML, CSS, and Javascript.
                            </p>

                    <p>
                        Strong abilities in teamwork, organization, and handling stress with composure. I enjoy applying new web capabilities to practical applications.
                        Passionate about successfully taking a project from concept to actualization.
                            </p>

                    <p>
                        Using my combined expertise to create an immersive user experience, I'm excited to join a team of like-minded individuals who are striving to leave their mark on the web.
                            </p>
                </div>

            </div>
        </div>
    )
}

export default bioInfo;