import React, { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ onSearch }) {
  const [location, setLocation] = useState("");

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    if (location) {
      onSearch(location);
    }
  };

  return (
    <div className="searchBoxContainer">
      <input
        onChange={handleInputChange}
        type="text"
        className="searchBox"
        placeholder="Enter location to get weather data"
        required
      />

      {location && (
        <button className="searchBtn" onClick={handleSearch}>
          Check sky
        </button>
      )}

      <br />
    </div>
  );
}
