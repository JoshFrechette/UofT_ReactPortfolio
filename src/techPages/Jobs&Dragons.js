import React from "react";
import "../styles/spec.css";
import Preview from "../img/dragons.gif";
import heroku from "../img/heroku-logo-solid-white-transparent.png";
import github from "../img/GitHub-Mark-Light-32px.png";

let Dragons = () => {
    return (
        <div className="container specs">
            <div className="row project">
                <div className="col">
                    <div>
                        <h1>Jobs&#38;Dragons</h1>
                        <p></p>
                        <a href='https://jobs-and-dragons.herokuapp.com/' target="_blank" rel="noopener noreferrer"><button className="button"><img className="buttonlogo" src={heroku} alt="heroku logo"></img>Heroku Deployment</button></a>
                        <a href='https://github.com/Winyumi/jobs-and-dragons' target="_blank" rel="noopener noreferrer"><button className="button"><img className="buttonlogo" src={github} alt="github logo"></img>GitHub Repository</button></a>
                    </div>
                    <div className="img">
                        <img className="preview" src={Preview} alt="gif of the app" />
                    </div>

                    <div>
                        <h3>Technical Sheet</h3>
                        <p>I was part of an 8 person team of developers tasked with developing an original full-stack web application with MERN deployment.</p>
                        <hr></hr>
                        <p>My principal role in the project was Art Director, however I was very involved in manipulating the React game engine and integrating
                            the web forms and database information into the gameplay as well. I led the UI/UX development, creating mockups and the website flowchart which allowed the 
                            team to visualize the application. The biggest challenge I faced was balancing the gameplay aspect with the productive career aspects of the app. 
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

export default Dragons;