import React from "react";
import "../styles/spec.css";
import Preview from "../img/JobRocket.gif";

let JobRocket = () => {
    return (
        <div className="container specs">
            <div className="row project">
                <div className="col">
                    <div>
                        <h1>JobRocket</h1>
                        <p>JobRocket is the first team project for the UofT SCS Coding Bootcamp.</p>
                        <a href='https://michaelhrivnak.github.io/JobRocket/' target="_blank" rel="noopener noreferrer"><button className="button">GitHub Page</button></a>
                        <a href='https://github.com/michaelhrivnak/JobRocket.git' target="_blank" rel="noopener noreferrer"><button className="button">GitHub Repository</button></a>
                    </div>
                    <div className="img">
                        <img src={Preview} alt="gif of the app" />
                    </div>

                    <div>
                        <h3>Technical Sheet</h3>
                        <p>I was part of a 4 person team of students tasked with developing an original web application idea that integrated all of the coding concepts that we were taught thus far in the bootcamp.</p>
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
                            <li>Adzuna</li>
                            <li>GoogleMaps</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobRocket;