import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import homeBlack from "../Assets/homeBlack.png";
import homeGreen from "../Assets/homeGreen.png";
import AdDetail from "../Components/SubComponents/AdDetail";

class Maap extends Component {
  state = {
    sellIcon: {
      lat: 35.787449,
      lng: -78.6438197,
    },
    buyIcon: {
      lat: 35.797449,
      lng: -78.6478197,
    },
    zoom: 13,
    showDetailPopup: false,
  };
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ showDetailPopup: false });
    }
  }
  homeSellIcon = L.icon({
    iconUrl: homeBlack,
    className: "iconColor",
    iconSize: [20, 20], // size of the icon
    popupAnchor: [0, -10],
  });
  homeRentIcon = L.icon({
    iconUrl: homeGreen,
    className: "iconColor",
    iconSize: [20, 20], // size of the icon
    popupAnchor: [0, -10],
  });
  showDetailPopup = () => {
    const doesShow = this.state.showPriceHandler;
    this.setState({ showDetailPopup: !doesShow });
  };
  hideDetailPopup = () => {
    const doesShow = this.state.showDetailPopup;
    if (doesShow === true) {
      this.setState({ showDetailPopup: false });
    }
  };
  render() {
    const positionSellIcon = [this.state.sellIcon.lat, this.state.sellIcon.lng];
    const positionBuyIcon = [this.state.buyIcon.lat, this.state.buyIcon.lng];
    return (
      <div>
        {this.state.showDetailPopup ? (
          <div className="detail-popup-wrapper" ref={this.setWrapperRef}>
            <a
              className="popup-close-button"
              href="#close"
              onClick={this.hideDetailPopup}
            >
              ×
            </a>
            <AdDetail />
          </div>
        ) : null}
        <Map className="map" center={positionSellIcon} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            onClick={this.showDetailPopup}
            position={positionSellIcon}
            icon={this.homeSellIcon}
            onMouseOver={(e) => {
              e.target.openPopup();
            }}
            onMouseOut={(e) => {
              e.target.closePopup();
            }}
          >
            <Popup maxWidth="450">
              <div className="flex">
                <img
                  src={require("../Assets/main-img.jpg")}
                  className="popup-img"
                />
                <div>
                  <p>Rs: 6500000</p>
                  <p>bd: 3 bt: 2</p>
                  <p>5 Marla</p>
                </div>
              </div>
            </Popup>
          </Marker>
          <Marker
            onClick={this.showDetailPopup}
            position={positionBuyIcon}
            icon={this.homeRentIcon}
            onMouseOver={(e) => {
              e.target.openPopup();
            }}
            onMouseOut={(e) => {
              e.target.closePopup();
            }}
          >
            <Popup maxWidth="450">
              <div className="flex">
                <img
                  src={require("../Assets/main-img.jpg")}
                  className="popup-img"
                />
                <div>
                  <p>Rs: 6500000</p>
                  <p>bd: 3 bt: 2</p>
                  <p>7 Marla</p>
                </div>
              </div>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}
export default Maap;
