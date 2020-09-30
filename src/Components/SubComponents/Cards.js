import React from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
import Img from "../../Assets/634.jpg";
import Img1 from "../../Assets/692.jpg";
import Img2 from "../../Assets/527.jpg";

const Cards = () => {
  return (
    <div className="cards-wraper">
      <Link to="/ThreeDTourRequest">
        <Card
          img={Img}
          title="Advertise"
          intro="Make your property promonent and sell it fast."
        />
      </Link>
      <Link to="/agentSignUp">
        <Card
          img={Img1}
          title="SignUp as Agent"
          intro="Be a agent sell and rent property and earn money."
        />
      </Link>
      <Link to="/ThreeDTourRequest">
        <Card
          img={Img2}
          title="3D home tour"
          intro="Contact us and request for creating 3D tour of your home."
        />
      </Link>
    </div>
  );
};
export default Cards;
