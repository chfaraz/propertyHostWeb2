import React from "react";
import Cards from "./SubComponents/Cards";

const home = () => {
  return (
    <div>
      <div className="img-wraper">
        <img src={require("../Assets/main-img.jpg")} className="main-img" />
        <div className="home-text">
          <p>Find Your Dream Home</p>
          <p>With Property Host</p>
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Enter Address or city"
        />
        <button className="search-btn-main"></button>
        <img src={require("../Assets/man.png")} className="man-img" />
      </div>
      <Cards />
      <footer>Made by Faraz</footer>
    </div>
  );
};
export default home;
