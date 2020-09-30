import React, { Component, createRef } from "react";
import Basic from "../Components/FormComponents/Basic";
import TypePurpose from "../Components/FormComponents/TypePurpose";
import RoomDetail from "../Components/FormComponents/RoomDetail";
import MeetingDetail from "../Components/FormComponents/MeetingDetail";
import UploadPictures from "../Components/FormComponents/UploadPictures";
import Map from "../Containers/Map/Map";

const patterns = {
  buildYear: /^(19|20)\d{2}$/,
  phoneNumber: /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  number: /^[0-9]{1,12}$/,
  size: /^[0-9]{1,3}(\.[0-9])?$/,
  room: /^[0-9]{1,3}$/,
  city: /^[a-zA-Z]{1,30}$/,
  flooring: /^([a-z\s]+,)*([a-z\s]+){1}$/i,
};
class Sell extends Component {
  state = {
    basic_form: true,
    basicDetailForm: {
      title: "",
      price: "",
      size: "",
      sizeType: "Marla",
      phoneNumber: "",
      city: "",
      address: "",
      description: "",
      location: "",
    },
    room_detail_form: false,
    roomDetailForm: {
      bedRooms: "",
      bathRooms: "",
      parkingSpace: "",
      floors: "",
      flooring: "",
      basement: false,
    },
    type_purpose_form: false,
    typePurposeform: {
      purpose: "sell",
      type: "Home",
      propertyDetail: "House",
      buildYear: "",
    },
    upload_pictures_form: false,
    uploadPictureForm: {
      file: "",
      images: "",
    },
    meeting_detail_form: false,
    meetingDetailForm: {
      dayFrom: "Monday",
      dayToo: "Monday",
      timeFrom: "",
      timeToo: "",
    },
    error: {
      title: false,
      price: false,
      size: false,
      phoneNumber: false,
      city: false,
      address: false,
      description: false,

      buildYear: false,
      number: false,
      bedRooms: false,
      bathRooms: false,
      parkingSpace: false,
      floors: false,
      flooring: false,
      timeFrom: false,
      timeToo: false,
      location: false,
    },
    locationMap: false,
  };

  showBasicForm = () => {
    this.setState({
      basic_form: true,
      room_detail_form: false,
      type_purpose_form: false,
      upload_pictures_form: false,
      locationMap: false,
      meeting_detail_form: false,
    });
  };
  showLocationMap = () => {
    this.setState({
      basic_form: false,
      room_detail_form: false,
      type_purpose_form: false,
      upload_pictures_form: false,
      locationMap: true,
      meeting_detail_form: false,
    });
  };
  refmarker = React.createRef();
  handleMoveend = () => {
    let preState = { ...this.state };
    const marker = this.refmarker.current;
    preState.basicDetailForm.location = marker.leafletElement.getLatLng();
    preState.error.location = false;
    this.setState({ preState });
    console.log(this.state.basicDetailForm.location);
  };
  location = () => {};
  showTypeForm = () => {
    if (
      this.state.basicDetailForm.title !== "" &&
      this.validation(this.state.basicDetailForm.price, patterns["number"]) &&
      this.validation(this.state.basicDetailForm.size, patterns["size"]) &&
      this.validation(
        this.state.basicDetailForm.phoneNumber,
        patterns["phoneNumber"]
      ) &&
      this.validation(this.state.basicDetailForm.city, patterns["city"]) &&
      this.state.basicDetailForm.address !== "" &&
      this.state.basicDetailForm.description !== "" &&
      this.state.basicDetailForm.location !== ""
    ) {
      this.setState({
        basic_form: false,
        room_detail_form: false,
        type_purpose_form: true,
        upload_pictures_form: false,
        locationMap: false,
        meeting_detail_form: false,
      });
      console.log(this.state.basicDetailForm);
    } else {
      let preState = { ...this.state };
      if (this.state.basicDetailForm.title === "") {
        preState.error.title = true;
        this.setState({ preState });
      } else {
      }

      if (
        !this.validation(this.state.basicDetailForm.price, patterns["number"])
      ) {
        preState.error.price = true;
        this.setState({ preState });
      }
      if (!this.validation(this.state.basicDetailForm.size, patterns["size"])) {
        preState.error.size = true;
        this.setState({ preState });
      }
      if (
        !this.validation(
          this.state.basicDetailForm.phoneNumber,
          patterns["phoneNumber"]
        )
      ) {
        preState.error.phoneNumber = true;
        this.setState({ preState });
      }
      if (!this.validation(this.state.basicDetailForm.city, patterns["city"])) {
        preState.error.city = true;
        this.setState({ preState });
      }
      if (this.state.basicDetailForm.address === "") {
        preState.error.address = true;
        this.setState({ preState });
      }
      if (this.state.basicDetailForm.description === "") {
        preState.error.description = true;
        this.setState({ preState });
      }
      if (this.state.basicDetailForm.location === "") {
        preState.error.location = true;
        this.setState({ preState });
      }
    }
  };
  showRoomDetailForm = () => {
    if (
      this.validation(
        this.state.typePurposeform.buildYear,
        patterns["buildYear"]
      )
    ) {
      this.setState({
        basic_form: false,
        room_detail_form: true,
        type_purpose_form: false,
        upload_pictures_form: false,
        locationMap: false,
        meeting_detail_form: false,
      });
      console.log(this.state.typePurposeform);
    } else {
      let preState = { ...this.state };
      preState.error.buildYear = true;
      this.setState({ preState });
    }
  };

