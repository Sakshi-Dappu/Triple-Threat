import React, { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ onSearch, error }) {
  const [location, setLocation] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    if (location && eventDate && eventTime) {
      onSearch(location, eventDate, eventTime);
    } else {
      alert("Please fill in all the fields");
    }
  };

  const handleEventDate = (e) => {
    setEventDate(e.target.value);
  };

  const handleEventTime = (e) => {
    const time = e.target.value;
    setEventTime(`${time}:00`);
  };

  return (

    <div className="searchBoxContainer">

      {error && <h3>Location not found</h3>}
      <div className="Lables">
        <label className="nameLabels">
          E n t e r &nbsp;&nbsp; L o c a t i o n:
        </label>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <input
          onChange={handleInputChange}
          type="text"
          className="searchBox_placeholder"
          placeholder="Event Location"
        />
        <br />
        <br />
        <label className="nameLabels">E n t e r &nbsp; T i m e :</label>
        &nbsp; &nbsp; &nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="time"
          className="searchBox_placeholder"
          placeholder="event time"
          onChange={handleEventTime}
        />
        <br />
        <br />
        <label className="nameLabels">
          E n t e r&nbsp;&nbsp; E v e n t D a t e:
        </label>
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
        <input
          type="date"
          className="searchBox_placeholder"
          placeholder="Event Date "
          onChange={handleEventDate}
        />
        <br />
      </div>
      <button className="searchBtn" onClick={handleSearch}>
        Check weather
      </button>

      <br />
    </div>
  );
}
