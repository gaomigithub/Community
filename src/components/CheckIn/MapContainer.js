import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { withRouter } from "react-router-dom";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.toCheckinPage = this.toCheckinPage.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.state = {
    //   locations: [{ value: "Carleton" }, { value: "North" }],
    // };
  }
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };
  onInfoWindowOpen(props, e) {
    console.log(props);
    const button = (props = (
      <button onClick={this.passLocation}>Check Today!</button>
    ));
    ReactDOM.render(
      React.Children.only(button),
      document.getElementById("iwc")
    );
  }
  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  toCheckinPage = () => {
    console.log(this.state.selectedPlace.name);
  };
  passLocation = () => {
    this.props.getLocation(this.state.selectedPlace.name);
  };

  render() {
    return (
      <div style={{ height: "90vh", width: "100%" }}>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: 42.35, lng: -71.08 }}
        >
          <Marker
            position={{ lat: 42.345614, lng: -71.078502 }}
            onClick={this.onMarkerClick}
            name={"Carleton"}
          />
          <Marker
            position={{ lat: 42.366956, lng: -71.056686 }}
            onClick={this.onMarkerClick}
            name={"North"}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onOpen={(e) => {
              this.onInfoWindowOpen(this.props, e);
            }}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
              <div id="iwc" />
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default withRouter(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY,
  })(MapContainer)
);
