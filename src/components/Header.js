import React from 'react';
import "../styles/Header.css";
import "../styles/styles.scss";
// import ResponsiveNavigation from  "./RespNav.js"; this is not working...

let Header = () => {
  return (

    <div className="cell shrink header medium-cell-block-container">
      {/* <div className="grid-x grid-padding-x"> */}

        {/* <div className="title-bar align-right" dataResponsiveToggle="example-menu" dataHideFor="medium">
          <button className="menu-icon" type="button" dataToggle="example-menu"></button>
          <div className="title-bar-title">Menu</div>
        </div> */}

        <div className="top-bar" >

        <div className="top-bar-left">
          <img src="TwistedPixels.png" id="brand-logo" href="#" alt="JFD Logo"></img>
        </div>

        {/* <div className="top-bar-middle align-middle">
          <h3 className="companyname">Josh Frechette Design</h3>
        </div> */}

          <div className="top-bar-right align-right" id="example-menu">
            {/* <ul className="menu" dataDropdownMenu> */}
              <ul className="medium-horizontal menu align-right">
              <li className="navlinks"><a href="/">Home</a></li>
              <li className="navlinks"><a href="/#about-me">About Me</a></li>
              <li className="navlinks"><a href="/#my-portfolio">Portfolio</a></li>
              <li className="navlinks"><a href="/#contact-me">Contact</a></li>
              <li className="navlinks" ><a href="https://github.com/JoshFrechette" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
              <li className="navlinks"><a href="http://ca.linkedin.com/in/joshuafrechette" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>

        </div>
{/* 
      </div> */}
    </div>
  )
}

export default Header;