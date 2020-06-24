import React from "react";
import "../styles/spec.css";
import Preview from "../img/JobRocket.gif";
import github from "../img/GitHub-Mark-Light-32px.png";

let JobRocket = () => {
    return (
        <div className="grid-x grid-margin-x small-margin-collapse align-center">
            <div className="cell small-12 medium-8 project">
                <div className="techhead">
                        <h1>JobRocket</h1>
                        <p></p>
                        <a href='https://michaelhrivnak.github.io/JobRocket/' target="_blank" rel="noopener noreferrer"><button className="button"><img className="buttonlogo" src={github} alt="github logo"></img>GitHub Page</button></a>
                        <a href='https://github.com/michaelhrivnak/JobRocket.git' target="_blank" rel="noopener noreferrer"><button className="button"><img className="buttonlogo" src={github} alt="github logo"></img>GitHub Repository</button></a>
                        </div>
                    <div className="img">
                        <img className="preview" src={Preview} alt="gif of the app" />
                    </div>

                    <div className="techbody">
                        <h3>Technical Sheet</h3>
                        <p>I was part of a 4 person team of developers tasked with developing an original web application idea that integrated two APIs.</p>
                        <hr></hr>
                        <p>I developed the UI/UX of the project, then transitioned to working on the Adzuna API calls. In the final phase of development, I alternated between working on the back-end and the front-end, switching 
                            to wherever I was needed most. This was the first group coding project that I worked on and it taught me about communicating and coordinating as a group as much as it did about coding.

                        </p>
                    </div>

                    <div>
                        <h3>Technologies Used</h3>
                        <p>Code technologies and skills I was involved with using to complete the project.</p>
                        <ul className="tech">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Javascript</li>
                            <li>BootstrapCSS</li>
                            <li>JoaderJS</li>
                        </ul>
                        <p>APIs used</p>
                        <ul className="tech">
                            <li><a className="links" href="https://developer.adzuna.com/" target="_blank" rel="noopener noreferrer">Adzuna</a></li>
                            <li><a className="links" href="https://cloud.google.com/maps-platform" target="_blank" rel="noopener noreferrer">Googlemaps</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default JobRocket;