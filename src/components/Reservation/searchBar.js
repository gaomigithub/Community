// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function Reservation() {
//   return <div></div>;
// }

import React from "react";
import Calendar from "./calendar";
import Dropdown from "./locationDropdown";
import "../../styles/Reservation/searchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  // componentDidMount() {
  //   this.props.fetchCourts();
  // }
  yarnsss;
  handleClick(e) {
    e.preventDefault();
    // this.props.searchCourts(this.state.search);
  }

  update(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    return (
      <div className="search-form">
        <form onSubmit={e => this.handleClick(e)}>
          <h2>Planning Today!</h2>
          <br />
          <span className="search-bar">
            <Calendar />
            {/* Maybe should be changed to drop down list for the Courts*/}
            {/* <input
              className="search-input"
              placeholder="Court/Street Name"
              value={this.state.search}
              onChange={e => this.update(e)}
            /> */}
            <div className="search-dropdown">
              <Dropdown />
            </div>

            <input className="search-button" type="submit" value="Go"></input>
          </span>
        </form>
      </div>
    );
  }
}

export default SearchBar;
