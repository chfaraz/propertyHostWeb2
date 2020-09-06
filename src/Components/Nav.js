import React from "react";
import { NavLink } from "react-router-dom";

const nav = () => {
  return (
    <div className="nav-bar">
      <h1>
        <NavLink to="/">LOGO</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/buy" activeClassName="active" className="nonactive">
            Buy
          </NavLink>
        </li>
        <li>
          <NavLink to="/rent" activeClassName="active" className="nonactive">
            Rent
          </NavLink>
        </li>
        <li>
          <NavLink to="/sell" activeClassName="active" className="nonactive">
            Sell
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/agentList"
            activeClassName="active"
            className="nonactive"
          >
            Agents
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/agentHomePage"
            activeClassName="active"
            className="nonactive"
          >
            My Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/myListing"
            activeClassName="active"
            className="nonactive"
          >
            My Listings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/liveSearch"
            activeClassName="active"
            className="nonactive"
          >
            Live Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active" className="nonactive">
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default nav;
