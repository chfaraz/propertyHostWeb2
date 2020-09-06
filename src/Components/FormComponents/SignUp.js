import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

const signUp = () => {
  return (
    <div className="signin-form">
      <div className="basic-form">
        <h2>Create your Acount</h2>
        <form>
          <Input
            inputtype="input"
            type="text"
            name="firstname"
            label="First Name"
          />
          <Input
            inputtype="input"
            type="text"
            name="lastname"
            label="Last Name"
          />
          <Input
            inputtype="input"
            type="number"
            name="phonenumber"
            label="Phone No"
          />
          <Input
            inputtype="input"
            type="password"
            name="password"
            label="Password"
          />
          <Input
            inputtype="input"
            type="password"
            name="confirmpassword"
            label="Confirm Password"
          />
        </form>
        <div className="signin-btn">
          <Link to="/sell/typePurpose">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default signUp;
