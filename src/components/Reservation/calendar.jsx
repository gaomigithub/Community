import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/Reservation/calendar.css";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <DatePicker
        className="calendar-style"
        selected={this.state.startDate}
        onChange={this.handleChange}
        showTimeSelect
        timeIntervals={60}
        minDate={moment()}
        minTime={moment()
          .hours(11)
          .minutes(0)}
        maxTime={moment()
          .hours(22)
          .minutes(0)}
        dateFormat="LLL"
      />
    );
  }
}

export default Calendar;
