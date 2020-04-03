import React from "react";
import "../styles/spec.css";
import Preview from "../img/Planner.gif";

let Sched = () => {
    return (
        <div className="container specs">
            <div className="row project">
                <div className="col">
                    <div>
                        <h1>Work Day Planner</h1>
                        <p></p>
                        <a href='https://joshfrechette.github.io/DayPlanDreamer/' target="_blank" rel="noopener noreferrer"><button className="button">GitHub Page</button></a>
                        <a href='https://github.com/JoshFrechette/DayPlanDreamer.git' target="_blank" rel="noopener noreferrer"><button className="button">GitHub Repository</button></a>
                    </div>
                    <div className="img">
                        <img src={Preview} alt="gif of the app" />
                    </div>

                    <div>
                        <h3>Technical Sheet</h3>
                        <p>Solo project with dynamically updated HTML and CSS powered by jQuery. Application is an interactive day planner that utilizes moment.js and AJAX</p>
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
                            <li>Bootstrap</li>
                            <li>Moment.js</li>
                            <li>Javascript</li>
                            <li>jQuery</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sched;