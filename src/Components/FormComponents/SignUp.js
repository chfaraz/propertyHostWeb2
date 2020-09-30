import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

const patterns = {
  phoneNumber: /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  name: /^[a-zA-Z]{1,30}$/,
};
class SignUp extends Component {
  state = {
    sellPath: "#",
    formData: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },

    error: {
      firstName: false,
      lastName: false,
      phoneNumber: false,
      password: false,
      confirmPassword: false,
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
      !this.validation(this.state.formData.firstName, patterns["name"]) &&
      e.target.name === "firstName"
    ) {
      currentState.error.firstName = true;
      this.setState({ currentState });
    } else if (
      this.validation(this.state.formData.firstName, patterns["name"]) &&
      e.target.name === "firstName"
    ) {
      currentState.error.firstName = false;
      this.setState({ currentState });
    }
    if (
      !this.validation(this.state.formData.lastName, patterns["name"]) &&
      e.target.name === "lastName"
    ) {
      currentState.error.lastName = true;
      this.setState({ currentState });
    } else if (
      this.validation(this.state.formData.lastName, patterns["name"]) &&
      e.target.name === "lastName"
    ) {
      currentState.error.lastName = false;
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
    if (currentState.formData.password === "" && e.target.name === "password") {
      currentState.error.password = true;
      this.setState({ currentState });
    } else if (
      currentState.formData.password !== "" &&
      e.target.name === "password"
    ) {
      currentState.error.password = false;
      this.setState({ currentState });
    }
    if (
      currentState.formData.confirmPassword !==
        currentState.formData.password &&
      e.target.name === "confirmPassword"
    ) {
      currentState.error.confirmPassword = true;
      this.setState({ currentState });
    } else if (
      currentState.formData.confirmPassword ===
        currentState.formData.password &&
      e.target.name === "confirmPassword"
    ) {
      currentState.error.confirmPassword = false;
      this.setState({ currentState });
    }
    if (
      this.validation(this.state.formData.firstName, patterns["name"]) &&
      this.validation(this.state.formData.lastName, patterns["name"]) &&
      this.validation(
        this.state.formData.phoneNumber,
        patterns["phoneNumber"]
      ) &&
      this.state.formData.confirmPassword === this.state.formData.password &&
      this.state.formData.password !== ""
    ) {
      this.setState({ sellPath: "/buy" });
    }
  };
  validation = (e, regex) => {
    return regex.test(e);
  };
  signUp = () => {
    let preState = { ...this.state };
    if (!this.validation(preState.formData.firstName, patterns["name"])) {
      preState.error.firstName = true;
      this.setState({ preState });
    }
    if (!this.validation(preState.formData.lastName, patterns["name"])) {
      preState.error.lastName = true;
      this.setState({ preState });
    }
    if (
      !this.validation(preState.formData.phoneNumber, patterns["phoneNumber"])
    ) {
      preState.error.phoneNumber = true;
      this.setState({ preState });
    }
    if (preState.formData.password === "") {
      preState.error.password = true;
      this.setState({ preState });
    }
    if (preState.formData.confirmPassword !== preState.formData.password) {
      preState.error.confirmPassword = true;
      this.setState({ preState });
    }
  };
  render() {
    return (
      <div className="signin-form">
        <div className="basic-form">
          <h2>Create your Acount</h2>
          <form>
            <Input
              inputtype="input"
              type="text"
              name="firstName"
              label="First Name"
              onChange={(e) => this.handleChange(e)}
              className={
                this.state.error.firstName
                  ? "invalid input-element"
                  : "input-element"
              }
            />
            <Input
              inputtype="input"
              type="text"
              name="lastName"
              label="Last Name"
              onChange={(e) => this.handleChange(e)}
              className={
                this.state.error.lastName
                  ? "invalid input-element"
                  : "input-element"
              }
            />
            <Input
              inputtype="input"
              type="number"
              name="phoneNumber"
              label="Phone No"
              onChange={(e) => this.handleChange(e)}
              className={
                this.state.error.phoneNumber
                  ? "invalid input-element"
                  : "input-element"
              }
            />
            <Input
              inputtype="input"
              type="password"
              name="password"
              label="Password"
              onChange={(e) => this.handleChange(e)}
              className={
                this.state.error.password
                  ? "invalid input-element"
                  : "input-element"
              }
            />
            <Input
              inputtype="input"
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              onChange={(e) => this.handleChange(e)}
              className={
                this.state.error.confirmPassword
                  ? "invalid input-element"
                  : "input-element"
              }
            />
          </form>
          <div className="signin-btn">
            <Link to={this.state.sellPath}>
              <button onClick={this.signUp}>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
