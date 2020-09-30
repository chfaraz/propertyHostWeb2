import React from "react";
import Input from "./Input";

const meetingDetail = (props) => {
  return (
    <div className="basic-form">
      <h3>Set meeting Time</h3>
      <form>
        <h4>Available Days</h4>
        <br />
        <label>From</label>
        <br />
        <select name="dayFrom" onChange={props.changed}>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thrusday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>
        </select>
        <br />
        <label>Too</label>
        <br />
        <select name="dayToo" onChange={props.changed}>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thrusday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>
        </select>
        <br />
        <h4>Available Time</h4>
        <br />
        <Input
          inputtype="input"
          type="time"
          label="From"
          name="timeFrom"
          onChange={props.changed}
          className={
            props.error.timeFrom ? "invalid input-element" : "input-element"
          }
        />
        <Input
          inputtype="input"
          type="time"
          label="Too"
          name="timeToo"
          onChange={props.changed}
          className={
            props.error.timeToo ? "invalid input-element" : "input-element"
          }
        />
      </form>
      <div className="next-btn">
        <button onClick={props.click}>Next</button>
      </div>
    </div>
  );
};
export default meetingDetail;
