import React, { Component } from "react";
import Input from "./Input";

const patterns = {
  phoneNumber: /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  name: /^[a-zA-Z]{1,30}$/,
};
class AgentSignUpForm extends Component {
  state = {
    formData: {
      fullName: "",
      phoneNumber: "",
      address: "",
      introduction: "",
      setPassword: "",
    },
    error: {
      fullName: false,
      phoneNumber: false,
      address: false,
      introduction: false,
      setPassword: false,
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
      !this.validation(this.state.formData.fullName, patterns["name"]) &&
      e.target.name === "fullName"
    ) {
      currentState.error.fullName = true;
      this.setState({ currentState });
    } else if (
      this.validation(this.state.formData.fullName, patterns["name"]) &&
      e.target.name === "fullName"
    ) {
      currentState.error.fullName = false;
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
    if (
      currentState.formData.introduction === "" &&
      e.target.name === "introduction"
    ) {
      currentState.error.introduction = true;
      this.setState({ currentState });
    } else if (
      currentState.formData.introduction !== "" &&
      e.target.name === "introduction"
    ) {
      currentState.error.introduction = false;
      this.setState({ currentState });
    }

    if (
      currentState.formData.setPassword === "" &&
      e.target.name === "setPassword"
    ) {
      currentState.error.setPassword = true;
      this.setState({ currentState });
    } else if (
      currentState.formData.setPassword !== "" &&
      e.target.name === "setPassword"
    ) {
      currentState.error.setPassword = false;
      this.setState({ currentState });
    }
  };
  validation = (e, regex) => {
    return regex.test(e);
  };
  signUp = () => {
    let preState = { ...this.state };
    if (!this.validation(preState.formData.fullName, patterns["name"])) {
      preState.error.fullName = true;
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
    if (preState.formData.introduction === "") {
      preState.error.introduction = true;
      this.setState({ preState });
    }
    if (preState.formData.setPassword === "") {
      preState.error.setPassword = true;
      this.setState({ preState });
    }

    if (
      this.validation(preState.formData.fullName, patterns["name"]) &&
      this.validation(preState.formData.phoneNumber, patterns["phoneNumber"]) &&
      preState.formData.address !== "" &&
      preState.formData.introduction !== "" &&
      preState.formData.setPassword !== ""
    ) {
      console.log("request Receved");
    }
  };

  render() {
    return (
      <div className="agent-signup">
        <div className="signin-form">
          <div className="basic-form">
            <h2>Request your Acount</h2>
            <form>
              <Input
                inputtype="input"
                type="text"
                name="fullName"
                label="Full Name"
                onChange={(e) => this.handleChange(e)}
                className={
                  this.state.error.fullName
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
              <Input
                inputtype="textArea"
                type="textarea"
                name="introduction"
                label="Introduction"
                placeholder="Write A Brief Introduction About Your Self..."
                onChange={(e) => this.handleChange(e)}
                className={
                  this.state.error.introduction
                    ? "invalid input-element"
                    : "input-element"
                }
              />
              <Input
                inputtype="input"
                type="password"
                name="setPassword"
                label="Set Password"
                onChange={(e) => this.handleChange(e)}
                className={
                  this.state.error.setPassword
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
export default AgentSignUpForm;
