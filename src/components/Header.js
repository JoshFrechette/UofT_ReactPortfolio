import React from 'react';
import "../styles/Header.css";
import "../styles/styles.scss";

let Header = () => {
    return (

      <div data-sticky-container>
        <div className="title-bar" data-sticky data-options="marginTop:0;" data-top-anchor="1" data-btm-anchor="content:bottom" dynaminHeight="false">
          <div className="title-bar-left">
            <img src="TwistedPixels.png" id="brand-logo" href="#" alt="JFD Logo"></img>
          </div>
          <div className="title-bar-right">
            <ul>
              <li className="justify-content-end d-flex navlinks"><a href="/">Home</a></li>
              <li className="justify-content-end d-flex navlinks"><a href="/#about-me">About Me</a></li>
              <li className="justify-content-end d-flex navlinks"><a href="/#my-portfolio">Portfolio</a></li>
              <li className="justify-content-end d-flex navlinks"><a href="/#contact-me">Contact</a></li>
              <li className="justify-content-end d-flex navlinks" ><a href="https://github.com/JoshFrechette" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
              <li className="justify-content-end d-flex navlinks"><a href="http://ca.linkedin.com/in/joshuafrechette" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

    )
}

export default Header;