import React from 'react';
import "../styles/Header.css";
import "../styles/styles.scss";
// import ResponsiveNavigation from  "./RespNav.js"; this is not working...

let Header = () => {
  return (

    <div className="cell shrink header medium-cell-block-container">

      {/* <div className="grid-x grid-padding-x"> //Needs to be retooled to toggle nav menu to hamburger*/}
      {/* <div className="title-bar align-right" dataResponsiveToggle="example-menu" dataHideFor="medium">
          <button className="menu-icon" type="button" dataToggle="example-menu"></button>
          <div className="title-bar-title">Menu</div>
        </div> */}

      <div className="top-bar" >

        <div className="top-bar-left">
          <div className="grid-x branding">
            <div className="cell small-1"></div>
            <div className="cell small-2"><img src="TwistedPixels.png" id="brand-logo" href="#" alt="JFD Logo"></img></div>
            <div className="cell small-4 auto companyname"><p>Josh Frechette <span className="emphasis">Design</span></p></div>
          </div>
        </div>


        <div className="top-bar-right align-right" id="example-menu">
          {/* <ul className="menu" dataDropdownMenu> */}
          <ul className="medium-horizontal menu align-center">
            <li className="navlinks"><a href="/">Home</a></li>
            <li className="navlinks"><a href="/#about-me">About Me</a></li>
            <li className="navlinks"><a href="/#my-portfolio">Portfolio</a></li>
            <li className="navlinks"><a href="/#contact-me">Contact</a></li>
          </ul>
          <ul className="medium-horizontal menu align-right">
          {/* <ul className="medium-horizontal menu align-right"> */}
            <li className="navlinks" ><a href="https://github.com/JoshFrechette" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
            <li className="navlinks"><a href="https://www.behance.net/JFDesignCanada" target="_blank" rel="noopener noreferrer"><i class="fab fa-behance-square"></i></a></li>
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