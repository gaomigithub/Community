import React from "react";
import Calendar from "./calendar";
import Select from "react-select";
import TimeSlots from "./timeslots"
import "../../styles/Reservation/searchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      locations: [
        { label: "Basketball Court", value: 1 },
        { label: "Tennis Court", value: 2 }
      ]
    };
  }

  Dropdown = () => (
    <div>
      <Select options={this.state.locations} />
    </div>
  );

  selectedDate = date => {    
    this.setState({date : date}, () => {
      console.log(this.state.date)});
  }

  render() {
    return (
      <div className="search-form">
        <form>
          <h2>Planning Today!</h2>
          <br />
          <span className="search-bar">
            <Calendar selectedDate={this.selectedDate}/>
            <div className="search-dropdown">{this.Dropdown()}</div>
            <button className="search-button" type="submit" onClick={this.props.handleClick}>Go</button>
          </span>
        </form>
      </div>
    );
  }
}

export default SearchBar;
