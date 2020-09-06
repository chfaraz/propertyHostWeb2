import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

const enterCode = () => {
  let password = 222;
  let error = "";
  if (password !== 22) {
    error = <p>Code is incorrect.</p>;
  }
  return (
    <div className="signin-form">
      <div className="basic-form">
        <h2>Enter Code</h2>
        <form>
          <Input
            inputtype="input"
            type="number"
            name="code"
            label="Enter Code"
          />
          {error}
        </form>
        <div className="signin-btn">
          <Link to="/login/newPassword">
            <button>OK</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default enterCode;
