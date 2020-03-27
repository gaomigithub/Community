import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setMinutes";
import setMinutes from "date-fns/setMinutes";
import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/Reservation/calendar.css";

// function handleChange(date) {
//   this.setState({
//     startDate: date
//   });
// }
export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      className="calendar-style"
      selected={startDate}
      // Trigger, can/should be changed to other way?
      onChange={date => setStartDate(date)}
      showTimeSelect
      // Time Period
      timeIntervals={60}
      // Min/Max date
      minDate={subDays(new Date(), 0)}
      maxDate={addDays(new Date(), 5)}
      dateFormat="LLL"
    />
  );
}
