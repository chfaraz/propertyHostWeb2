import React from "react";
import Input from "./Input";

const roomsDetail = (props) => {
  return (
    <div className="basic-form">
      <form>
        <Input
          inputtype="input"
          type="number"
          name="bedRooms"
          label="Bed Rooms"
          onChange={props.changed}
          className={
            props.error.bedRooms ? "invalid input-element" : "input-element"
          }
        />
        <Input
          inputtype="input"
          type="number"
          name="bathRooms"
          label="Bath Rooms"
          onChange={props.changed}
          className={
            props.error.bathRooms ? "invalid input-element" : "input-element"
          }
        />
        <Input
          inputtype="input"
          type="number"
          name="parkingSpace"
          label="Parking Space"
          onChange={props.changed}
          className={
            props.error.parkingSpace ? "invalid input-element" : "input-element"
          }
        />
        <Input
          inputtype="input"
          type="number"
          name="floors"
          label="Floors"
          onChange={props.changed}
          className={
            props.error.floors ? "invalid input-element" : "input-element"
          }
        />
        <Input
          inputtype="input"
          type="text"
          name="flooring"
          label="Flooring"
          placeholder="e.g. Marbel, Tyle, Wood"
          onChange={props.changed}
          className={
            props.error.flooring ? "invalid input-element" : "input-element"
          }
        />
        <Input
          inputtype="checkBox"
          type="checkbox"
          name="basement"
          checkboxlabel="Basement"
          onChange={props.changed}
        />
      </form>

      <div className="next-btn">
        <button onClick={props.click}>Next</button>
      </div>
    </div>
  );
};
export default roomsDetail;
