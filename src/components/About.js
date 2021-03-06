import React from "react";
import "../styles/About.css";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  let history = useHistory();

  const signUpClickhandler = () => {
    history.push("/login");
  };

  return (
    <div>
      <main>
        <h1 className="subtitle">What we do?</h1>
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
            <img alt="foo" src="./assets/basketballcourt.png" />
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
            <img alt="thing" src="./assets/dogpark.png" />
            <p className="title">Connect with dog owners!</p>
            <p>
              As a dog owner in the South End/Back Bay area, I’d like to check
              in to Carleton Court Dog Park for my dog so that my dog’s friends
              can see that I am there.
            </p>
          </div>
        </div>

        <div>
          <p className="title-last">
            {" "}
            Community is focused on trying to improve the local Boston area
            businesses and everyday life for its residents.{" "}
          </p>
          <button
            className="sign-up"
            type="button"
            onClick={signUpClickhandler}
          >
            Sign Up Here!
          </button>
        </div>
      </main>
    </div>
  );
}
