import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
export default function Weather() {
  const [weather, setWeather] = useState("");
  const API_Key = "cb5f39912e548a00caf9112a4f3ae23d";

  const WeatherResponse = async (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_Key}`;

    try {
      let response = await fetch(URL);
      let JSONResponse = await response.json();
      console.log(JSONResponse);
      setWeather(JSONResponse);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return (
    <div>
      <SearchBox onSearch={WeatherResponse} />
      <InfoBox value={weather} />
    </div>
  );
}
