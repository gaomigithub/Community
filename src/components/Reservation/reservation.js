import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./searchBar";

export default function Reservation() {
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div>{/* the buttons/table of Time periods */}</div>
    </div>
  );
}
