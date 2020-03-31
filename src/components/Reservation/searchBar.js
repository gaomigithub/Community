import React from "react";
import Calendar from "./calendar";
import TimeSlots from "./timeslots"
import Select from "react-select";
import "../../styles/Reservation/searchBar.css";
import { Container, Row, Button } from "react-bootstrap";
import { API, graphqlOperation } from "aws-amplify";
import { checkReservation } from "../../graphql/queries";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      type: null,
      locations: [
        { label: "Basketball Court", value: "BASKETBALL" },
        { label: "Tennis Court", value: "TENNIS" }
      ]
    };
  }

  handleChange = (e) => {
    this.setState({type: e.value}, () => console.log(this.state.type))
  }

  Dropdown = () => (
    <div>
      <Select 
        options={this.state.locations} 
        onChange={this.handleChange}/>
    </div>
  );

  selectedDate = date => {    
    this.setState({date : date}, () => {
      console.log(this.state.date)});
  }

  render() {
    return (
      <div>
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
        <div>
          <div style={this.props.displayStyle}>
            <TimeSlots 
              date={this.state.date}
              type={this.state.type}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
