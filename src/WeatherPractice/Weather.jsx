import React, { useState } from "react";
import "./Weather.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
export default function Weather() {
  const [info, setInfo] = useState(null);
  const [errData, setErrData] = useState(null);
  const GetData = async (location, eventDate, eventTime) => {
    const API_Key = "YLZJQDHJTSGUDTYJVP3S4ATVZ";
    console.log("In weather app", location, eventDate, eventTime);
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location},IN/${eventDate}T${eventTime}?key=${API_Key}`;

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
      
        {/* <h1>Weather Widget</h1> */}
        <SearchBox onSearch={GetData} />
        <InfoBox data={info} />
      </div>
  
  );
}
