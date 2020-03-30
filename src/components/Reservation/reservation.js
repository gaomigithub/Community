import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./searchBar";
import Timetable from "./timetable";

export default function Reservation() {
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div>
        <Timetable />
      </div>
    </div>
  );
}
