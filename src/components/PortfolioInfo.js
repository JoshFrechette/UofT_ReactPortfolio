import React, { Component } from "react";
import "../styles/PortfolioInfo.css";
import "../styles/styles.scss";
import Dungeons from "../img/Jobs&Dragons.png";
import PostUp from "../img/PopUpCards_Project2.png";
import JobRocket from "../img/JobRocket_Project1.png";
import WeatherDash from "../img/WeatherDashboard.png";
import Sched from "../img/WorkDayScheduler.png";
import Burger from "../img/fries_with_that.png";


export default class PortfolioInfo extends Component {
    render() {
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
                                    <h3 className="card-title">Jobs&#38;Dragons</h3>
                                </div>
                                <img src={Dungeons} className="portfolio" alt="Screenshot of app, PostUpCards"></img>
                                <div className="card-section">
                                    <p>Jobs&#38;Dragons is the final team project for the UofT SCS Coding Bootcamp.</p>
                                    <div className="row">
                                        <a href='https://jobs-and-dragons.herokuapp.com/' target="_blank" rel="noopener noreferrer"><button className="button">Heroku Deployment</button></a>
                                        <a href='https://github.com/Winyumi/jobs-and-dragons' target="_blank" rel="noopener noreferrer"><button className="button">GitHub Repository</button></a>
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
                                    <p>PostUp Cards is the second team project for the UofT SCS Coding Bootcamp.</p>
                                    <div className="row">
                                        <a href='https://postup-cards.herokuapp.com/' target="_blank" rel="noopener noreferrer"><button className="button">Heroku Deployment</button></a>
                                        <a href='https://github.com/TwistedPixels/PostUp-Cards.git' target="_blank" rel="noopener noreferrer"><button className="button">GitHub Repository</button></a>
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
                                    <p>JobRocket is the first team project for the UofT SCS Coding Bootcamp.</p>
                                    <div className="row">
                                        <a href='https://michaelhrivnak.github.io/JobRocket/' target="_blank" rel="noopener noreferrer"><button className="button">GitHub Page</button></a>
                                        <a href='https://github.com/michaelhrivnak/JobRocket.git' target="_blank" rel="noopener noreferrer"><button className="button">GitHub Repository</button></a>
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
                                    <p>An assignment from the UofT SCS Coding Bootcamp, with an emphasis on ORMs, CRUDs, mySQL and Handlebars.</p>
                                    <div className="row">
                                        <a href='https://joshfdesign-fries-with-that.herokuapp.com/' target="_blank" rel="noopener noreferrer"><button className="button">Heroku Deployment</button></a>
                                        <a href='https://github.com/TwistedPixels/Fries_With_That.git' target="_blank" rel="noopener noreferrer"><button className="button">GitHub Repository</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}