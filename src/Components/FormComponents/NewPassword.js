import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

const forgetPassword = () => {
  return (
    <div className="signin-form">
      <div className="basic-form">
        <h2>Set New Password</h2>
        <form>
          <Input
            inputtype="input"
            type="Password"
            name="Password"
            label="Password"
          />
          <Input
            inputtype="input"
            type="Password"
            name="confirmPassword"
            label="Confirm Password"
          />
        </form>
        <div className="signin-btn">
          <Link to="/buy">
            <button>Done</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default forgetPassword;
