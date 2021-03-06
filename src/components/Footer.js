import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img
              className="mb-2"
              src="./assets/logo.svg"
              alt=""
              width="200"
              height="60"
            />
            <small className="d-block mb-3 text-muted">© 2020-2021</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="/">
                  Reservation
                </a>
              </li>{" "}
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>{" "}
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="/">
                  Local Networking
                </a>
              </li>{" "}
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Contact Us</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="/">
                  Team
                </a>
                <br />
                <a className="text-muted" href="/">
                  Project
                </a>
                <br />
                <a className="text-muted" href="/">
                  Terms of UsePrivacy Policy
                </a>
                <br />
                <a className="text-muted" href="/">
                  Privacy Policy
                </a>
              </li>{" "}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
