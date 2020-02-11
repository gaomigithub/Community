import React, { Component } from "react";
class Main extends Component {
  render() {
    return (
      <main>
        <h2 className="subtitle">What we do?</h2>
        <p className="intro">
          Community is an application that allows residents to book times at the
          courts and inform other dog owning neighbors that they are at the dog
          park via QR code. Community is also an application for local
          businesses to connect with its residents by paying to advertise their
          products and services as well as host events. Community is focused on
          trying to improve the local Boston area businesses and everyday life
          for its residents.
        </p>

        <div className="cards-container">
          <div className="card-left">
            <img src="./assets/basketballcourt.png" />
            <p className="title">Reserve Courts, no waiting!</p>
            <p>
              As a tennis player in the South End/Back Bay area, I’d like to
              reserve a tennis court so that I can play tennis with my friends.
              As a basketball player in the South End/Back Bay area, I’d like to
              reserve a basketball court so that I can play basketball with my
              friends
            </p>
          </div>

          <div className="card-right">
            <img src="./assets/dogpark.png" />
            <p className="title">Connect with dog owners!</p>
            <p>
              As a dog owner in the South End/Back Bay area, I’d like to check
              in to Carleton Court Dog Park for my dog so that my dog’s friends
              can see that I am there.
            </p>
          </div>
        </div>

        <h2 className="subtitle">Let us make your visit more meaningful!</h2>
        <div className="floats-container trigger">
          <img src="./assets/time.png" />
          <p>Reserve on time</p>
        </div>

        <div className="floats-container-reverse">
          <img className="c" src="./assets/dogownerfun.png" />
          <p className="d">Connect with community dog owners.</p>
        </div>

        <div className="floats-container">
          <img src="./assets/events.png" />
          <p>Enjoy events hosted by community businesses.</p>
        </div>

        <div>
          <p className="title-last">
            {" "}
            Community is focused on trying to improve the local Boston area
            businesses and everyday life for its residents.{" "}
          </p>
          <button className="sign-up" type="button">
            Sign Up Here!
          </button>
        </div>

        <footer>
          <ul>
            <li>
              <a href="#"> &copy; Community</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-google-play"></i>
              </a>
            </li>
          </ul>
        </footer>
      </main>
    );
  }
}

export default Main;
