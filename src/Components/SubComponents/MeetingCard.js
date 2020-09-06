import React from "react";

const meetingCard = () => {
  return (
    <div className="meeting-info">
      <h2>Meeting Time</h2>
      <p>
        You can visit the property and meet with seller at the below given time.
      </p>
      <div>
        <div className="meeting-argument">
          <div>
            <span>Day:</span>
          </div>
          <br />
          <span>Time:</span>
        </div>
        <div className="meeting-value">
          <div>
            <span>friday - sunday</span>
          </div>
          <br />
          <span>12:30 am - 5:00 pm</span>
        </div>
      </div>
    </div>
  );
};
export default meetingCard;