  showMeetingForm = () => {
    if (this.state.typePurposeform.type === "Home") {
      if (
        this.validation(this.state.roomDetailForm.bedRooms, patterns["room"]) &&
        this.validation(
          this.state.roomDetailForm.bathRooms,
          patterns["room"]
        ) &&
        this.validation(
          this.state.roomDetailForm.parkingSpace,
          patterns["room"]
        ) &&
        this.validation(this.state.roomDetailForm.floors, patterns["room"]) &&
        this.validation(
          this.state.roomDetailForm.flooring,
          patterns["flooring"]
        )
      ) {
        this.setState({
          basic_form: false,
          room_detail_form: false,
          type_purpose_form: false,
          upload_pictures_form: false,
          locationMap: false,
          meeting_detail_form: true,
        });
        console.log(this.state.roomDetailForm);
      } else {
        if (
          !this.validation(this.state.roomDetailForm.bedRooms, patterns["room"])
        ) {
          let preState = { ...this.state };
          preState.error.bedRooms = true;
          this.setState({ preState });
        }

        if (
          !this.validation(
            this.state.roomDetailForm.bathRooms,
            patterns["room"]
          )
        ) {
          let preState = { ...this.state };
          preState.error.bathRooms = true;
          this.setState({ preState });
        }
        if (
          !this.validation(
            this.state.roomDetailForm.parkingSpace,
            patterns["room"]
          )
        ) {
          let preState = { ...this.state };
          preState.error.parkingSpace = true;
          this.setState({ preState });
        }
        if (
          !this.validation(this.state.roomDetailForm.floors, patterns["room"])
        ) {
          let preState = { ...this.state };
          preState.error.floors = true;
          this.setState({ preState });
        }
        if (
          !this.validation(
            this.state.roomDetailForm.flooring,
            patterns["flooring"]
          )
        ) {
          let preState = { ...this.state };
          preState.error.flooring = true;
          this.setState({ preState });
        }
      }
    } else {
      this.setState({
        basic_form: false,
        room_detail_form: false,
        type_purpose_form: false,
        upload_pictures_form: false,
        meeting_detail_form: true,
      });
      console.log(this.state.typePurposeform);
    }
    if (this.state.roomDetailForm.basement === "on") {
      console.log("fuck your self :>)");
    }
  };
  showPictureForm = () => {
    if (this.state.meetingDetailForm.timeFrom !== "") {
      let preState = { ...this.state };
      preState.error.timeFrom = false;
      this.setState({ preState });
      if (this.state.meetingDetailForm.timeToo !== "") {
        preState.error.timeToo = false;
        this.setState({ preState });
        this.setState({
          basic_form: false,
          room_detail_form: false,
          type_purpose_form: false,
          locationMap: false,
          upload_pictures_form: true,
          meeting_detail_form: false,
        });

        console.log(this.state.meetingDetailForm);
      } else {
        let preState = { ...this.state };
        preState.error.timeToo = true;
        this.setState({ preState });
      }
    } else {
      let preState = { ...this.state };
      preState.error.timeFrom = true;
      this.setState({ preState });
    }
  };
  handleChange = (e) => {
    const currentState = { ...this.state };
    var key = e.target.name;
    var value = e.target.value;
    if (this.state.type_purpose_form) {
      let form = currentState.typePurposeform;
      form[key] = value;
      this.setState({
        typePurposeform: form,
      });
      if (
        !this.validation(
          this.state.typePurposeform.buildYear,
          patterns["buildYear"]
        ) &&
        e.target.name === "buildYear"
      ) {
        let preState = { ...this.state };
        preState.error.buildYear = true;
        this.setState({ preState });
      } else if (
        this.validation(
          this.state.typePurposeform.buildYear,
          patterns["buildYear"]
        ) &&
        e.target.name === "buildYear"
      ) {
        let preState = { ...this.state };
        preState.error.buildYear = false;
        this.setState({ preState });
      }
    } else if (this.state.room_detail_form) {
      let form = currentState.roomDetailForm;
      form[key] = value;
      this.setState({
        roomDetailForm: form,
      });
      if (
        !this.validation(
          this.state.roomDetailForm.bedRooms,
          patterns["room"]
        ) &&
        e.target.name === "bedRooms"
      ) {
        let preState = { ...this.state };
        preState.error.bedRooms = true;
        this.setState({ preState });
      } else if (
        this.validation(this.state.roomDetailForm.bedRooms, patterns["room"]) &&
        e.target.name === "bedRooms"
      ) {
        let preState = { ...this.state };
        preState.error.bedRooms = false;
        this.setState({ preState });
      }
      if (
        !this.validation(
          this.state.roomDetailForm.bathRooms,
          patterns["room"]
        ) &&
        e.target.name === "bathRooms"
      ) {
        let preState = { ...this.state };
        preState.error.bathRooms = true;
        this.setState({ preState });
      } else if (
        this.validation(
          this.state.roomDetailForm.bathRooms,
          patterns["room"]
        ) &&
        e.target.name === "bathRooms"
      ) {
        let preState = { ...this.state };
        preState.error.bathRooms = false;
        this.setState({ preState });
      }
      if (
        !this.validation(
          this.state.roomDetailForm.parkingSpace,
          patterns["room"]
        ) &&
        e.target.name === "parkingSpace"
      ) {
        let preState = { ...this.state };
        preState.error.parkingSpace = true;
        this.setState({ preState });
      } else if (
        this.validation(
          this.state.roomDetailForm.parkingSpace,
          patterns["room"]
        ) &&
        e.target.name === "parkingSpace"
      ) {
        let preState = { ...this.state };
        preState.error.parkingSpace = false;
        this.setState({ preState });
      }
      if (
        !this.validation(this.state.roomDetailForm.floors, patterns["room"]) &&
        e.target.name === "floors"
      ) {
        let preState = { ...this.state };
        preState.error.floors = true;
        this.setState({ preState });
      } else if (
        this.validation(this.state.roomDetailForm.floors, patterns["room"]) &&
        e.target.name === "floors"
      ) {
        let preState = { ...this.state };
        preState.error.floors = false;
        this.setState({ preState });
      }
      if (
        !this.validation(
          this.state.roomDetailForm.flooring,
          patterns["flooring"]
        ) &&
        e.target.name === "flooring"
      ) {
        let preState = { ...this.state };
        preState.error.flooring = true;
        this.setState({ preState });
      } else if (
        this.validation(
          this.state.roomDetailForm.flooring,
          patterns["flooring"]
        ) &&
        e.target.name === "flooring"
      ) {
        let preState = { ...this.state };
        preState.error.flooring = false;
        this.setState({ preState });
      }
    } else if (this.state.basic_form) {
      let form = currentState.basicDetailForm;
      form[key] = value;
      let preState = { ...this.state };
      this.setState({
        basicDetailForm: form,
      });
      if (
        this.state.basicDetailForm.title === "" &&
        e.target.name === "title"
      ) {
        preState.error.title = true;
        this.setState({ preState });
      } else if (
        this.state.basicDetailForm.title !== "" &&
        e.target.name === "title"
      ) {
        preState.error.title = false;
        this.setState({ preState });
      }
      if (
        !this.validation(
          this.state.basicDetailForm.phoneNumber,
          patterns["phoneNumber"]
        ) &&
        e.target.name === "phoneNumber"
      ) {
        preState.error.phoneNumber = true;
        this.setState({ preState });
      } else if (
        this.validation(
          this.state.basicDetailForm.phoneNumber,
          patterns["phoneNumber"]
        ) &&
        e.target.name === "phoneNumber"
      ) {
        preState.error.phoneNumber = false;
        this.setState({ preState });
      }
      if (
        !this.validation(
          this.state.basicDetailForm.price,
          patterns["number"]
        ) &&
        e.target.name === "price"
      ) {
        preState.error.price = true;
        this.setState({ preState });
      } else if (
        this.validation(this.state.basicDetailForm.price, patterns["number"]) &&
        e.target.name === "price"
      ) {
        preState.error.price = false;
        this.setState({ preState });
      }
      if (
        !this.validation(this.state.basicDetailForm.size, patterns["size"]) &&
        e.target.name === "size"
      ) {
        preState.error.size = true;
        this.setState({ preState });
      } else if (
        this.validation(this.state.basicDetailForm.size, patterns["size"]) &&
        e.target.name === "size"
      ) {
        preState.error.size = false;
        this.setState({ preState });
      }
      if (
        !this.validation(this.state.basicDetailForm.city, patterns["city"]) &&
        e.target.name === "city"
      ) {
        preState.error.city = true;
        this.setState({ preState });
      } else if (
        this.validation(this.state.basicDetailForm.city, patterns["city"]) &&
        e.target.name === "city"
      ) {
        preState.error.city = false;
        this.setState({ preState });
      }
      if (
        this.state.basicDetailForm.address === "" &&
        e.target.name === "address"
      ) {
        preState.error.address = true;
        this.setState({ preState });
      } else if (
        this.state.basicDetailForm.address !== "" &&
        e.target.name === "address"
      ) {
        preState.error.address = false;
        this.setState({ preState });
      }
      if (
        this.state.basicDetailForm.description === "" &&
        e.target.name === "description"
      ) {
        preState.error.description = true;
        this.setState({ preState });
      } else if (
        this.state.basicDetailForm.description !== "" &&
        e.target.name === "description"
      ) {
        preState.error.description = false;
        this.setState({ preState });
      }
    } else if (this.state.meeting_detail_form) {
      let form = currentState.meetingDetailForm;
      form[key] = value;
      let preState = { ...this.state };
      this.setState({
        meetingDetailForm: form,
      });
      if (
        this.state.meetingDetailForm.timeFrom === "" &&
        e.target.name === "timeFrom"
      ) {
        preState.error.timeFrom = true;
        this.setState({ preState });
      } else if (
        this.state.meetingDetailForm.timeFrom !== "" &&
        e.target.name === "timeFrom"
      ) {
        preState.error.timeFrom = false;
        this.setState({ preState });
      }
      if (
        this.state.meetingDetailForm.timeToo === "" &&
        e.target.name === "timeToo"
      ) {
        preState.error.timeToo = true;
        this.setState({ preState });
      } else if (
        this.state.meetingDetailForm.timeToo !== "" &&
        e.target.name === "timeToo"
      ) {
        preState.error.timeToo = false;
        this.setState({ preState });
      }
    }
  };
  validation = (e, regex) => {
    return regex.test(e);
  };

