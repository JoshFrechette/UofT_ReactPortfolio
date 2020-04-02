import React from "react";
import { Link } from 'react-router-dom';
import "../styles/PortfolioInfo.css";
import "../styles/styles.scss";
import Dragons from "../img/Jobs&Dragons.png";
import PostUp from "../img/PopUpCards_Project2.png";
import JobRocket from "../img/JobRocket_Project1.png";
import WeatherDash from "../img/WeatherDashboard.png";
import Sched from "../img/WorkDayScheduler.png";
import Burger from "../img/fries_with_that.png";


let portfolioInfo = () => {
        return (
            <div className="portfolio">
                <div>
                    <h2 id="my-portfolio">My Work</h2>
                    <hr></hr>
                </div>

                <div class="grid-container fluid">
                    <div class="grid-x grid-margin-x">
                        <div class="cell small-4">
                            <div className="card">
                                <div className="card-divider">
                                    <h3>Jobs&#38;Dragons</h3>
                                </div>
                                <img src={Dragons} className="portfolio" alt="Screenshot of app, PostUpCards"></img>
                                <div className="card-section">
                                    <p>Jobs&#38;Dragons is a web application that gamifies the job search and career development process.</p>
                                    <div className="row techlink">
                                       <Link to="/jandd"><button className="button">Tech Spec Page</button></Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="cell small-4">
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
                                    <Link to="/postup"><button className="button">Tech Spec Page</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="cell small-4">
                            <div className="card">
                                <div className="card-divider">
                                    <h3>JobRocket</h3>
                                </div>
                                <img src={JobRocket} className="portfolio" alt="Screenshot of app, PostUpCards"></img>
                                <div className="card-section">
                                    <p></p>
                                    <div className="row techlink">
                                    <Link to="/jobrocket"><button className="button">Tech Spec Page</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="cell small-4">
                            <div className="card">
                                <div className="card-divider">
                                    <h3>Weather Dashboard</h3>
                                </div>
                                <img src={WeatherDash} className="portfolio" alt="Screenshot of app, PostUpCards"></img>
                                <div className="card-section">
                                    <p>An assignment from the UofT SCS Coding Bootcamp.</p>
                                    <div className="row">
                                    <Link to="/dashboard">Tech Spec Page</Link>
                                        <a href='https://twistedpixels.github.io/WeatherDashboard/' target="_blank" rel="noopener noreferrer"><button className="button">GitHub Page</button></a>
                                        <a href='https://github.com/TwistedPixels/WeatherDashboard.git' target="_blank" rel="noopener noreferrer"><button className="button">GitHub Repository</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="cell small-4">
                            <div className="card">
                                <div className="card-divider">
                                    <h3>Work Day Planner</h3>
                                </div>
                                <img src={Sched} className="portfolio" alt="Screenshot of app, PostUpCards"></img>
                                <div className="card-section">
                                    <p>An assignment from the UofT SCS Coding Bootcamp.</p>
                                    <div className="row">
                                    <Link to="/planner">Tech Spec Page</Link>
                                        <a href='https://twistedpixels.github.io/DayPlanDreamer/' target="_blank" rel="noopener noreferrer"><button className="button">GitHub Page</button></a>
                                        <a href='https://github.com/TwistedPixels/DayPlanDreamer.git' target="_blank" rel="noopener noreferrer"><button className="button">GitHub Repository</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="cell small-4">
                            <div className="card">
                                <div className="card-divider">
                                    <h3>Fries With That?</h3>
                                </div>
                                <img src={Burger} className="portfolio" alt="Screenshot of app, PostUpCards"></img>
                                <div className="card-section">
                                    <p>Fries With That? allows the user to log multiple burger orders and change their state once they've been eaten.</p>
                                     <div className="row techlink">
                                    <Link to="/burger"><button className="button">Tech Spec Page</button></Link>
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