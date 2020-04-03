import React from 'react';
import BioInfo from "../components/BioInfo";
import PortfolioInfo from "../components/PortfolioInfo";
import ContactInfo from "../components/ContactInfo";
import Greeting from "../components/Greeting";
import Skills from "../components/Skills";

import "../styles/Main.css";

let Main = () => {

  return (
    <div className="main">
      <Greeting />
      <BioInfo />
      <Skills />
      <PortfolioInfo />
      <ContactInfo />
    </div>
  )
}

export default Main;