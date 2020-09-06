import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
const contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-detail">
        <h2>Contact info</h2>
        <p>
          You can also contact the seller on there below provided phone number.
        </p>
        <span>
          <FaPhoneAlt className="btn-icon" />
          03365543872
        </span>
      </div>
      <div className="place-bid-wrapper place-contact-wrapper">
        <h2>Contact Seller</h2>
        <p>
          Contact the seller if you are intrested in property or if you have any
          queries.
        </p>
        <form>
          <label>Name:</label>
          <br />
          <input type="text" />
          <label>Phone No:</label>
          <br />
          <input type="number" />
          <label>Message</label>
          <br />
          <textarea placeholder="type the message here" />
          <br />
          <button>
            <FaPhoneAlt className="btn-icon" />
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default contact;
