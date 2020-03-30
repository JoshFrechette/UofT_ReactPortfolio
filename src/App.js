import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./views/Main";
import Dragons from "./techPages/Jobs&Dragons";
// import PostUp from "./components/techPages/PostUp";
// import JobRocket from "./components/techPages/JobRocket";
// import DashBoard from "./components/techPages/WeatherDash";
// import Planner from "./components/techPages/Planner";
// import Burger from "./components/techPages/Burger";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

let App = () => {

  return (
    <Router>
      <Wrapper>
        <div className="App">

          <Header />
          <div className='row'>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/jandd" component={Dragons} />
              {/* <Route path="/postup" component={PostUp} />
          <Route path="/jobrocket" component={JobRocket} />
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/planner" component={Planner} />
          <Route path="/burger" component={Burger} /> */}
            </Switch>
          </div>
          <Footer />

        </div>
      </Wrapper>
    </Router>
  );

}

export default App;