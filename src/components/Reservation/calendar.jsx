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
  // let today = new Date();
  const [startDate, setStartDate] = useState(new Date());

  // function handleChange (date) {
  //   setStartDate({
  //     startDate: date
  //   })
  //   console.log("changed startdate ", startDate)
  // }

  return (
    <DatePicker
      className="calendar-style"
      // Trigger, can/should be changed to other way?
      onChange={date => {
        setStartDate(date)
        console.log(startDate.get)
      }}
      selected={startDate}
      showTimeSelect
      // Time Period
      timeIntervals={60}
      // Min/Max date
      minDate={subDays(new Date(), 0)}
      maxDate={addDays(new Date(), 5)}
      dateFormat="yyyy-MM-dd h:mm:ss a"
    />
  );
}
