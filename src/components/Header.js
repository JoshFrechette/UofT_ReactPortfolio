import React, { Component } from 'react';
// import "../styles/Header.css";

export default class Header extends Component {
    render() {
      return (
        <div className="header">
          <h1>Joshua Fr&eacute;chette</h1>
            <a href="index.html">About</a>
            <a href="portfolio.html">Portfolio</a>
            <a href="contact.html">Contact</a>
        </div>
      )
    }
  }