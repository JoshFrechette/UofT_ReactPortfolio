import React, { Component } from 'react';
import BioInfo from "../components/BioInfo";
import PortfolioInfo from "../components/PortfolioInfo";
import ContactInfo from "../components/ContactInfo";
import Greeting from "../components/Greeting";

import "../styles/Main.css";

export default class Main extends Component {
    render() {
      return (
        <div className="main">
            <Greeting />
            <BioInfo />
            <PortfolioInfo />
            <ContactInfo />
        </div>
      )
    }
  }