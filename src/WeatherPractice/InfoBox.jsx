import React from "react";
import "./InfoBox.css";
export default function InfoBox({ data }) {
  return (
    <div>
      {data && (
        <div className="InfoCard">
          {/* <div>{data.resolvedAddress || "Location not available"}</div> */}
          <div>
            <h5>Weather Forecast on provided info</h5>
            <li>Condition: &nbsp;&nbsp;{data.days[0].conditions}</li>
            <li>Description: &nbsp;&nbsp;{data.description}</li>
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
