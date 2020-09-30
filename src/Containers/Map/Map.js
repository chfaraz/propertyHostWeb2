import React, { Component } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import location from "../../Assets/pin.svg";
import L from "leaflet";
class Maap extends Component {
  state = {
    zoom: 14,
    latlng: [33.698582, 73.067671],
  };
  icon = L.icon({
    iconSize: [30, 30], // size of the icon
    iconUrl: location,
    popupAnchor: [0, -10],
  });
  componentDidMount() {
    this.useEffect();
  }

  useEffect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handelLocationFound);
    }
    console.log(this.state.latlng);
  };
  handelLocationFound = (e) => {
    const latlng = [e.coords.latitude, e.coords.longitude];
    this.setState({
      latlng: latlng,
    });
    console.log(this.state.latlng);
  };
  render() {
    return (
      <div>
        <span>
          Zoom in, drag the marker, set it exectly on your property and then
          press ok.
        </span>
        <button onClick={this.props.click}>ok</button>
        <Map
          className="map"
          center={this.state.latlng}
          zoom={this.state.zoom}
          maxZoom={19}
          tap={true}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            ref={this.props.refmarker}
            position={this.state.latlng}
            icon={this.icon}
            draggable={true}
            onMoveend={this.props.handleMoveend}
          ></Marker>
        </Map>
      </div>
    );
  }
}
export default Maap;
