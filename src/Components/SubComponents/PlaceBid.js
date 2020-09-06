import React from "react";
import { FaDollarSign } from "react-icons/fa";
const placeBid = () => {
  return (
    <div className="place-bid-wrapper">
      <h2>Place Bid</h2>
      <p>
        Write the amount you want to give for this property. Notification will
        be sent to seller and he may contact you.
      </p>
      <form>
        <label>Name:</label>
        <br />
        <input type="text" />
        <label>Phone No:</label>
        <br />
        <input type="number" />
        <label>Rs:</label>
        <br />
        <input type="number" />
        <br />
        <button>
          <FaDollarSign className="btn-icon" />
          Bid
        </button>
      </form>
    </div>
  );
};
export default placeBid;
