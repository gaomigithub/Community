import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/Reservation/calendar.css";

export default function Calendar(props) {
  const [startDate, setStartDate] = useState(new Date());

  async function sendSelectedDate(date) {
    await props.selectedDate(date)
  }

  useEffect(() => {
    console.log("changed startdate ", startDate)
  },[startDate]);

  return (
    <DatePicker
      className="calendar-style"
      onChange={date => {
        console.log("onchange date: ", date)
        setStartDate(date)
        sendSelectedDate(date)
      }}
      selected={startDate}
      minDate={subDays(new Date(), 0)}
      maxDate={addDays(new Date(), 5)}
      dateFormat="yyyy-MM-dd"
    />
  );
}
