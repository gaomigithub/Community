import React, { PropTypes, Component } from "react";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Container, Row, Button, Col } from "react-bootstrap";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const InfoWindow = (props) => {
  switch (props.location) {
    case "North":
      return "North Park";
    case "Carleton":
      return "Carleton Park";
    default:
      return "Please choose one park.";
  }
};

const Marker = (props) => (
  <FaMapMarkerAlt color="tomato" size={30}>
    <InfoWindow location={props.location} />
  </FaMapMarkerAlt>
);

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 42.35,
        lng: -71.08,
      },
      zoom: 14,
      location: null,
    };
  }

  _onChildClick = (key, childProps) => {
    this.setState({ location: childProps.location });
    console.log(childProps.location);
    console.log(this.location);
  };

  render() {
    return (
      <div>
        <Row style={{ height: "90vh", width: "100%" }}>
          <Col md={10} xs={10}>
            <GoogleMapReact
              yesIWantToUseGoogleMapApiInternals
              bootstrapURLKeys={{
                key: "AIzaSyDn3acXRxymfGDBtUclrpGygyzkXRSuIL8",
                language: "en",
              }}
              defaultCenter={this.state.center}
              defaultZoom={this.state.zoom}
              onChildClick={this._onChildClick}
              // onChildMouseEnter={this.onChildMouseEnter}
              // onChildMouseLeave={this.onChildMouseLeave}
            >
              <Marker
                key={1}
                lat={42.345614}
                lng={-71.078502}
                location={"Carleton"}
                onClick={() => {
                  console.log("test");
                  // this.setState({ location: "Carleton" });
                  // console.log(this.state.location);
                }}
              />
              <Marker
                key={2}
                lat={42.366956}
                lng={-71.056686}
                location={"North"}
              />
            </GoogleMapReact>
          </Col>
          <Col>
            <h2 className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
              Current Status
            </h2>
            <InfoWindow show={this.state.show} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default SimpleMap;
