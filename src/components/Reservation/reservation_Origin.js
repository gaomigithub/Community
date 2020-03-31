import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./searchBar";
import TimeSlots from "./timeslots"

export default function Reservation() {

  const [displayTimeSlots, setDisplay] = useState(false);
  
  function handleClick(e) {
    e.preventDefault();
    setDisplay(true);
  }

  const displayStyle = {
    display : displayTimeSlots ? "block" : 'none'
  }

  return (
    <div>
      <div>
        <SearchBar handleClick={handleClick}/>
        <div style={displayStyle}>
          <TimeSlots />
        </div>
      </div>
    </div>
  );
}
