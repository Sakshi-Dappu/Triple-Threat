import React from "react";
import { useState } from "react";
import "./SearchBox.css";
//Button import code

//Search Box code
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox({ onSearch }) {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleCitySearch = () => {
    if (city) {
      onSearch(city);
    }
  };

  return (
    <div className="search_box">
      <Paper
        className="inp_box"
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Check the skies above your city..."
          inputProps={{ "aria-label": "search google maps" }}
          value={city}
          onChange={handleInputChange}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          onClick={handleCitySearch}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