  render() {
    let clas = "active-form";
    let nav = (
      <nav>
        <ul>
          <li
            id={this.state.basic_form ? clas : null}
            onClick={this.showBasicForm}
          >
            1
          </li>
          <li
            id={this.state.type_purpose_form ? clas : null}
            onClick={this.showTypeForm}
          >
            2
          </li>
          {this.state.typePurposeform.type === "Home" ? (
            <ul>
              <li
                id={this.state.room_detail_form ? clas : null}
                onClick={this.showRoomDetailForm}
              >
                3
              </li>
              <li
                id={this.state.meeting_detail_form ? clas : null}
                onClick={this.showMeetingForm}
              >
                4
              </li>
              <li
                id={this.state.upload_pictures_form ? clas : null}
                onClick={this.showPictureForm}
              >
                5
              </li>
            </ul>
          ) : (
            <ul>
              <li
                id={this.state.meeting_detail_form ? clas : null}
                onClick={this.showMeetingForm}
              >
                3
              </li>
              <li
                id={this.state.upload_pictures_form ? clas : null}
                onClick={this.showPictureForm}
              >
                4
              </li>
            </ul>
          )}
        </ul>
      </nav>
    );

    return (
      <div className="sell-page">
        <h2>Give detail about your Property</h2>
        {nav}
        {this.state.basic_form ? (
          <Basic
            click={this.showTypeForm}
            click1={this.showLocationMap}
            changed={(e) => this.handleChange(e)}
            error={this.state.error}
            values={this.state.basicDetailForm}
          />
        ) : null}
        {this.state.locationMap ? (
          <Map
            handleMoveend={this.handleMoveend}
            refmarker={this.refmarker}
            click={this.showBasicForm}
          />
        ) : null}
        {this.state.type_purpose_form ? (
          <TypePurpose
            click={this.showRoomDetailForm}
            click1={this.showMeetingForm}
            changed={(e) => this.handleChange(e)}
            type={this.state.typePurposeform.type}
            submit={(e) => this.handeSubmit(e)}
            error={this.state.error}
          />
        ) : null}
        {this.state.room_detail_form ? (
          <RoomDetail
            click={this.showMeetingForm}
            changed={(e) => this.handleChange(e)}
            error={this.state.error}
          />
        ) : null}
        {this.state.meeting_detail_form ? (
          <MeetingDetail
            click={this.showPictureForm}
            changed={(e) => this.handleChange(e)}
            error={this.state.error}
          />
        ) : null}
        {this.state.upload_pictures_form ? <UploadPictures /> : null}
      </div>
    );
  }
}
export default Sell;
