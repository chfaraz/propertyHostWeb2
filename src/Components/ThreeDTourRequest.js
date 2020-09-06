import React from "react";
import Input from "./FormComponents/Input";

const threeDTourRequest = () => {
  return (
    <div className="agent-signup">
      <div className="signin-form">
        <div className="basic-form">
          <h2>Request for a 3D Tour of your Home</h2>
          <form>
            <Input
              inputtype="input"
              type="text"
              name="ownername"
              label="Owner's Name"
            />
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
          </form>
          <div className="signin-btn">
            <button>Request</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default threeDTourRequest;
