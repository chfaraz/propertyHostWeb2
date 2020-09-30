import React, { Component } from "react";
import {
  Map,
  Marker,
  Popup,
  TileLayer,
  LayerGroup,
  LayersControl,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import L, { marker } from "leaflet";
import "../../../node_modules/leaflet/dist/leaflet.css";

import homeBlack from "../../Assets/homeBlack.png";
import homeGreen from "../../Assets/homeGreen.png";
import AdDetail from "../../Components/SubComponents/AdDetail";
import homepic from "../../Assets/main-img.jpg";
import location from "../../Assets/pin.svg";

const { BaseLayer } = LayersControl;
class Properties extends Component {
  state = {
    data: [
      {
        id: 1,
        img: homepic,
        position: [33.706299, 73.072407],
        rooms: "bd: 2 bt: 2",
        size: "5 marla",
        price: 2500000,
        purpose: "sell",
      },
      {
        id: 2,
        img: homepic,
        position: [33.698582, 73.067671],
        rooms: "bd: 3 bt: 1",
        size: "10 marla",
        price: 40000,
        purpose: "rent",
      },
      {
        id: 3,
        img: homepic,
        position: [33.692967, 73.052333],
        rooms: "bd: 4 bt: 3",
        size: "7 marla",
        price: 3600000,
        purpose: "sell",
      },
      {
        id: 4,
        img: homepic,
        position: [33.699217, 73.043319],
        rooms: "bd: 3 bt: 3",
        size: "9 marla",
        price: 23000,
        purpose: "rent",
      },
      {
        id: 5,
        img: homepic,
        position: [33.693513, 73.039038],
        rooms: "bd: 3 bt: 3",
        size: "9 marla",
        price: 2300000,
        purpose: "sell",
      },
      {
        id: 6,
        img: homepic,
        position: [33.69349760029637, 73.03894322191782],
        rooms: "bd: 3 bt: 3",
        size: "55 marla",
        price: 300000,
        purpose: "sell",
      },
      {
        id: 7,
        img: homepic,
        position: [33.604801, 72.988886],
        rooms: "bd: 1 bt: 2",
        size: "5 marla",
        price: 1300000,
        purpose: "sell",
      },
      {
        id: 8,
        img: homepic,
        position: [33.60267, 72.985993],
        rooms: "bd: 5 bt: 3",
        size: "15 marla",
        price: 2600000,
        purpose: "sell",
      },
      {
        id: 9,
        img: homepic,
        position: [33.601652, 72.98498],
        rooms: "bd: 6 bt: 6",
        size: "22 marla",
        price: 23600000,
        purpose: "sell",
      },
    ],
    school: [
      {
        id: 1,
        name: "Allied School I-14 Campus",
        position: [33.601749, 72.983722],
      },
      {
        id: 2,
        name: "Bloomfield School",
        position: [33.601799, 72.9873],
      },
      {
        id: 3,
        name: "Quality School",
        position: [33.601189, 72.991068],
      },
    ],
    store: [
      {
        id: 1,
        name: "SJ Mart",
        position: [33.601882, 72.983629],
      },
      {
        id: 2,
        name: "Qazi Super Store",
        position: [33.601467, 72.983032],
      },
      {
        id: 3,
        name: "Cantt Utility Store",
        position: [33.601879, 72.988197],
      },
    ],
    center: [33.698582, 73.067671],
    zoom: 14,
    showDetailPopup: false,
  };
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    this.useEffect();
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

  icon = L.icon({
    iconSize: [30, 30], // size of the icon
    iconUrl: location,
    popupAnchor: [0, -10],
  });
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

  useEffect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handelLocationFound);
    }
  };
  handelLocationFound = (e) => {
    const latlng = [e.coords.latitude, e.coords.longitude];
    this.setState({
      center: latlng,
    });
  };

  createClusterCustomIcon = function (cluster) {
    return L.divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      className: "marker-cluster-custom",
      iconSize: L.point(40, 40, true),
    });
  };
  RefZoom = React.createRef();
  zoom = () => {
    this.setState({ zoom: this.RefZoom.current.leafletElement.getZoom() });
    console.log(this.state.zoom);
    console.log(this.RefZoom.current.leafletElement.getZoom());
  };
  render() {
    let cluster = null;
    let markers = null;
    cluster = (
      <MarkerClusterGroup
        showCoverageOnHover={false}
        iconCreateFunction={this.createClusterCustomIcon}
      >
        {this.props.searchParameters.purpose === "sell"
          ? this.state.data.map((data, index) => {
              return data.purpose === "sell" ? (
                <Marker
                  onClick={this.showDetailPopup}
                  position={data.position}
                  icon={
                    data.purpose === "sell"
                      ? this.homeSellIcon
                      : this.homeRentIcon
                  }
                  onMouseOver={(e) => {
                    e.target.openPopup();
                  }}
                  onMouseOut={(e) => {
                    e.target.closePopup();
                  }}
                  key={data.id}
                >
                  <Popup maxWidth="450">
                    <div className="flex">
                      <img src={data.img} className="popup-img" />
                      <div>
                        <p>Rs: {data.price}</p>
                        <p>{data.rooms}</p>
                        <p>{data.size}</p>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ) : null;
            })
          : null}
      </MarkerClusterGroup>
    );
    markers =
      this.props.searchParameters.purpose === "sell"
        ? this.state.data.map((data, index) => {
            return data.purpose === "sell" ? (
              <Marker
                onClick={this.showDetailPopup}
                position={data.position}
                icon={
                  data.purpose === "sell"
                    ? this.homeSellIcon
                    : this.homeRentIcon
                }
                onMouseOver={(e) => {
                  e.target.openPopup();
                }}
                onMouseOut={(e) => {
                  e.target.closePopup();
                }}
                key={data.id}
              >
                <Popup maxWidth="450">
                  <div className="flex">
                    <img src={data.img} className="popup-img" />
                    <div>
                      <p>Rs: {data.price}</p>
                      <p>{data.rooms}</p>
                      <p>{data.size}</p>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ) : null;
          })
        : null;
    return (
      <div onClick={this.props.hidePopup}>
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
        <Map
          className="map"
          center={this.state.center}
          zoom={this.state.zoom}
          ondrag={this.props.hidePopup}
          maxZoom={19}
          tap={true}
          onzoomend={this.zoom}
          ref={this.RefZoom}
        >
          <LayersControl classNam="layer-control">
            <BaseLayer checked name="open street map">
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </BaseLayer>
            <LayersControl.Overlay name="School">
              <LayerGroup>
                {this.state.school.map((data, index) => {
                  return (
                    <Marker
                      position={data.position}
                      icon={this.homeRentIcon}
                      onMouseOver={(e) => {
                        e.target.openPopup();
                      }}
                      onMouseOut={(e) => {
                        e.target.closePopup();
                      }}
                      key={data.id}
                    >
                      <Popup maxWidth="450">
                        <div>
                          <p>{data.name}</p>
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
              </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay name="Store">
              <LayerGroup>
                {this.state.store.map((data, index) => {
                  return (
                    <Marker
                      position={data.position}
                      icon={this.homeRentIcon}
                      onMouseOver={(e) => {
                        e.target.openPopup();
                      }}
                      onMouseOut={(e) => {
                        e.target.closePopup();
                      }}
                      key={data.id}
                    >
                      <Popup maxWidth="450">
                        <div>
                          <p>{data.name}</p>
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
              </LayerGroup>
            </LayersControl.Overlay>
            {this.state.zoom <= 16 ? cluster : markers}
            {this.props.searchParameters.purpose === "rent"
              ? this.state.data.map((data, index) => {
                  return data.purpose === "rent" ? (
                    <Marker
                      onClick={this.showDetailPopup}
                      position={data.position}
                      icon={
                        data.purpose === "sell"
                          ? this.homeSellIcon
                          : this.homeRentIcon
                      }
                      onMouseOver={(e) => {
                        e.target.openPopup();
                      }}
                      onMouseOut={(e) => {
                        e.target.closePopup();
                      }}
                      key={data.id}
                    >
                      <Popup maxWidth="450">
                        <div className="flex">
                          <img src={data.img} className="popup-img" />
                          <div>
                            <p>Rs: {data.price}</p>
                            <p>{data.rooms}</p>
                            <p>{data.size}</p>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  ) : null;
                })
              : null}
          </LayersControl>
        </Map>
      </div>
    );
  }
}
export default Properties;
