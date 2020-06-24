import React from "react";
import "../styles/Skills.css";
// import reactLogo from "../img/logo192.png";
// import nodeLogo from "../img/nodejs.png";
// import htmlLogo from "../img/HTML5_Badge_128.png";
// import mongoLogo from "../img/MongoDB_Logo_FullColorBlack_RGB.png";
// import jsLogo from "../img/240px-JavaScript-logo.png";

let Skills = () => {

    return (
        <div className="grid skills sectionbg">
                        <div className="grid grid-padding-x">
            <div className="cell ">
                <h2 className="sectionhead" id="skills">Skills</h2>
                <hr></hr>
            </div>

            <div className="grid-x grid-padding-x align-center">

                <div className="cell small-12 medium-4 skillcell">
                    <div className="skillhead">
                        <i className="icons far fa-object-group"></i>
                        <h3 className="skillhead">Graphic Design</h3>
                    </div>
                    <hr></hr>
                    <div className="skillbody">
                        <p>I am proficient in Adobe Creative Suite, including PhotoShop, Illustrator, and InDesign. I am also experienced in Web Design, Logo Design, and Printing Methods.</p>
                    </div>
                </div>

                <div className="cell small-12 medium-4 skillcell">
                    <div className="skillhead">
                        <i class="icons fas fa-laptop-code"></i>
                        <h3 className="skillhead">Web Development</h3>
                    </div>
                    <hr></hr>
                    <div className="skillbody">
                        <p>I am proficient at Full Stack Web Development, including MERN deployment, database management with MongoDB and MySQL, as well as GIT and Node.js. I'm also experienced coding with HTML5, CSS3, Javascript, jQuery, and JSX.</p>
                    </div>
                </div>

            </div>
            {/* <div className="grid-x align-center">
                <div className="skill cell small-5 medium-4 large-2"><img className="skillLogo" src= {reactLogo} alt="react logo"></img></div>
                <div className="skill cell small-5 medium-4 large-2"><img className="skillLogo" src= {nodeLogo} alt="node.js logo"></img></div>
                <div className="skill cell small-5 medium-4 large-2"><img className="skillLogo" src= {htmlLogo} alt="html5 logo"></img></div>
                <div className="skill cell small-5 medium-4 large-2"><img className="skillLogo" src= {mongoLogo} alt="mongoDB logo"></img></div>
                <div className="skill cell small-5 medium-4 large-2"><img className="skillLogo" src= {jsLogo} alt="javascript logo"></img></div>
            </div> */}
        </div>
        </div>
    )
}

export default Skills;