import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./searchBar";
import TimeSlots from "./timeslots"

export default function Reservation() {
  return (
    <div>
      <div>
        <SearchBar />
        <TimeSlots />
      </div>
      <div>{/* the buttons/table of Time periods */}</div>
    </div>
  );
}
