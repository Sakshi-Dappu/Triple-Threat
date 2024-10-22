import React, { useState } from "react";
import "./Weather.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function Weather() {
  const [info, setInfo] = useState(null);
  const [errData, setErrData] = useState(false);

  const GetData = async (location, eventDate, eventTime) => {
    const API_Key = "YLZJQDHJTSGUDTYJVP3S4ATVZ";
    // const API_Key = process.env.API_Key;
    console.log("In weather app", location, eventDate, eventTime);
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location},IN/${eventDate}T${eventTime}?key=${API_Key}`;

    const response = await fetch(URL);
    console.log(response);
    console.log("after response");

    if (response.status == 400 || response.status == 404) {
      setErrData(true);
      console.log("Error: Location Not found", response.status);
    } else {
      const JsonResponse = await response.json();
      setInfo(JsonResponse);
      console.log("Response:", JsonResponse);
    }
  };
  const handleNewSearch = () => {
    setInfo(null);
  };

  const INT_URL = "/img/Cloudy.jpeg";

  return (
    <div
      className="newCont"
      style={{
        backgroundImage: `url(${INT_URL})`,
      }}
    >
      {!info && (
        <SearchBox className="SearchBox" onSearch={GetData} error={errData} />
      )}

      {info && (
        <InfoBox
          data={info}
          className="InfoBox"
          onClick={handleNewSearch}
        ></InfoBox>
      )}
    </div>
  );
}
