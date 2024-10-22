import React, { useState } from "react";
import "./Weather.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import ErrorBox from "./ErrorBox";

export default function Weather() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);

  const GetData = async (location, eventDate, eventTime) => {
    const API_Key = "YLZJQDHJTSGUDTYJVP3S4ATVZ";
    // const API_Key = process.env.API_Key;
    console.log("In weather app", location, eventDate, eventTime);
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location},IN/${eventDate}T${eventTime}?key=${API_Key}`;

    const response = await fetch(URL);
    console.log(response);
    console.log("after response");

    if (response.status == 400 || response.status == 404) {
      setError(true);
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

  const handleErrorSearch = () => {
    setError(false);
  };

  const INT_URL = "/img/clear sky.jpg";
  const HOT_URL = "/img/Summer.jpg";
  const COLD_URL = "/img/snow.jpg";
  const RAIN_URL = "/img/Rainy weather.jpg";
  const WINDY_URL = "/img/Windy.jpg";

let bgImage = INT_URL;




  return (

    <div
      className="newCont"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {!info && error === false && (
        <SearchBox
          className="SearchBox"
          onSearch={GetData}
          error={error}
          handleErrorSearch={handleErrorSearch}
        />
      )}

      {info && (
        <InfoBox
          data={info}
          className="InfoBox"
          onClick={handleNewSearch}
        ></InfoBox>
      )}

      {error && <ErrorBox onClick={handleErrorSearch} />}
    </div>
  );
}
