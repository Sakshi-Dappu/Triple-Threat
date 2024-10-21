import React from "react";
import "./InfoBox.css";
export default function InfoBox({ data }) {
  return (
    <div>
      {data && (
        <div className="InfoCard">
          <div>
            <p>
              {data.resolvedAddress} &nbsp;&nbsp;{data.days[0].datetime}{" "}
              &nbsp;&nbsp;{" "}
              {new Date(data.days[0].datetimeEpoch * 1000).toLocaleString()}{" "}
            </p>

            <li>Condition: &nbsp;&nbsp;{data.days[0].conditions}</li>
            <li> Description: &nbsp;&nbsp;{data.days[0].description}</li>
            <li>Sky Looks:&nbsp;&nbsp; {data.days[0].icon}</li>
          </div>

          <li>Sunrise at: &nbsp;&nbsp;{data.days[0].sunrise}</li>
          <li>Sunset at:&nbsp; &nbsp;{data.days[0].sunset}</li>
          <li>UV Index: &nbsp;&nbsp; {data.days[0].uvindex}</li>
          <li>Humidity:&nbsp; &nbsp;{data.days[0].humidity}</li>
        </div>
      )}
    </div>
  );
}
