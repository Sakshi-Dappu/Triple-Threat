import React from "react";
import "./InfoBox.css";
 
export default function InfoBox({ data, onClick }) {
  return (
    <div className="box">
      {data && (
        <>
          <div className="userInfo">
            <h3>Provided Details</h3>
            <hr />
            {data.resolvedAddress} <br />
            {new Date(data.days[0].datetimeEpoch * 1000).toLocaleString()}
            <br />
            <button className="newSearchBtn" onClick={onClick}>
              Edit
            </button>
          </div>

          <div className="InfoCard">
            <h3>Weather Info</h3>
            <hr />

            {data.days[0].description && (
              <li> Description: &nbsp;&nbsp;{data.days[0].description}</li>
            )}
            <li>Temperature:&nbsp;&nbsp;{data.days[0].temp} &nbsp;°C </li>

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
            {data.days[0].uvindex && (
              <li>UV Index: &nbsp;&nbsp; {data.days[0].uvindex}</li>
            )}
            <li>Humidity:&nbsp; &nbsp;{data.days[0].humidity} &nbsp;°C</li>
          </div>
        </>
      )}
    </div>
  );
}
