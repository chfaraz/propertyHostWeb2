import React, { Component } from "react";
import Input from "./FormComponents/Input";

const patterns = {
  phoneNumber: /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  name: /^[a-zA-Z]{1,30}$/,
};
class ThreeDTourRequest extends Component {
  state = {
    formData: {
      ownerName: "",
      phoneNumber: "",
      address: "",
    },
    error: {
      ownerName: false,
      phoneNumber: false,
      address: false,
    },
  };
  handleChange = (e) => {
    const currentState = { ...this.state };
    var key = e.target.name;
    var value = e.target.value;
    let form = currentState.formData;
    form[key] = value;
    this.setState({
      formData: form,
    });
    if (
      !this.validation(this.state.formData.ownerName, patterns["name"]) &&
      e.target.name === "ownerName"
    ) {
      currentState.error.ownerName = true;
      this.setState({ currentState });
    } else if (
      this.validation(this.state.formData.ownerName, patterns["name"]) &&
      e.target.name === "ownerName"
    ) {
      currentState.error.ownerName = false;
      this.setState({ currentState });
    }
    if (
      !this.validation(
        this.state.formData.phoneNumber,
        patterns["phoneNumber"]
      ) &&
      e.target.name === "phoneNumber"
    ) {
      currentState.error.phoneNumber = true;
      this.setState({ currentState });
    } else if (
      this.validation(
        this.state.formData.phoneNumber,
        patterns["phoneNumber"]
      ) &&
      e.target.name === "phoneNumber"
    ) {
      currentState.error.phoneNumber = false;
      this.setState({ currentState });
    }
    if (currentState.formData.address === "" && e.target.name === "address") {
      currentState.error.address = true;
      this.setState({ currentState });
    } else if (
      currentState.formData.address !== "" &&
      e.target.name === "address"
    ) {
      currentState.error.address = false;
      this.setState({ currentState });
    }
  };
  validation = (e, regex) => {
    return regex.test(e);
  };
  signUp = () => {
    let preState = { ...this.state };
    if (!this.validation(preState.formData.ownerName, patterns["name"])) {
      preState.error.ownerName = true;
      this.setState({ preState });
    }
    if (
      !this.validation(preState.formData.phoneNumber, patterns["phoneNumber"])
    ) {
      preState.error.phoneNumber = true;
      this.setState({ preState });
    }
    if (preState.formData.address === "") {
      preState.error.address = true;
      this.setState({ preState });
    }
    if (
      this.validation(preState.formData.ownerName, patterns["name"]) &&
      this.validation(preState.formData.phoneNumber, patterns["phoneNumber"]) &&
      preState.formData.address !== ""
    ) {
      console.log("request Receved");
    }
  };
  render() {
    return (
      <div className="agent-signup">
        <div className="signin-form">
          <div className="basic-form">
            <h2>Request for a 3D Tour of your Home</h2>
            <form>
              <Input
                inputtype="input"
                type="text"
                name="ownerName"
                label="Owner's Name"
                onChange={(e) => this.handleChange(e)}
                className={
                  this.state.error.ownerName
                    ? "invalid input-element"
                    : "input-element"
                }
              />
              <Input
                inputtype="input"
                type="number"
                name="phoneNumber"
                label="Phone Number"
                onChange={(e) => this.handleChange(e)}
                className={
                  this.state.error.phoneNumber
                    ? "invalid input-element"
                    : "input-element"
                }
              />
              <Input
                inputtype="input"
                type="text"
                name="address"
                label="Address"
                onChange={(e) => this.handleChange(e)}
                className={
                  this.state.error.address
                    ? "invalid input-element"
                    : "input-element"
                }
              />
            </form>
            <div className="signin-btn">
              <button onClick={this.signUp}>Request</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ThreeDTourRequest;
