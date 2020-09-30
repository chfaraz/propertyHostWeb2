import React from "react";
import Input from "./Input";

const basic = (props) => {
  return (
    <div className="basic-form">
      <form>
        <Input
          inputtype="input"
          type="text"
          name="title"
          value={props.values.title}
          label="Title"
          onChange={props.changed}
          className={
            props.error.title ? "invalid input-element" : "input-element"
          }
        />
        <Input
          inputtype="input"
          type="number"
          name="price"
          label="Price in Rs:"
          onChange={props.changed}
          className={
            props.error.price ? "invalid input-element" : "input-element"
          }
        />
        <div className="flex-size">
          <Input
            inputtype="input"
            type="number"
            name="size"
            label="Size"
            onChange={props.changed}
            className={
              props.error.size ? "invalid input-element" : "input-element"
            }
          />
          <select id="size-type" name="sizeType" onChange={props.changed}>
            <option>Marla</option>
            <option>Canal</option>
            <option>Acer</option>
          </select>
        </div>
        <Input
          inputtype="input"
          type="number"
          name="phoneNumber"
          label="Phone Number"
          onChange={props.changed}
          className={
            props.error.phoneNumber ? "invalid input-element" : "input-element"
          }
        />
        {props.error.phoneNumber ? (
          <p>Enter Valid Pakistani Mobile Number only e.g. 03356698235</p>
        ) : null}

        <Input
          inputtype="input"
          type="text"
          name="city"
          label="City"
          onChange={props.changed}
          className={
            props.error.city ? "invalid input-element" : "input-element"
          }
        />
        {props.error.city ? (
          <p>Enter Valid Name Of City Like Islamabada</p>
        ) : null}
        <Input
          inputtype="input"
          type="text"
          name="address"
          label="Address"
          onChange={props.changed}
          className={
            props.error.address ? "invalid input-element" : "input-element"
          }
        />
        <Input
          inputtype="textArea"
          name="description"
          label="Description"
          placeholder="Write All the Details That you wana tell buyer here..."
          onChange={props.changed}
          className={
            props.error.description ? "invalid input-element" : "input-element"
          }
        />
        <Input
          inputtype="input"
          type="text"
          name="location"
          value={props.values.location}
          label="Set Location"
          onChange={props.changed}
          onClick={props.click1}
          className={
            props.error.location ? "invalid input-element" : "input-element"
          }
        />
      </form>
      <div className="next-btn">
        <button onClick={props.click}>Next</button>
      </div>
    </div>
  );
};
export default basic;
