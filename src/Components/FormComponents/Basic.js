import React from "react";
import Input from "./Input";

const basic = (props) => {
  return (
    <div className="basic-form">
      <form>
        <Input inputtype="input" type="text" name="title" label="Title" />
        <Input
          inputtype="input"
          type="number"
          name="price"
          label="Price in Rs:"
        />
        <div className="flex-size">
          <Input inputtype="input" type="number" name="size" label="Size" />
          <select id="size-type">
            <option>Marla</option>
            <option>Canal</option>
            <option>Acer</option>
          </select>
        </div>
        <Input
          inputtype="input"
          type="number"
          name="phonenumber"
          label="Phone Number"
        />
        <Input inputtype="input" type="text" name="city" label="City" />
        <Input inputtype="input" type="text" name="address" label="Address" />
        <Input
          inputtype="textArea"
          name="description"
          label="Description"
          placeholder="Write All the Details That you wana tell buyer here..."
        />
      </form>
      <div className="next-btn">
        <button onClick={props.click}>Next</button>
      </div>
    </div>
  );
};
export default basic;
