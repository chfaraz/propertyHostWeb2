import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

const forgetPassword = () => {
  return (
    <div className="signin-form">
      <div className="basic-form">
        <h2>Forget your Password</h2>
        <form>
          <Input
            inputtype="input"
            type="number"
            name="phonenumber"
            label="Phone Number"
          />
        </form>
        <div className="signin-btn">
          <Link to="/login/enterCode">
            <button>Get Code</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default forgetPassword;
