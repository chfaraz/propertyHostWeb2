import { Link } from "react-router-dom";
import React from "react";

const rent = () => {
  return (
    <div className="rent sell-page basic-form">
      <h1>Find property for rent</h1>
      <div className="next-btn">
        <Link to="/buy">
          <button>Find</button>
        </Link>
      </div>
      <h1>Post new property for rent</h1>
      <div className="next-btn">
        <Link to="/sell">
          <button>Post</button>
        </Link>
      </div>
    </div>
  );
};
export default rent;
