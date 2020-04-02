import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./searchBar";
import { useHistory } from "react-router-dom"
import { useLocation } from "react-router-dom";

export default function Reservation(props) {

  const [displayTimeSlots, setDisplay] = useState(false);

  let history = useHistory();

  // const location = useLocation();

  // const editDate = location.state === undefined ? null : location.state.date;
  // const editType = location.state === undefined ? null : location.state.type;

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
        history={history}
        editDate={null}
        editType={null}/>
      </div>
    </div>
  );
}
