import React, { useState } from "react";
import "./Weather.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
export default function Weather() {
  const [info, setInfo] = useState(null);
  const [errData, setErrData] = useState(null);
  const GetData = async (location) => {
    const API_Key = "cb5f39912e548a00caf9112a4f3ae23d";

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_Key}`;
    const response = await fetch(URL);
    const JsonResponse = await response.json();
    console.log(JsonResponse);
    if (JsonResponse.cod == 400 || JsonResponse.cod == 404) {
      setErrData(JsonResponse.message);
      console.log("Error:", JsonResponse.message);
    } else {
      setInfo(JsonResponse);
      console.log("Response:", JsonResponse);
    }
  };

  return (
    <div className="container">
      <h1>Weather Widget</h1>
      <SearchBox onSearch={GetData} />
      <InfoBox data={info} />
    </div>
  );
}
