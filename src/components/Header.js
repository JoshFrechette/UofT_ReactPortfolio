import React, { Component } from 'react';
import "../styles/Header.css";
// import "../styles/styles.scss";

export default class Header extends Component {
    render() {
      return (
        <div className="top-bar">
            <img src="TwistedPixels.png" id="brand-logo" href="#" alt="JFD Logo"></img>
            <ul>
                    <li  className= "justify-content-end d-flex"><a href="#about-me">About Me</a></li>
                    <li  className= "justify-content-end d-flex"><a href="#my-portfolio">Portfolio</a></li>
                    <li  className= "justify-content-end d-flex"><a href="#contact-me">Contact</a></li>
                    <li  className= "justify-content-end d-flex"><a href="https://github.com/TwistedPixels" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></li>
                    <li  className= "justify-content-end d-flex"><a href="http://ca.linkedin.com/in/joshuafrechettedesign" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a></li>
                </ul> 
        </div>
      )
    }
  }