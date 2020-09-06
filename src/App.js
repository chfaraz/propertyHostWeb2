import React from "react";
import "./App.css";

import Buy from "./Components/Buy";
import Rent from "./Components/Rent";
import Sell from "./Containers/Sell";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import AgentList from "./Components/AgentList";
import MyListing from "./Containers/MyListing";
import AgentHomePage from "./Components/AgentHomePage";
import LiveSearch from "./Components/LiveSearch";
import Login from "./Components/Login";
import AgentSignUp from "./Components/AgentSignUp";
import ThreeDTourRequest from "./Components/ThreeDTourRequest";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/buy" exact component={Buy} />
        <Route path="/sell" component={Sell} />
        <Route path="/rent" component={Rent} />
        <Route path="/agentList" component={AgentList} />
        <Route path="/myListing" component={MyListing} />
        <Route path="/agentHomePage" component={AgentHomePage} />
        <Route path="/login" component={Login} />
        <Route path="/agentSignUp" component={AgentSignUp} />
        <Route path="/threeDTourRequest" component={ThreeDTourRequest} />
        <Route path="/liveSearch" component={LiveSearch} />
      </Switch>
    </div>
  );
}

export default App;
