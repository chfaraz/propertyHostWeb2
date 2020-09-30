import React, { Component } from "react";
import Maap from "../Containers/Map/Properties";
import { FaSearch } from "react-icons/fa";
const patterns = {
  buildYear: /^(19|20)\d{2}$/,
};
class Buy extends Component {
  state = {
    searchParameters: {
      sellChecked: true,
      rentChecked: false,
      purpose: "sell",
      priceFrom: "",
      priceToo: "",
      bedRoomsFrom: "",
      bedRoomsToo: "",
      bathRoomsFrom: "",
      bathRoomsToo: "",
      threeDTour: "off",
      basement: "off",
      singleStory: "off",
      parking: "--",
      buildYearFrom: "",
      buildYearToo: "",
      sizeType: "Marla",
      sizeFrom: "",
      sizeToo: "",
      propertyType: "",
    },
    error: {
      buildYearFrom: "",
      buildYearToo: "",
    },
    showPurposePopup: false,
    showPriceHandler: false,
    showRoomsHandler: false,
    showTypeHandler: false,
    showHomeType: false,
    showPlotType: false,
    showMoreHandler: false,
    showCommercialType: false,
    active: false,
  };

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
  hidePopup = () => {
    this.setState({ showMoreHandler: false });
    this.setState({ showTypeHandler: false });
    this.setState({ showPurposePopup: false });
    this.setState({ showPriceHandler: false });
    this.setState({ showRoomsHandler: false });
  };
  handleChange = (e) => {
    const currentState = { ...this.state };
    var key = e.target.name;
    var value = e.target.value;
    let form = currentState.searchParameters;
    form[key] = value;
    this.setState({
      searchParameters: form,
    });

    if (
      !this.validation(
        this.state.searchParameters.buildYearFrom,
        patterns["buildYear"]
      ) &&
      e.target.name === "buildYearFrom"
    ) {
      let preState = { ...this.state };
      preState.error.buildYearFrom = true;
      this.setState({ preState });
    } else if (
      this.validation(
        this.state.searchParameters.buildYearFrom,
        patterns["buildYear"]
      ) &&
      e.target.name === "buildYearFrom"
    ) {
      let preState = { ...this.state };
      preState.error.buildYearFrom = false;
      this.setState({ preState });
    }
    if (
      !this.validation(
        this.state.searchParameters.buildYearToo,
        patterns["buildYear"]
      ) &&
      e.target.name === "buildYearToo"
    ) {
      let preState = { ...this.state };
      preState.error.buildYearToo = true;
      this.setState({ preState });
    } else if (
      this.validation(
        this.state.searchParameters.buildYearToo,
        patterns["buildYear"]
      ) &&
      e.target.name === "buildYearToo"
    ) {
      let preState = { ...this.state };
      preState.error.buildYearToo = false;
      this.setState({ preState });
    }

    console.log(this.state.searchParameters);
  };
  checkedChange = () => {
    const currentState = { ...this.state };
    if (this.state.searchParameters.purpose === "sell") {
      currentState.searchParameters.sellChecked = true;
      currentState.searchParameters.rentChecked = false;
      this.setState({ currentState });
    } else if (this.state.searchParameters.purpose === "rent") {
      currentState.searchParameters.rentChecked = true;
      currentState.searchParameters.sellChecked = false;
      this.setState({ currentState });
    }
  };
  validation = (e, regex) => {
    return regex.test(e);
  };
  render() {
    let showPurposePopup = null;
    if (this.state.showPurposePopup) {
      showPurposePopup = (
        <div className="purpose-wrapper" ref={this.setWrapperRef}>
          <div className="purpose-popup look">
            <form>
              <input
                type="radio"
                name="purpose"
                value="sell"
                checked={this.state.searchParameters.sellChecked}
                onClick={this.handleChange}
                onChange={this.checkedChange}
              />
              <label htmlFor="sale">For Sale</label>
              <br />
              <input
                type="radio"
                name="purpose"
                checked={this.state.searchParameters.rentChecked}
                value="rent"
                onClick={this.handleChange}
                onChange={this.checkedChange}
              />
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
              <input
                type="number"
                placeholder="From"
                name="priceFrom"
                className="focus"
                onChange={this.handleChange}
              />
              {" -"}

              <input
                type="number"
                placeholder="Too"
                name="priceToo"
                className="focus"
                onChange={this.handleChange}
              />
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
              <input
                type="text"
                placeholder="From"
                name="bedRoomsFrom"
                onChange={this.handleChange}
                className="focus"
              />{" "}
              -
              <input
                type="text"
                placeholder="Too"
                name="bedRoomsToo"
                onChange={this.handleChange}
                className="focus"
              />
              <br />
              <label>No fo Baths</label>
              <br />
              <input
                type="text"
                placeholder="From"
                name="bathRoomsFrom"
                onChange={this.handleChange}
                className="focus"
              />{" "}
              -
              <input
                type="text"
                placeholder="Too"
                name="bathRoomsToo"
                onChange={this.handleChange}
                className="focus"
              />
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
            <select
              onClick={this.handleChange}
              name="propertyType"
              className="parking focus property-type-dropdown"
            >
              <option value="All Homes">All Homes</option>
              <option value="House">House</option>
              <option value="Flat">Flat</option>
            </select>
            <select
              onClick={this.handleChange}
              name="propertyType"
              className="parking focus property-type-dropdown"
            >
              <option value="Plots  ">Plots</option>
              <option value="Residential Plot">Residential Plot</option>
              <option value="Commercial Plot">Commercial Plot</option>
              <option value="Agricultral Plot">Agricultral Plot</option>
            </select>
            <select
              onClick={this.handleChange}
              name="propertyType"
              className="parking focus property-type-dropdown"
            >
              <option value="Commercial">Commercial</option>
              <option value="Shop">Shop</option>
              <option value="Office">Office</option>
              <option value="Ware House">Ware House</option>
            </select>
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
                <input
                  type="checkbox"
                  onChange={this.handleChange}
                  name="threeDTour"
                />
                <label>Have 3D Home Tour</label>
                <br />
                <input
                  type="checkbox"
                  onChange={this.handleChange}
                  name="basement"
                />
                <label>Have Basement</label>
                <br />
                <input
                  type="checkbox"
                  onChange={this.handleChange}
                  name="singleStory"
                />
                <label>Single Story Only</label>
                <br />
              </div>
              <label htmlFor="parking">Parking Spots</label>
              <br />
              <select
                onChange={this.handleChange}
                name="parking"
                className="parking focus"
              >
                <option value="1">--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">5</option>
                <option value="4">More then 5</option>
              </select>
              <br />
              <label>Year Built</label>
              <br />
              <input
                type="number"
                placeholder="From"
                name="buildYearFrom"
                onChange={this.handleChange}
                className={
                  this.state.error.buildYearFrom ? "invalid gap" : "gap"
                }
              />
              <input
                type="number"
                placeholder="Too"
                name="buildYearToo"
                onChange={this.handleChange}
                className={
                  this.state.error.buildYearToo ? "invalid gap" : "gap"
                }
              />
              {this.state.error.buildYearFrom ||
              this.state.error.buildYearToo ? (
                <p>Write Year in this formate " 2005 "</p>
              ) : null}

              <div className="flex-size">
                <label>Size in</label>
                <select
                  name="sizeType"
                  className="gapa focus"
                  onChange={this.handleChange}
                >
                  <option>Marla</option>
                  <option>Canal</option>
                  <option>Acer</option>
                </select>
              </div>
              <br />
              <input
                type="number"
                placeholder="From"
                name="sizeFrom"
                onChange={this.handleChange}
                className="gapa focus"
              />
              <input
                type="number"
                placeholder="Too"
                name="sizeToo"
                onChange={this.handleChange}
                className="gap focus"
              />
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
              <button
                id={this.state.showPurposePopup ? "activeBtn" : null}
                onClick={this.toggelPurposeHandler}
              >
                {this.state.searchParameters.purpose === "sell"
                  ? "For Sale"
                  : "For Rent"}
              </button>
              {showPurposePopup}
            </div>
            <div>
              <button
                id={this.state.showPriceHandler ? "activeBtn" : null}
                onClick={this.toggelPriceHandler}
              >
                Price
              </button>
              {showPriceHandler}
            </div>
            <div>
              <button
                id={this.state.showRoomsHandler ? "activeBtn" : null}
                onClick={this.toggelRoomsHandler}
              >
                Beds & Baths
              </button>
              {showRoomsHandler}
            </div>
            <div>
              <button
                id={this.state.showTypeHandler ? "activeBtn" : null}
                onClick={this.toggelTypeHandler}
              >
                {this.state.searchParameters.propertyType === ""
                  ? "Home Type"
                  : this.state.searchParameters.propertyType}
              </button>
              {showTypeHandler}
            </div>
            <div>
              <button
                id={this.state.showMoreHandler ? "activeBtn" : null}
                onClick={this.toggelMoreHandler}
              >
                More
              </button>
              {showMoreHandler}
            </div>
          </div>
        </div>
        <Maap
          searchParameters={this.state.searchParameters}
          hidePopup={this.hidePopup}
        />
      </div>
    );
  }
}
export default Buy;
