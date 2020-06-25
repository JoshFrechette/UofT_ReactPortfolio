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
                    {/* <div className="grid-x grid-margin-x skillbody">
                            <div className="cell small-3 medium-6"><p className="askill">PhotoShop</p></div>
                            <div className="cell small-3 medium-6"><p className="askill">Illustrator</p></div>
                    </div> */}
                    <div className="grid-x grid-margin-x skillbody">
                        <p className="askill">PhotoShop</p>
                        <p className="askill">Illustrator</p>
                        <p className="askill">InDesign</p>
                        <p className="askill">Web Design</p>
                        <p className="askill">UI/UX Design</p>
                        <p className="askill">Logo Design</p>
                        <p className="askill">Branding</p>
                        <p className="askill">Typography</p>
                        <p className="askill">Print Design</p>
                        <p className="askill">Problem Solving</p>
                    </div>
                </div>

                <div className="cell small-12 medium-4 skillcell">
                    <div className="skillhead">
                        <i class="icons fas fa-laptop-code"></i>
                        <h3 className="skillhead">Web Development</h3>
                    </div>
                    <hr></hr>
                    <div className="grid-x grid-margin-x skillbody">
                        <p className="askill">HTML5</p>
                        <p className="askill">CSS3</p>
                        <p className="askill">Bootstrap</p>
                        <p className="askill">Foundation</p>
                        <p className="askill">Material-UI</p>
                        <p className="askill">Javascript</p>
                        <p className="askill">jQuery</p>
                        <p className="askill">SQL</p>
                        <p className="askill">MySQL</p>
                        <p className="askill">MongoDB</p>
                        <p className="askill">Node.js</p>
                        <p className="askill">Typography</p>
                        <p className="askill">React</p>
                        <p className="askill">ExpressJS</p>
                        <p className="askill">GitHub</p>
                        <p className="askill">Heroku</p>
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