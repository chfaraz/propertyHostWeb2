import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

const signIn = () => {
  return (
    <div className="signin-form">
      <div className="basic-form">
        <h2>Sign In to your Acount</h2>
        <form>
          <Input
            inputtype="input"
            type="text"
            name="username"
            label="Phone No:"
          />
          <Input
            inputtype="input"
            type="password"
            name="password"
            label="Password:"
          />
          <Link to="/login/forgetPassword">
            <p>Forget Password</p>
          </Link>
        </form>
        <div className="signin-btn">
          <Link to="/sell/typePurpose">
            <button>Sign In</button>
          </Link>
        </div>
        <h3 id="no-acount">Dont Have an account</h3>
        <div className="signup-btn">
          <Link to="/login/signUp">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default signIn;
