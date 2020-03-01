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
