import React from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "../styles/Landing.css";
import BgImg from "../img/bg_1.jpg";

var sectionStyle = {
  backgroundImage: `url(${BgImg})`
};

export default function Landing() {
  let history = useHistory();

  const clickhandler = () => {
    history.push("/AppWithAuth");
  };

  return (
    <div className="image-box" style={sectionStyle}>
      <div className="greeting">
        Community
        <div className="buttons">
          <Button variant="success" size="lg" onClick={clickhandler}>
            {" "}
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
