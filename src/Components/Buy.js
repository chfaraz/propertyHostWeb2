import React, { Component } from "react";
import Maap from "../Map/Map";
import { FaSearch } from "react-icons/fa";

class Buy extends Component {
  state = {
    showPurposePopup: false,
    showPriceHandler: false,
    showRoomsHandler: false,
    showTypeHandler: false,
    showHomeType: false,
    showPlotType: false,
    showMoreType: false,
    showCommercialType: false,
    active: false,
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
      this.setState({ showPurposePopup: false });
      this.setState({ showRoomsHandler: false });
      this.setState({ showTypeHandler: false });
      this.setState({ showMoreHandler: false });
      this.setState({ showPriceHandler: false });
    }
  }
  toggelPurposeHandler = () => {
    const doesShow = this.state.showPurposePopup;
    this.setState({ showPurposePopup: !doesShow });
    this.setState({ showRoomsHandler: false });
    this.setState({ showTypeHandler: false });
    this.setState({ showMoreHandler: false });
    this.setState({ showPriceHandler: false });
  };
  toggelPriceHandler = () => {
    const doesShow = this.state.showPriceHandler;
    this.setState({ showRoomsHandler: false });
    this.setState({ showPriceHandler: !doesShow });
    this.setState({ showTypeHandler: false });
    this.setState({ showMoreHandler: false });
    this.setState({ showPurposePopup: false });
  };
  toggelRoomsHandler = () => {
    const doesShow = this.state.showRoomsHandler;
    this.setState({ showRoomsHandler: !doesShow });
    this.setState({ showPurposePopup: false });
    this.setState({ showPriceHandler: false });
    this.setState({ showMoreHandler: false });
    this.setState({ showTypeHandler: false });
  };
  toggelTypeHandler = () => {
    const doesShow = this.state.showTypeHandler;
    this.setState({ showTypeHandler: !doesShow });
    this.setState({ showPurposePopup: false });
    this.setState({ showPriceHandler: false });
    this.setState({ showRoomsHandler: false });
    this.setState({ showMoreHandler: false });
  };
  toggelMoreHandler = () => {
    const doesShow = this.state.showMoreHandler;
    this.setState({ showMoreHandler: !doesShow });
    this.setState({ showTypeHandler: false });
    this.setState({ showPurposePopup: false });
    this.setState({ showPriceHandler: false });
    this.setState({ showRoomsHandler: false });
  };
  homeType = () => {
    const doesShow = this.state.showHomeType;
    this.setState({ showHomeType: !doesShow });
    this.setState({ showCommercialType: false });
    this.setState({ showPlotType: false });
  };
  plotType = () => {
    const doesShow = this.state.showPlotType;
    this.setState({ showCommercialType: false });
    this.setState({ showHomeType: false });
    this.setState({ showPlotType: !doesShow });
  };
  commercialType = () => {
    const doesShow = this.state.showCommercialType;
    this.setState({ showHomeType: false });
    this.setState({ showPlotType: false });
    this.setState({ showCommercialType: !doesShow });
  };

  render() {
    let showPurposePopup = null;
    if (this.state.showPurposePopup) {
      showPurposePopup = (
        <div className="purpose-wrapper" ref={this.setWrapperRef}>
          <div className="purpose-popup look">
            <form>
              <input type="radio" name="purpose" value="sale" />
              <label htmlFor="sale">For Sale</label>
              <br />
              <input type="radio" name="purpose" value="rent" />
              <label htmlFor="rent">For Rent</label>
              <br />
            </form>
          </div>
        </div>
      );
    }

    let showPriceHandler = null;
    if (this.state.showPriceHandler) {
      showPriceHandler = (
        <div className="price-wrapper" ref={this.setWrapperRef}>
          <div className="price-popup look">
            <form>
              <label>Price</label>
              <br />
              <input type="text" placeholder="From" className="focus" /> -
              <input type="text" placeholder="Too" className="focus" />
            </form>
            <button>Done</button>
          </div>
        </div>
      );
    }

    let showRoomsHandler = null;
    if (this.state.showRoomsHandler) {
      showRoomsHandler = (
        <div className="rooms-wrapper" ref={this.setWrapperRef}>
          <div className="rooms-popup look">
            <form>
              <label>No fo Rooms</label>
              <br />
              <input type="text" placeholder="From" className="focus" /> -
              <input type="text" placeholder="Too" className="focus" />
              <br />
              <label>No fo Baths</label>
              <br />
              <input type="text" placeholder="From" className="focus" /> -
              <input type="text" placeholder="Too" className="focus" />
            </form>
            <button>Done</button>
          </div>
        </div>
      );
    }

    let showTypeHandler = null;
    if (this.state.showTypeHandler) {
      showTypeHandler = (
        <div className="type-wrapper" ref={this.setWrapperRef}>
          <div className="type-popup look">
            <ul>
              <li onClick={this.homeType}>Home</li>
              {this.state.showHomeType ? (
                <ul>
                  <li>House</li>
                  <li>Flat</li>
                </ul>
              ) : null}
              <li onClick={this.plotType}>Plot</li>
              {this.state.showPlotType ? (
                <ul>
                  <li>Residential</li>
                  <li>Commercial</li>
                  <li>Agricultral</li>
                </ul>
              ) : null}
              <li onClick={this.commercialType}>Commercial</li>
              {this.state.showCommercialType ? (
                <ul>
                  <li>Office</li>
                  <li>Shop</li>
                  <li>Ware House</li>
                </ul>
              ) : null}
            </ul>
          </div>
        </div>
      );
    }

    let showMoreHandler = null;
    if (this.state.showMoreHandler) {
      showMoreHandler = (
        <div className="more-wrapper" ref={this.setWrapperRef}>
          <div className="more-popup look look-query">
            <form>
              <div>
                <input type="checkbox" />
                <label>Have 3D Home Tour</label>
                <br />
                <input type="checkbox" />
                <label>Have Basement</label>
                <br />
                <input type="checkbox" />
                <label>Single Story Only</label>
                <br />
              </div>
              <label htmlFor="parking">Parking Spots</label>
              <br />
              <select name="parking" className="parking focus">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">5</option>
              </select>
              <br />
              <label>Year Built</label>
              <br />
              <input type="text" placeholder="From" className="gap focus" />
              <input type="text" placeholder="Too" className="gap focus" />
              <br />
              <label>Size in Marlas</label>
              <br />
              <input type="text" placeholder="From" className="gapa focus" />
              <input type="text" placeholder="Too" className="gap focus" />
            </form>
            <button>Done</button>
          </div>
        </div>
      );
    }

    return (
      <div className="buy-page">
        <div className="search-paramaters">
          <div className="search-input-buy-page">
            <input type="text" placeholder="search for property" />
            <FaSearch className="search-icon" />
          </div>
          <div className="search-paramaters-wrapper">
            <div>
              <button onClick={this.toggelPurposeHandler}>For Sale</button>
              {showPurposePopup}
            </div>
            <div>
              <button onClick={this.toggelPriceHandler}>Price</button>
              {showPriceHandler}
            </div>
            <div>
              <button onClick={this.toggelRoomsHandler}>Beds & Baths</button>
              {showRoomsHandler}
            </div>
            <div>
              <button onClick={this.toggelTypeHandler}>Home Type</button>
              {showTypeHandler}
            </div>
            <div>
              <button onClick={this.toggelMoreHandler}>More</button>
              {showMoreHandler}
            </div>
          </div>
        </div>
        <Maap />
      </div>
    );
  }
}
export default Buy;
