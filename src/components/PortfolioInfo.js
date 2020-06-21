import React from "react";
import { Link } from 'react-router-dom';
import "../styles/PortfolioInfo.css";
import "../styles/styles.scss";
import Dragons from "../img/Jobs&Dragons.png";
import PostUp from "../img/PopUpCards_Project2.png";
import JobRocket from "../img/JobRocket.png";
import WeatherDash from "../img/WeatherDash.png";
import Sched from "../img/Planner.png";
import Burger from "../img/fries_with_that.png";


let portfolioInfo = () => {
        return (
            <div className="grid-x grid-padding-x">
            <div className="portfolio">
                <div>
                    <h2 id="my-portfolio">My Work</h2>
                    <hr></hr>
                </div>

                <div className="grid-container fluid">
                    <div className="grid-x grid-margin-x">
                        <div className="cell small-12 medium-6 large-3">
                            <div className="card">
                                <div className="card-divider">
                                    <h3>Jobs&#38;Dragons</h3>
                                </div>
                                <img src={Dragons} className="portfolio" alt="Screenshot of app, PostUpCards"></img>
                                <div className="card-section">
                                    <p>Jobs&#38;Dragons is a web application that gamifies the job search and career development process.</p>
                                    <div className="row techlink">
                                       <Link to="/jandd" target="_blank" rel="noopener noreferrer"><button className="button">Tech Spec Page</button></Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cell small-12 medium-6 large-3">
                            <div className="card">
                                <div className="card-divider">
                                    <h3>PostUp Cards</h3>
                                </div>
                                <img src={PostUp} className="portfolio" alt="Screenshot of app, PostUpCards"></img>
                                <div className="card-section">
                                    <p>PostUp Cards is a web application that allows the user to create and collect
                                        digital basketball cards.
                                    </p>
                                    <div className="row techlink">
                                    <Link to="/postup" target="_blank" rel="noopener noreferrer"><button className="button">Tech Spec Page</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cell small-12 medium-6 large-3">
                            <div className="card">
                                <div className="card-divider">
                                    <h3>JobRocket</h3>
                                </div>
                                <img src={JobRocket} className="portfolio" alt="Screenshot of app, PostUpCards"></img>
                                <div className="card-section">
                                    <p>JobRocket is a web application that allows the user to search for a job in their area and view its location.
                                    </p>
                                    <div className="row techlink">
                                    <Link to="/jobrocket" target="_blank" rel="noopener noreferrer"><button className="button">Tech Spec Page</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cell small-12 medium-6 large-3">
                            <div className="card">
                                <div className="card-divider">
                                    <h3>Weather Dashboard</h3>
                                </div>
                                <img src={WeatherDash} className="portfolio" alt="Screenshot of app, PostUpCards"></img>
                                <div className="card-section">
                                    <p>The Weather Dashboard app lets the user look up current weather and forecasts for selected cities.</p>
                                    <div className="row techlink">
                                    <Link to="/dashboard" target="_blank" rel="noopener noreferrer"><button className="button">Tech Spec Page</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cell small-12 medium-6 large-3">
                            <div className="card">
                                <div className="card-divider">
                                    <h3>Work Day Planner</h3>
                                </div>
                                <img src={Sched} className="portfolio" alt="Screenshot of app, PostUpCards"></img>
                                <div className="card-section">
                                    <p>Work Day Planner is a productivity app that let's the user plan out their 9-5 workday.</p>
                                    <div className="row techlink">
                                    <Link to="/planner" target="_blank" rel="noopener noreferrer"><button className="button">Tech Spec Page</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cell small-12 medium-6 large-3">
                            <div className="card">
                                <div className="card-divider">
                                    <h3>Fries With That?</h3>
                                </div>
                                <img src={Burger} className="portfolio" alt="Screenshot of app, PostUpCards"></img>
                                <div className="card-section">
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

            </div>
        )

}

export default portfolioInfo;