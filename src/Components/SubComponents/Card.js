import React from "react";

const card = (props) => {
  return (
    <div className="card-wraper">
      <img src={props.img} className="card-img" />
      <h2>{props.title}</h2>
      <p>{props.intro}</p>
    </div>
  );
};
export default card;
