import React, {Component} from "react";
import "./App.css";
//import { Login } from "./Signuppage/index.js";
import {DogForm} from './Dogprofile/DogForm';


import { render } from "@testing-library/react";

//function App() {
  class App extends Component{ 
  render() {
    return (
    //<div className="APP">
    // <Login />
    //</div>
    <div className="App">
      <DogForm />
    </div>
    );
  }
}
export default App;
