import React from "react";
import { Link } from 'react-router-dom';
import "../styles/PortfolioInfo.css";
import "../styles/styles.scss";
import Dragons from "../img/J&D_Logo_PortAlt.png";
import PostUp from "../img/Postup_Logo_Port.png";
import JobRocket from "../img/JB_Logo_Port.png";
import WeatherDash from "../img/Weather_Logo_Port.png";
import Sched from "../img/WDP_Logo_Port.png";
import Burger from "../img/FWT_Logo_Port.png";


let portfolioInfo = () => {
    return (
        <div className="grid  portfolio align-center">
            <div className="grid grid-padding-x">
                <div className="cell"><h2 className="sectionhead" id="my-portfolio">My Work</h2></div>
                <hr></hr>
            </div>

            <div className="grid-container fluid">

                <div className="grid-x grid-margin-x">

                    <div className="cell small-12 medium-6 large-4">
                        <div className="card">
                            <div className="initial">
                                <img src={Dragons} className="jandd portfolioimg" alt="Screenshot of app, Jobs&#38;Dragons"></img>
                                <div className="janddhover overlay"></div>
                            </div>
                            <div className="card-section">
                                <h5>Jobs&#38;Dragons</h5>
                                <p>Jobs&#38;Dragons is a web application that gamifies the job search and career development process.</p>
                                <div className="row techlink">
                                    <Link to="/jandd" target="_blank" rel="noopener noreferrer"><button className="button">Tech Spec Page</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cell small-12 medium-6 large-4">
                        <div className="card">
                            <div className="initial">
                                <img src={PostUp} className="portfolioimg" alt="Screenshot of app, PostUpCards"></img>
                                <div className="postuphover overlay"></div>
                            </div>
                            <div className="card-section">
                                <h5>PostUp Cards</h5>
                                <p>PostUp Cards is a web application that allows the user to create and collect
                                digital basketball cards.
                                    </p>
                                <div className="row techlink">
                                    <Link to="/postup" target="_blank" rel="noopener noreferrer"><button className="button">Tech Spec Page</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cell small-12 medium-6 large-4">
                        <div className="card">
                            <div className="initial">
                                <img src={JobRocket} className="portfolioimg" alt="Screenshot of app, JobRocket"></img>
                                <div className="jobrockethover overlay"></div>
                            </div>
                            <div className="card-section">
                                <h5>JobRocket</h5>
                                <p>JobRocket is a web application that allows the user to search for a job in their area and view its location.</p>
                                <div className="row techlink">
                                    <Link to="/jobrocket" target="_blank" rel="noopener noreferrer"><button className="button">Tech Spec Page</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cell small-12 medium-6 large-4">
                        <div className="card">
                            <div className="initial">
                                <img src={WeatherDash} className="portfolioimg" alt="Screenshot of app, WeatherDashboard"></img>
                                <div className="weatherhover overlay"></div>
                            </div>
                            <div className="card-section">
                                <h5>Weather Dashboard</h5>
                                <p>The Weather Dashboard app lets the user look up current weather and forecasts for selected cities.</p>
                                <div className="row techlink">
                                    <Link to="/dashboard" target="_blank" rel="noopener noreferrer"><button className="button">Tech Spec Page</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cell small-12 medium-6 large-4">
                        <div className="card">
                            <div className="initial">
                                <img src={Sched} className="portfolioimg" alt="Screenshot of app, Work Day Planner"></img>
                                <div className="plannerhover overlay"></div>
                            </div>
                            <div className="card-section">
                                <h5>Work Day Planner</h5>
                                <p>Work Day Planner is a productivity app that let's the user plan out their 9-5 workday.</p>
                                <div className="row techlink">
                                    <Link to="/planner" target="_blank" rel="noopener noreferrer"><button className="button">Tech Spec Page</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cell small-12 medium-6 large-4">
                        <div className="card">
                            <div className="initial">
                                <img src={Burger} className="portfolioimg" alt="Screenshot of app, Fries With That?"></img>
                                <div className="burgerhover overlay"></div>
                            </div>
                            <div className="card-section">
                                <h5>Fries With That?</h5>
                                <p>Fries With That? allows the user to log multiple burger orders and change their state once they've been eaten.</p>
                                <div className="row techlink">
                                    <Link to="/burger" target="_blank" rel="noopener noreferrer"><button className="button">Tech Spec Page</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default portfolioInfo;