import React from "react";
import "../styles/BioInfo.css";
import BioPic from "../img/JF-LinkedIn.jpg";
import CV from "../img/JoshuaFrechette_Resume_2019.pdf";

let bioInfo = () => {

        return (
            <div className="container bio">
                <div className="row">
                    <h2 id="about-me">About Me</h2>
                    <hr></hr>
                    </div>
                    <div className="row" id="content">
                        <div className="col-3 stats">
                            <img src={BioPic} className="profile" alt="Professional profile of Josh Frechette"></img>
                            <h4>Josh Fr&eacute;chette</h4>
                            <p>Front End Web Developer<br></br>Graphic Designer</p>
                            <p>Toronto, Ontario, Canada</p>
                        </div>

                        <div className="col-4 blurb">


                            <p>
                                Front End Developer with a certificate in Full Stack Web Development from the University of Toronto. Experience as a Graphic Designer
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
                            <i className="far fa-file-pdf"></i> <a className="resume" href={ CV } target="_blank" rel="noopener noreferrer">View Resume</a>
                        </div>
                    </div>
 
            </div>
        )
}
 
export default bioInfo;