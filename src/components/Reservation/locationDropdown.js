import React from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

const locations = [
  { label: "Basketball Court", value: 1 },
  { label: "Tennis Court", value: 2 }
];

const Dropdown = () => (
  <div>
    <Select options={locations} />
  </div>
);

export default Dropdown;
