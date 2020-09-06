import React, { Component } from "react";
import MeetingCard from "./MeetingCard";

class MeetingRequest extends Component {
  state = {
    showMeetingPopup: false,
  };
  showMeetingHandler = () => {
    const doesShow = this.state.showMeetingPopup;
    this.setState({ showMeetingPopup: !doesShow });
  };

  render() {
    let show = null;
    if (this.state.showMeetingPopup) {
      show = (
        <div className="meeting-card-wrapper">
          <button onClick={this.showMeetingHandler}>back</button>
          <form>
            <label>Select your desire Date:</label>
            <input type="date" className="date" />
            <br />
            <label>Select your desire Time:</label>

            <input type="time" className="time" />
            <button>Request</button>
          </form>
        </div>
      );
    } else {
      show = (
        <div className="meeting-card-wrapper">
          <MeetingCard />
        </div>
      );
    }
    let hideButton = false;
    if (!this.state.showMeetingPopup) {
      hideButton = <button onClick={this.showMeetingHandler}>Request</button>;
    }
    return (
      <div className="meeting-request">
        <div className="request-wrapper">
          <h2>Request Tour</h2>
          <p>Request the seller for a meeting at your desire time.</p>
          <div>{hideButton}</div>
        </div>
        {show}
      </div>
    );
  }
}

export default MeetingRequest;
