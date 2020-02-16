import React from "react";
import { render } from "react-dom";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Formgroup, Label, Input } from "react-bootstrap";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.clickhandler = this.clickhandler.bind(this);
  }
  clickhandler() {
    console.log(this.props.history);
    this.props.history.push("../signup-page/Signup-report");
  }

  render() {
    return (
      <div className="Loginpage">
        <div className="header">Welcome to Community</div>
        <div className="content">
          <form className="contentform">
            {/* <div class="form-group-gender">
              <label for="exampleFormControlSelect1">Gender:</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option selected="" value="Default"></option>
                <option>Male</option>
                <option>Female</option>
                <option>Rather not say</option>
              </select>
            </div> */}

            {/* <div class="form-group-username">
              <div class="input-group-prepend">
                <span>@</span>
              </div>

              <input
                type="text"
                class="form-control"
                placeholder="Username"
              ></input>
            </div> */}

            <div class="form-group-name">
              <div class="input-group-prepend">
                <span>Person</span>
              </div>

              <input
                type="text"
                class="form-control"
                placeholder="First Name"
              ></input>
              <input
                type="text"
                class="form-control"
                placeholder="Last Name"
              ></input>
            </div>
            <div class="form-group-email">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              ></input>
            </div>

            <div class="form-group-password">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              ></input>
            </div>

            <div class="form-group-question">
              <label for="exampleFormControlSelect1">Do you have a dog? </label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option selected="" value="Default"></option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div class="form-group-dogbreed">
              <label for="exampleFormControlSelect1">Your's dog breed: </label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option selected="" value="Default"></option>
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

            <div class="form-group-extrainformation">
              <label for="exampleFormControlTextarea1">
                Tell us more about your dog:
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <Button
              variant="primary"
              type="submit"
              class="btn btn-primary"
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

// export default withRouter(Login);
