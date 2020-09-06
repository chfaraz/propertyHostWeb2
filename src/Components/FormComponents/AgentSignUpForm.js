import React from "react";
import Input from "./Input";

const agentSignUpForm = () => {
  return (
    <div className="agent-signup">
      <div className="signin-form">
        <div className="basic-form">
          <h2>Request your Acount</h2>
          <form>
            <Input
              inputtype="input"
              type="text"
              name="fullname"
              label="Full Name"
            />
            <Input inputtype="input" type="email" name="email" label="Email" />
            <Input
              inputtype="input"
              type="number"
              name="phonenumber"
              label="Phone Number"
            />
            <Input
              inputtype="input"
              type="text"
              name="address"
              label="Address"
            />
            <Input
              inputtype="textArea"
              type="textarea"
              name="introduction"
              label="Introduction"
              placeholder="Write A Brief Introduction About Your Self..."
            />
          </form>
          <div className="signin-btn">
            <button>Request</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default agentSignUpForm;
