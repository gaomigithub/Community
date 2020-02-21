import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Loginform.css";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { render } from "react-dom";
//Google Login doesn't work yet; Under construction
import "./googlelogin.js";
import { GoogleLogin } from "react-google-login";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.clickhandler = this.clickhandler.bind(this);
  }
  clickhandler() {
    this.props.history.push("../signup-report");
  }

  render() {
    return (
      <div className="Loginpage">
        <div className="header">Welcome to Community</div>
        <div className="content">
          <form className="contentform">
            <div className="form-group-name">
              <div className="input-group-prepend">
                <span>Person</span>
              </div>

              <input
                type="text"
                className="form-control"
                placeholder="First Name"
              ></input>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
              ></input>
            </div>
            <div className="form-group-email">
              <label htmlFor="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              ></input>
            </div>

            <div className="form-group-password">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              ></input>
            </div>

            <div className="form-group-question">
              <label htmlFor="exampleFormControlSelect1">
                Do you have a dog?{" "}
              </label>
              <select
                defaultValue="Default"
                className="form-control-dog"
                id="exampleFormControlSelect1"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div className="form-group-dogbreed">
              <label htmlFor="exampleFormControlSelect2">
                Your's dog breed:{" "}
              </label>
              <select
                defaultValue="Default"
                className="form-control-breed"
                id="exampleFormControlSelect2"
              >
                <option value="gt">Golden Retriver</option>
                <option value="bt">Boston Terrier</option>
                <option value="bd">Bull Dog</option>
                <option value="mt">Maltese</option>
                <option value="sz">Shih Tzu</option>
                <option value="bg">Beagle</option>
                <option value="ch">Chihuahua</option>
                <option value="gs">German Shepherd</option>
                <option value="ot">Specify other breed below: </option>
              </select>
            </div>

            <div className="form-group-extrainformation">
              <label htmlFor="exampleFormControlTextarea1">
                Tell us more about your dog:
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <Button
              variant="primary"
              type="submit"
              className="btn btn-primary"
              onClick={this.clickhandler}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
