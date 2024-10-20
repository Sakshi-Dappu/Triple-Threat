import React, { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ onSearch }) {
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
      <label className="nameLabels">Enter Location:</label>
      <input
        onChange={handleInputChange}
        type="text"
        className="searchBox_placeholder"
        placeholder="Event Location"
      />
      <br />

      <label className="nameLabels">Enter Event Time:</label>
      <input
        type="time"
        className="searchBox_placeholder"
        placeholder="event time"
        onChange={handleEventTime}
      />
      <br />
      <label className="nameLabels">Enter Event Date:</label>
      <input
        type="date"
        className="searchBox_placeholder"
        placeholder="Event Date "
        onChange={handleEventDate}
      />
      <br />

      {location && (
        <button className="searchBtn" onClick={handleSearch}>
          Check sky
        </button>
      )}
      <br />
    </div>
  );
}
