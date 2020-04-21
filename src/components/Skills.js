import React from "react";
import "../styles/Skills.css";
import reactLogo from "../img/logo192.png";
import nodeLogo from "../img/nodejs.png";
import htmlLogo from "../img/HTML5_Badge_128.png";
import mongoLogo from "../img/MongoDB_Logo_FullColorBlack_RGB.png";
import jsLogo from "../img/240px-JavaScript-logo.png";

let Skills = () => {

    return (
        <div className="container skills">
            <div className="row">
                <h2 id="skills">Skills</h2>
                <hr></hr>
            </div>
            <div className="row skillview">
                <div className="col"><img className="skillLogo" src= {reactLogo} alt="react logo"></img></div>
                <div className="col"><img className="skillLogo" src= {nodeLogo} alt="node.js logo"></img></div>
                <div className="col"><img className="skillLogo" src= {htmlLogo} alt="html5 logo"></img></div>
                <div className="col"><img className="skillLogo" src= {mongoLogo} alt="mongoDB logo"></img></div>
                <div className="col"><img className="skillLogo" src= {jsLogo} alt="javascript logo"></img></div>
            </div>
        </div>
    )
}

export default Skills;