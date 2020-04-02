import React from "react";
import "../styles/spec.css";
import Preview from "../img/JobRocket.gif";

let PostUp = () => {
    return (
        <div className="container specs">
            <div className="row project">
                <div className="col">
                    <div>
                        <h1>PostUp Cards</h1>
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
                        <p>

                        </p>
                    </div>

                    <div>
                        <h3>Technologies Used</h3>
                        <p>Code technologies and skills I was involved with using to complete the project.</p>
                        <ul className="tech">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>MaterializeCSS</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Mongoose, MongoDB</li>
                            <li>Auth0</li>
                        </ul>
                        <p>APIs used</p>
                        <ul className="tech">
                            <li>AuthenticJobs</li>
                            <li>GitHub API</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostUp;