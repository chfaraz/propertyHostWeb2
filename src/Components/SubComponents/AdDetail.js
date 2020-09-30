import React, { Component } from "react";

import MeetingCard from "./MeetingCard";
import PlaceBid from "./PlaceBid";
import ImageGallery from "./ImageGallery";
import { BsBuilding } from "react-icons/bs";
import {
  FaPhoneAlt,
  FaRegSnowflake,
  FaBed,
  FaBath,
  FaLocationArrow,
  FaDollarSign,
  FaClock,
} from "react-icons/fa";
import { MdDateRange, MdLocalParking, MdPool } from "react-icons/md";
import { RiTempHotLine } from "react-icons/ri";
import { GrStatusPlaceholderSmall } from "react-icons/gr";
import { GiFamilyHouse, GiResize } from "react-icons/gi";

class AdDetail extends Component {
  state = {
    showBidPopup: false,
    showImagePopup: false,
  };

  showImageHandler = () => {
    this.setState({ showImagePopup: true });
  };
  showBidHandler = () => {
    this.setState({ showBidPopup: true });
  };
  hidePopup = () => {
    const doesShowBid = this.state.showBidPopup;
    const doesShowImg = this.state.showImagePopup;
    if (doesShowBid === true || doesShowImg === true) {
      this.setState({ showBidPopup: false });
      this.setState({ showImagePopup: false });
    }
  };
  render() {
    return (
      <div className="adDetail">
        <ImageGallery
          clicked={this.showImageHandler}
          ImagePopup={this.state.showImagePopup}
          hide={this.hidePopup}
        />
        <article>
          <header>
            <h2>Property Host</h2>
          </header>
          <div className="property-detail flex">
            <h2>Rs: 65,00,000</h2>
            <div className="flex">
              <span>4</span>
              <p> bed</p>
              <span>|</span>
              <span>4</span>
              <p> bath</p>
              <span>|</span>
              <span>8</span>
              <p> marlas</p>
            </div>
          </div>
          <p className="address">house no 123 street no 5 G 9 Islamabad</p>
          <span className="flex">
            <img src={require("../../Assets/homeBlack.png")} />
            <p>For Sale</p>
            <FaPhoneAlt className="icon contact-icon-margin" />
            <p>03365543872</p>
          </span>
          <section className="flex-button">
            <button onClick={this.showBidHandler}>
              <FaDollarSign className="btn-icon" />
              Place Bid
            </button>
            {this.state.showBidPopup ? (
              <div className="outer-Bid-wrapper">
                <div className="close-btn-wrapper">
                  <a href="#close" onClick={this.hidePopup}>
                    ×
                  </a>
                  <PlaceBid />
                </div>
              </div>
            ) : null}
            <button>
              <FaLocationArrow className="btn-icon" />
              Navigate
            </button>
          </section>
          <section className="property-info">
            <h2>Overview</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="property-featuers">
              <h2>Facts and features</h2>
              <div className="property-featuers-detail">
                <div>
                  <div>
                    <BsBuilding className="icon" />
                    <label>Type:</label>
                    <span>Single Family</span>
                  </div>
                  <div>
                    <MdDateRange className="icon" />
                    <label>Year Build:</label>
                    <span>1984</span>
                  </div>
                  <div>
                    <RiTempHotLine className="icon" />
                    <label>Heating:</label>
                    <span>not available</span>
                  </div>
                  <div>
                    <FaRegSnowflake className="icon" />
                    <label>Cooling:</label>
                    <span>not available</span>
                  </div>
                  <div>
                    <GiFamilyHouse className="icon" />
                    <label>Stories:</label>
                    <span>2</span>
                  </div>
                </div>

                <div>
                  <div>
                    <MdLocalParking className="icon" />
                    <label>Parking Space:</label>
                    <span>2</span>
                  </div>
                  <div>
                    <FaBed className="icon" />
                    <label>Bed Rooms:</label>
                    <span>3</span>
                  </div>
                  <div>
                    <FaBath className="icon" />
                    <label>Bath Rooms:</label>
                    <span>3</span>
                  </div>
                  <div>
                    <MdPool className="icon" />
                    <label>Pool:</label>
                    <span>No</span>
                  </div>
                  <div>
                    <GiResize className="icon" />
                    <label>Size:</label>
                    <span>8 Marlas</span>
                  </div>
                </div>
              </div>
              <GrStatusPlaceholderSmall className="icon icon-margin" />
              <label>Flooring:</label>
              <span>Marbel, Tyle, Wood</span>
            </div>
            <MeetingCard />
          </section>
        </article>
      </div>
    );
  }
}
export default AdDetail;
