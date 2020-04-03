import React from "react";
import "../styles/spec.css";
import Preview from "../img/burger.gif";

let Burger = () => {
    return (
        <div className="container specs">
            <div className="row project">
                <div className="col">
                    <div>
                        <h1>Fries With That?</h1>
                        <p></p>
                        <a href='https://joshfdesign-fries-with-that.herokuapp.com/' target="_blank" rel="noopener noreferrer"><button className="button">Heroku Deployment</button></a>
                        <a href='https://github.com/JoshFrechette/Fries_With_That.git' target="_blank" rel="noopener noreferrer"><button className="button">GitHub Repository</button></a>
                    </div>
                    <div className="img">
                        <img src={Preview} alt="gif of the app" />
                    </div>

                    <div>
                        <h3>Technical Sheet</h3>
                        <p>Solo project, with an emphasis on ORMs, CRUDs, mySQL and Handlebars. The application allows the usser to enter any choice of burger and change it's status when it has been eaten.</p>
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
                            <li>Handlebars</li>
                            <li>Javascript</li>
                            <li>jQuery</li>
                            <li>Sequelize, MySQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Burger;