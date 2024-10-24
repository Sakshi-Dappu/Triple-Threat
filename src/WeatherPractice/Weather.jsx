import React, { useState } from "react";
import "./Weather.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import ErrorBox from "./ErrorBox";

export default function Weather() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);
// const [bgImage, setBgImage] = useState("https://wallup.net/wp-content/uploads/2016/03/10/318375-nature-landscape-lake-mountain-forest-wildflowers-spring-pine_trees-path-Switzerland-HDR.jpg")
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
  const INIT_URL = "https://wallup.net/wp-content/uploads/2016/03/10/318375-nature-landscape-lake-mountain-forest-wildflowers-spring-pine_trees-path-Switzerland-HDR.jpg";

const COLD_URL = "https://s4.scoopwhoop.com/anj/snow/50e4de95-1be0-4440-9efa-995d6eee52ee.jpg";
const HOT_URL = "https://wallpapercave.com/wp/wp3098031.jpg";
const WINDY_URL = "https://wallpapercave.com/wp/wp2108762.jpg";
const RAIN_URL = "https://png.pngtree.com/background/20230616/original/pngtree-rain-falling-down-on-a-tree-leaves-picture-image_3626721.jpg";

let bgImage = INIT_URL;

  if (info) {
    const humid = info.days[0].humidity;
    console.log('Humidity level:', humid);
    if (humid < 10) {
      bgImage = COLD_URL;
    } else if (humid >= 10 && humid < 50) {
    bgImage =   WINDY_URL;
    } else if (humid >= 50 && humid < 75) {
      bgImage = RAIN_URL;
    } else {
      bgImage = HOT_URL;
    }
    console.log('Background Image URL:', bgImage);
  } 

  // Check based on conditions why the bg img are not appearing
  return (
    // <div
    //   className="newCont"
    //   style={{
    //     backgroundImage: `url(${bgImage})`,
    //   }}
    // >
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
