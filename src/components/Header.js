import React, { Component } from 'react';
import "../styles/Header.css";
import "../styles/styles.scss";

export default class Header extends Component {
  render() {
    return (

      <div data-sticky-container>
        <div className="title-bar" data-sticky data-options="marginTop:0;" data-top-anchor="1" data-btm-anchor="content:bottom" dynaminHeight="false">
          <div className="title-bar-left">
            <img src="TwistedPixels.png" id="brand-logo" href="#" alt="JFD Logo"></img>
          </div>
          <div className="title-bar-right">
            <ul>
              <li className="justify-content-end d-flex"><a href="/">Home</a></li>
              <li className="justify-content-end d-flex"><a href="#about-me">About Me</a></li>
              <li className="justify-content-end d-flex"><a href="#my-portfolio">Portfolio</a></li>
              <li className="justify-content-end d-flex"><a href="#contact-me">Contact</a></li>
              <li className="justify-content-end d-flex"><a href="https://github.com/TwistedPixels" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
              <li className="justify-content-end d-flex"><a href="http://ca.linkedin.com/in/joshuafrechettedesign" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

    )
  }
}