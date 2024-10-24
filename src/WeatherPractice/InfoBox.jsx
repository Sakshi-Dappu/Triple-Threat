import React from "react";
import "./InfoBox.css";

export default function InfoBox({ data, onClick }) {
  return (
    <div>
      {data && (
        <>
          <div className="userInfo">
            {data.resolvedAddress} <br />
            {new Date(data.days[0].datetimeEpoch * 1000).toLocaleString()}
            <button className="newSearchBtn" onClick={onClick}>
              Check different location
            </button>
          </div>

          <div className="InfoCard">
            <li>Temperature:&nbsp;&nbsp;{data.days[0].temp} &nbsp;°C </li>
            {data.days[0].description && (
              <li> Description: &nbsp;&nbsp;{data.days[0].description}</li>
            )}

            <li>Sky Looks:&nbsp;&nbsp; {data.days[0].icon}</li>

            <li>
              Sunrise at: &nbsp;&nbsp;
              {`${parseInt(data.days[0].sunrise.split(":")[0]) % 12 || 12}:${
                data.days[0].sunrise.split(":")[1]
              } ${
                parseInt(data.days[0].sunrise.split(":")[0]) >= 12 ? "PM" : "AM"
              }`}
            </li>
            <li>
              Sunset at:&nbsp; &nbsp;
              {`${parseInt(data.days[0].sunset.split(":")[0]) % 12 || 12}:${
                data.days[0].sunset.split(":")[1]
              } ${
                parseInt(data.days[0].sunset.split(":")[0]) >= 12 ? "PM" : "AM"
              }`}
            </li>
            <li>UV Index: &nbsp;&nbsp; {data.days[0].uvindex}</li>
            <li>Humidity:&nbsp; &nbsp;{data.days[0].humidity} &nbsp;°C</li>
          </div>
        </>
      )}
    </div>
  );
}
