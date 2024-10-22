import React from "react";
import "./InfoBox.css";

export default function InfoBox({ data, onClick }) {
  return (
    <div>
      {data && (
        <>
          <div className="userInfo">
            {data.resolvedAddress} &nbsp;&nbsp;{data.days[0].datetime}
            &nbsp;&nbsp;
            {new Date(data.days[0].datetimeEpoch * 1000).toLocaleString()}
            <button className="newSearchBtn" onClick={onClick}>
              New Search
            </button>
          </div> 

          <div className="InfoCard">
            <li>Condition: &nbsp;&nbsp;{data.days[0].conditions}</li>
            <li> Description: &nbsp;&nbsp;{data.days[0].description}</li>
            <li>Sky Looks:&nbsp;&nbsp; {data.days[0].icon}</li>

            <li>Sunrise at: &nbsp;&nbsp;{data.days[0].sunrise}</li>
            <li>Sunset at:&nbsp; &nbsp;{data.days[0].sunset}</li>
            <li>UV Index: &nbsp;&nbsp; {data.days[0].uvindex}</li>
            <li>Humidity:&nbsp; &nbsp;{data.days[0].humidity}</li>
          </div>
        </>
      )}
    </div>
  );
}
