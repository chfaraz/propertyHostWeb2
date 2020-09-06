import React from "react";
import Input from "./Input";

const roomsDetail = (props) => {
  return (
    <div className="basic-form">
      <form>
        <Input
          inputtype="input"
          type="number"
          name="bedrooms"
          label="Bed Rooms"
        />
        <Input
          inputtype="input"
          type="number"
          name="bathrooms"
          label="Bath Rooms"
        />
        <Input
          inputtype="input"
          type="number"
          name="parkingspace"
          label="Parking Space"
        />
        <Input inputtype="input" type="number" name="floors" label="Floors" />
        <Input inputtype="input" type="text" name="flooring" label="Flooring" />
        <Input
          inputtype="checkBox"
          type="checkbox"
          name="basement"
          checkboxlabel="Basement"
        />
      </form>

      <div className="next-btn">
        <button onClick={props.click}>Next</button>
      </div>
    </div>
  );
};
export default roomsDetail;
