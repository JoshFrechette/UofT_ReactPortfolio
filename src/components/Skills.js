import React from "react";
import "../styles/Skills.css";
import reactLogo from "../img/logo192.png";
import nodeLogo from "../img/nodejs.png";
import htmlLogo from "../img/HTML5_Badge_128.png";
import mongoLogo from "../img/MongoDB_Logo_FullColorBlack_RGB.png";
import jsLogo from "../img/240px-JavaScript-logo.png";

let Skills = () => {

    return (
        <div className="grid skills sectionbg">
                        <div className="grid grid-padding-x">
            <div className="cell ">
                <h2 className="sectionhead" id="skills">Skills</h2>
                <hr></hr>
            </div>
            <div className="grid-x align-center">
                <div className="skill cell small-5 medium-4 large-2"><img className="skillLogo" src= {reactLogo} alt="react logo"></img></div>
                <div className="skill cell small-5 medium-4 large-2"><img className="skillLogo" src= {nodeLogo} alt="node.js logo"></img></div>
                <div className="skill cell small-5 medium-4 large-2"><img className="skillLogo" src= {htmlLogo} alt="html5 logo"></img></div>
                <div className="skill cell small-5 medium-4 large-2"><img className="skillLogo" src= {mongoLogo} alt="mongoDB logo"></img></div>
                <div className="skill cell small-5 medium-4 large-2"><img className="skillLogo" src= {jsLogo} alt="javascript logo"></img></div>
            </div>
        </div>
        </div>
    )
}

export default Skills;