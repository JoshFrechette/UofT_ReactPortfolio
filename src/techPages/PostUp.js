import React from "react";
import "../styles/spec.css";
import Preview from "../img/PostUpCards.gif";

let PostUp = () => {
    return (
        <div className="container specs">
            <div className="row project">
                <div className="col">
                    <div>
                        <h1>PostUp Cards</h1>
                        <p>PostUp Cards is the second team project for the UofT SCS Coding Bootcamp.</p>
                        <a href='https://postup-cards.herokuapp.com/' target="_blank" rel="noopener noreferrer"><button className="button">Heroku Deployment</button></a>
                        <a href='https://github.com/JoshFrechette/PostUp-Cards.git' target="_blank" rel="noopener noreferrer"><button className="button">GitHub Repository</button></a>
                    </div>
                    <div className="img">
                        <img src={Preview} alt="gif of the app" />
                    </div>

                    <div>
                        <h3>Technical Sheet</h3>
                        <p>I was part of a 4 person team of students tasked with developing an original web application idea that integrated all of the coding concepts that we were taught thus far in the bootcamp.</p>
                        <hr></hr>
                        <p> My initial role in project was project manager and I also had the responsibility of setting up the routes and creating the schema for the MySQL database. I eventually
                            became more hands-on in the overall design of the app and implementing the javascript into the app. This project helped push me out of my comfort zone of working on front-end design and
                            into more challenging back-end content management. 
                        </p>
                    </div>

                    <div>
                        <h3>Technologies Used</h3>
                        <p>Code technologies and skills I was involved with using to complete the project.</p>
                        <ul className="tech">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Javascript</li>
                            <li>Foundation CSS</li>
                            <li>Handlebars</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MySQL</li>
                        </ul>
                        <p>APIs used</p>
                        <ul className="tech">
                            <li>Ball Don't Lie</li>
                            <li>Giphy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostUp;