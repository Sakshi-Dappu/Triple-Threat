import React, { useEffect, useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ onSearch}) {
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
      <div className="Lables">
        <label className="nameLabels">
          E n t e r &nbsp;&nbsp; L o c a t i o n:
        </label>
        &nbsp; &nbsp; &nbsp; 
        <input
          onChange={handleInputChange}
          type="text"
          className="searchBox_placeholder"
          placeholder="Event Location"
          value={location}
        />
        <br />
       
        <br />
        <label className="nameLabels">E n t e r  &nbsp; T i m e :</label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="time"
          className="searchBox_placeholder"
          placeholder="event time"
          onChange={handleEventTime}
          value={eventTime}
        />
        <br />
        <br />
        <label className="nameLabels">
          E n t e r&nbsp;&nbsp;  D a t e:
        </label>
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
        <input
          type="date"
          className="searchBox_placeholder"
          placeholder="Event Date "
          onChange={handleEventDate}
          value={eventDate}
        />
        <br />
        <br />
      </div>
    
        <button className="searchBtn" onClick={handleSearch}>
          Check weather
        </button>
    
      <br />

      <br />
    </div>
  );
}
