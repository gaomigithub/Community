import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import "../styles/Landing.css";
import BgImg from "../img/bg_1.jpg";

var sectionStyle = {
  backgroundImage: `url(${BgImg})`
};

export default function Landing() {
  let history = useHistory();

  const clickhandler = () => {
    history.push("/");
  };

  return (
    <div className="image-box" style={sectionStyle}>
      <h1>Welcome to Community</h1>
      <div></div>
    </div>
  );
}
