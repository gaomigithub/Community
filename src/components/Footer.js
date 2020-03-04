import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div>
      <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="row">
          <div class="col-12 col-md">
            <img
              class="mb-2"
              src="./assets/logo.svg"
              alt=""
              width="200"
              height="60"
            />
            <small class="d-block mb-3 text-muted">© 2020-2021</small>
          </div>
          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="/">
                  Reservation
                </a>
              </li>{" "}
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>{" "}
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="/">
                  Local Networking
                </a>
              </li>{" "}
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Contact Us</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="/">
                  Team
                </a>
                <br />
                <a class="text-muted" href="/">
                  Project
                </a>
                <br />
                <a class="text-muted" href="/">
                  Terms of UsePrivacy Policy
                </a>
                <br />
                <a class="text-muted" href="/">
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
