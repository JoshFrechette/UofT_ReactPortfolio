import React, { Component } from "react";
import BioInfo from "./components/BioInfo";
import PortfolioInfo from "./components/PortfolioInfo";
import ContactInfo from "./components/ContactInfo";
// import "../styles/Main.css";

export default class Main extends Component {
  render() {
    return (
      <>
        <BioInfo />
        <PortfolioInfo />
        <ContactInfo />
      </>
    );
  }
}