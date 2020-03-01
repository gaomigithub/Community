<<<<<<< HEAD
import React, { Component } from "react";
import UserForm from "./components/userform";
import ImageUpload from "./components/userphoto";
class App extends Component {
  render() {
    return (
      <div>
        <ImageUpload />
        <UserForm />
      </div>
    );
  }
}

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import Amplify from "aws-amplify";
// import awsconfig from "./aws-exports";
// import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';

// Amplify.configure(awsconfig);
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default withAuthenticator(App, true, null);
=======
import React from "react";
import Amplify from "aws-amplify";
import { Switch, Route } from "react-router-dom";

import AppWithAuth from "./components/AppWithAuth";
import Landing from "./components/Landing";
// import Login from "./components/Login";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import SignUp from "./components/SignUp";
import awsconfig from "./aws-exports";
import "bootstrap/dist/css/bootstrap.min.css";

Amplify.configure(awsconfig);

export default function App() {
  return (
    <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Landing  />
          </Route>
          <Route path="/about">
            hi
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/AppWithAuth">
            <AppWithAuth />
          </Route>
          <Route path="/login"/>
            {/* <Login /> */}
          <Route />
        </Switch>
        <Footer />
    </div>
  );
}
>>>>>>> a38a2d39165dc3e1855d1bc8e91142fca3228e6e
