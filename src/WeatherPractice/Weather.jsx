import React, { useState, useEffect } from "react";
import "./Weather.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import ErrorBox from "./ErrorBox";
import Clothing from "./Clothing";
import Loader from "./Loader";

export default function Weather() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);
  const GetData = async (location, eventDate, eventTime) => {
    const API_Key = "YLZJQDHJTSGUDTYJVP3S4ATVZ";

    console.log("In weather app", location, eventDate, eventTime);
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location},IN/${eventDate}T${eventTime}?key=${API_Key}`;

    const response = await fetch(URL);
    console.log(response);

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

  useEffect(() => {
    <Loader />;
  }, info);

  const handleErrorSearch = () => {
    setError(false);
  };
  const INIT_URL =
    "https://www.capuchinfranciscans.ie/wp-content/uploads/2022/10/Clouds.jpg";

  const COLD_URL =
    "https://s4.scoopwhoop.com/anj/snow/50e4de95-1be0-4440-9efa-995d6eee52ee.jpg";
  const HOT_URL =
    "https://www.zastavki.com/pictures/originals/2015/Nature_A_bright_summer_sun_in_the_sky_093669_.jpg";
  const CLOUDY_URL = "https://getwallpapers.com/wallpaper/full/e/9/d/16791.jpg";
  const RAIN_URL =
    "https://png.pngtree.com/background/20230616/original/pngtree-rain-falling-down-on-a-tree-leaves-picture-image_3626721.jpg";

  let bgImage = INIT_URL;

  if (info) {
    const temp = info.days[0].temp;
    const humid = info.days[0].humidity;
    console.log("Temp level:", temp);
    if (temp < -5 && temp <= 10) {
      bgImage = COLD_URL;
    } else if (temp >= 20 && temp < 30) {
      bgImage = RAIN_URL;
    } else if (temp >= 30 && temp < 80 && humid >= 45) {
      bgImage = CLOUDY_URL;
    } else {
      bgImage = HOT_URL;
    }
    console.log("Background Image URL:", bgImage);
  }

  return (
    <div
      className="newCont"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="Col_one">
        {!info && error === false && (
          <SearchBox
            className="SearchBox"
            onSearch={GetData}
            error={error}
            handleErrorSearch={handleErrorSearch}
          />
        )}
        <Loader />
        {info && (
          <InfoBox
            data={info}
            className="InfoBox"
            onClick={handleNewSearch}
          ></InfoBox>
        )}
      </div>
      <div className="col_two">
        {info && (
          <Clothing
            className="Clothing_Box"
            temp={info.days[0].temp}
            humid={info.days[0].humidity}
          />
        )}
      </div>

      {error && <ErrorBox onClick={handleErrorSearch} />}
    </div>
  );
}
