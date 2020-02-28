import React, { Component } from "react";
import "../styles/PortfolioInfo.css";
import PostUp from "../img/PopUpCards_Project2.png";
import JobRocket from "../img/JobRocket_Project1.png";
import WeatherDash from "../img/WeatherDashboard.png";
import Sched from "../img/WorkDayScheduler.png";
import Burger from "../img/fries_with_that.png";
import CompTemp from "../img/CompanyTemplateEngine.png";

export default class PortfolioInfo extends Component {
    render() {
        return (
            <div className="portfolio">
                <div>
                    <h2 id="my-portfolio">My Work</h2>
                    <hr></hr>
                </div>

                <div class="card">

                    <div class="card-divider">
                        PostUp Cards
                </div>
                    <img src={PostUp} class="portfolio" alt="Screenshot of app, PostUpCards"></img>
                    <div class="card-section">
                        <h4>Post Up Cards</h4>
                        <p>PostUp Cards is the second team project for the UofT SCS Coding Bootcamp.</p>
                        <button onclick="window.location.href = 'https://https://postup-cards.herokuapp.com/';" class="button">Heroku Deployment</button>
                        <button onclick="window.location.href = 'https://github.com/TwistedPixels/PostUp-Cards.git';" class="button"><i class="fab fa-github fa-fw"></i>GitHub Repository</button>
                    </div>
                </div>

                <div class="row my-work">
                    <div class="col-8 offset-2">

                        <div class="row">
                            <h3>PostUp-Cards</h3>
                            <div class="portfolio-details" id="project-five"></div>
                        </div>
                        <hr></hr>
                        <div class="row">
                            <div class="col">
                                 <img src={PostUp} class="portfolio" alt="Screenshot of app, PostUpCards"></img>
                            </div>
                            <div class="col">
                                <hr></hr>
                                <p>PostUp Cards is the second team project for the UofT SCS Coding Bootcamp.</p>
                                <button onclick="window.location.href = 'https://https://postup-cards.herokuapp.com/';" class="btn">Heroku Deployment</button>
                                <button onclick="window.location.href = 'https://github.com/TwistedPixels/PostUp-Cards.git';" class="btn"><i class="fab fa-github fa-fw"></i>GitHub Repository</button>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="row my-work">
                    <div class="col-8 offset-2">

                        <div class="row">
                            <h3>JobRocket</h3>
                            <div class="portfolio-details" id="project-four"></div>
                        </div>
                        <hr></hr>
                        <div class="row">
                            <div class="col">
                                <img src= {JobRocket} class="portfolio" alt="Screenshot of app, JobRocket"></img>
                            </div>
                            <div class="col">
                                <hr></hr>
                                <p>JobRocket is Project 1 from UofT SCS Coding Bootcamp and is the first group project that we completed in class.</p>
                                <button onclick="window.location.href = 'https://michaelhrivnak.github.io/JobRocket/';" class="btn"><span><i class="fab fa-github fa-fw"></i></span>GitHub Page</button>
                                <button onclick="window.location.href = 'https://github.com/michaelhrivnak/JobRocket.git';" class="btn"><i class="fab fa-github fa-fw"></i>GitHub Repository</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row my-work">
                    <div class="col-8 offset-2">

                        <div class="row">
                            <h3>Weather Dashboard</h3>
                        </div>
                        <div class="portfolio-details" id="project-three"></div>
                        <div class="row">
                            <div class="col">
                                 <img src= {WeatherDash} class="portfolio" alt="Screenshot of app, Weather Dashboard"></img>
                            </div>
                            <div class="col">
                                <hr></hr>

                                <p>An assignment from the UofT SCS Coding Bootcamp.</p>
                                <button onclick="window.location.href = 'https://twistedpixels.github.io/WeatherDashboard/';" class="btn"><span><i class="fab fa-github fa-fw"></i></span>GitHub Page</button>
                                <button onclick="window.location.href = 'https://github.com/TwistedPixels/WeatherDashboard.git';" class="btn"><span><i class="fab fa-github fa-fw"></i></span>GitHub Repository</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row my-work">
                    <div class="col-8 offset-2">

                        <div class="row">
                            <h3>Work Day Planner</h3>
                        </div>
                        <div class="portfolio-details" id="project-two"></div>
                        <div class="row">
                            <div class="col">
                                <img src={Sched} class="portfolio" alt="Screenshot of app, Work Day Planner"></img>
                            </div>
                            <div class="col">
                                <hr></hr>
                                <p>Renamed "DayPlanDreamer", this is an assignment from the UofT SCS Coding Bootcamp.</p>
                                <button onclick="window.location.href = 'https://twistedpixels.github.io/DayPlanDreamer/';" class="btn"><span><i class="fab fa-github fa-fw"></i></span>GitHub Page</button>
                                <button onclick="window.location.href = 'https://github.com/TwistedPixels/DayPlanDreamer.git';" class="btn"><span><i class="fab fa-github fa-fw"></i></span>GitHub Repository</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row my-work">
                    <div class="col-8 offset-2">

                        <div class="row">
                            <h3>Fries With That?</h3>
                        </div>
                        <div class="portfolio-details" id="project-one"></div>
                        <div class="row">
                            <div class="col">
                                <img src={Burger} class="portfolio" alt="Screenshot of app, Fries With That?"></img>
                            </div>
                            <div class="col">
                                <hr></hr>
                                <p>Fries With That? is an assignment from the UofT SCS Coding Bootcamp. It is a culmination off everything that we have learnt so far, including building ORMs and CRUDs, using mySQL, handlebars, and creating models and controller files. </p>
                                <button onclick="window.location.href = 'https://joshfdesign-fries-with-that.herokuapp.com/';" class="btn">Heroku Deployment</button>
                                <button onclick="window.location.href = 'https://github.com/TwistedPixels/Fries_With_That.git';" class="btn"><span><i class="fab fa-github fa-fw"></i></span>GitHub Repository</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="row my-work">
                    <div class="col-8 offset-2">

                        <div class="row">
                            <h3>Company Template Engine</h3>
                        </div>
                        <div class="portfolio-details" id="project-one"></div>
                        <div class="row">
                            <div class="col">
                                <img src={CompTemp} class="portfolio" alt="Screenshot of app, Company Template Engine"></img>
                            </div>
                            <div class="col">
                                <hr></hr>
                                <p>The purpose of this assignment was to create Node CLI that allowed the user to input company team memeber information and create an HTML output displaying the information</p>
                                <button onclick="window.location.href = 'https://twistedpixels.github.io/Company_Template_Engine/';" class="btn"><span><i class="fab fa-github fa-fw"></i></span>GitHub Page</button>
                                <button onclick="window.location.href = 'https://github.com/TwistedPixels/Company_Template_Engine.git';" class="btn"><span><i class="fab fa-github fa-fw"></i></span>GitHub Repository</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
