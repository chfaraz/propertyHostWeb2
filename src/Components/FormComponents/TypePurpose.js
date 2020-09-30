import React from "react";
import Input from "./Input";

const typePurpose = (props) => {
  return (
    <div className="basic-form">
      <form>
        <label>Purpose</label>
        <select name="purpose" onChange={props.changed}>
          <option value="sell">For Sale</option>
          <option value="rent">For Rent</option>
        </select>
        <label>Property Type</label>
        <select name="type" value={props.type} onChange={props.changed}>
          <option>Home</option>
          <option>Plot</option>
          <option>Commercial</option>
        </select>
        <label>Property Detail</label>
        {props.type === "Home" ? (
          <select name="propertyDetail" onChange={props.changed}>
            <option>House</option>
            <option>Flat</option>
          </select>
        ) : null}
        {props.type === "Plot" ? (
          <select name="propertyDetail" onChange={props.changed}>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Agricultral</option>
          </select>
        ) : null}
        {props.type === "Commercial" ? (
          <select name="propertyDetail" onChange={props.changed}>
            <option>Office</option>
            <option>Shop</option>
            <option>Ware House</option>
          </select>
        ) : null}
        {props.type !== "Plot" ? (
          <article>
            <Input
              inputtype="input"
              type="number"
              min="1900"
              max="2099"
              step="1"
              name="buildYear"
              label="Build Year"
              onChange={props.changed}
              className={
                props.error.buildYear
                  ? "invalid input-element"
                  : "input-element"
              }
            />
          </article>
        ) : null}
        {props.error.buildYear ? <p>Enter Valid Year Like. 2001</p> : null}
      </form>
      <div className="next-btn">
        {props.type !== "Home" ? (
          <button onClick={props.click1}>Next</button>
        ) : null}
        {props.type === "Home" ? (
          <button onClick={props.click}>Next</button>
        ) : null}
      </div>
    </div>
  );
};
export default typePurpose;
