import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/Reservation/calendar.css";

export default function Calendar() {
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
      onChange={date => {
        setStartDate(date);
        console.log(startDate.get);
      }}
      selected={startDate}
      minDate={subDays(new Date(), 0)}
      maxDate={addDays(new Date(), 5)}
      dateFormat="yyyy-MM-dd"
    />
  );
}
