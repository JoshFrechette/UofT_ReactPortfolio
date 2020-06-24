import React from "react";
import "../styles/spec.css";
import Preview from "../img/WeatherDash.gif";
import github from "../img/GitHub-Mark-Light-32px.png";

let WeatherDash = () => {
    return (
        <div className="grid-x grid-margin-x small-margin-collapse align-center">
            <div className="cell small-12 medium-8 project">
                <div className="techhead">
                        <h1>Weather Dashboard</h1>
                        <p></p>
                        <a href='https://joshfrechette.github.io/WeatherDashboard/' target="_blank" rel="noopener noreferrer"><button className="button"><img className="buttonlogo" src={github} alt="github logo"></img>GitHub Page</button></a>
                        <a href='https://github.com/JoshFrechette/WeatherDashboard.git' target="_blank" rel="noopener noreferrer"><button className="button"><img className="buttonlogo" src={github} alt="github logo"></img>GitHub Repository</button></a>
                    </div>
                    <div className="img">
                        <img className="preview" src={Preview} alt="gif of the app" />
                    </div>

                    <div className="techbody">
                        <h3>Technical Sheet</h3>
                        <p>Weather Dashboard is a solo project that is designed for travellers to search for current weather and forecasts of searched destinations.</p>
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
                            <li>Node.js</li>
                        </ul>
                        <p>APIs used</p>
                        <ul className="tech">
                            <li><a className="links" href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">OpenWeather</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default WeatherDash;