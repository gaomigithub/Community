import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./searchBar";
import { useHistory } from "react-router-dom"

export default function Reservation() {

  const [displayTimeSlots, setDisplay] = useState(false);

  let history = useHistory();

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
        <SearchBar 
        handleClick={handleClick}
        displayStyle={displayStyle}
        displayTimeSlots={displayTimeSlots}
        history={history}/>
      </div>
    </div>
  );
}
