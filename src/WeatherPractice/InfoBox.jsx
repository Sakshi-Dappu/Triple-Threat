import React from "react";
import "./InfoBox.css";
export default function InfoBox({ data }) {
  const convertToReadablrFormat = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleString();
  };

  return (
    <div>
      {data && (
        <div className="InfoCard">
          <p>
            <b>Location:&nbsp;</b> {data.name}
          </p>
          <p>
            <b>Date: &nbsp;</b>
            {convertToReadablrFormat(data.dt)}
          </p>
          <p>
            <b>Feels Like: &nbsp;</b>
            {data.main.feels_like}°C
          </p>
          <p>
            <b>Humidity: &nbsp;</b>
            {data.main.humidity}%
          </p>
          <p>
            <b>Sea Level: &nbsp;</b>
            {data.main.sea_level} hPa
          </p>
          <p>
            <b>Temperature: &nbsp;</b>
            {data.main.temp} °C
          </p>
          <p>
            <b>Country: &nbsp;</b>
            {data.sys.country}
          </p>
          <p>
            <b>Sunrise: &nbsp;</b>
            {convertToReadablrFormat(data.sys.sunrise)}
          </p>
          <p>
            <b>Sunset: &nbsp;</b>
            {convertToReadablrFormat(data.sys.sunset)}
          </p>
          <p>
            <b>Atmosphere: &nbsp;</b>
            {data.weather[0].main}
          </p>
          <p>
            <b>Description: &nbsp;</b>
            {data.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
}

// import React from "react";
// import "./InfoBox.css";

// export default function InfoBox({ data }) {
//   // Function to convert Unix timestamp to readable format
//   const convertToReadableFormat = (unixTimestamp) => {
//     const date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds
//     return date.toLocaleString(); // Return readable format like "MM/DD/YYYY, HH:MM:SS"
//   };

//   return (
//     <div>
//       {data && (
//         <div className="InfoCard">
//           <p><b>Location:&nbsp;</b>{data.name}</p>
//           <p><b>Date: &nbsp;</b>{convertToReadableFormat(data.dt)}</p> {/* Convert dt */}
//           <p><b>Feels Like: &nbsp;</b>{data.main.feels_like}°C</p>
//           <p><b>Humidity: &nbsp;</b>{data.main.humidity}%</p>
//           <p><b>Sea Level: &nbsp;</b>{data.main.sea_level} hPa</p>
//           <p><b>Temperature: &nbsp;</b>{data.main.temp}°C</p>
//           <p><b>Country: &nbsp;</b>{data.sys.country}</p>
//           <p><b>Sunrise: &nbsp;</b>{convertToReadableFormat(data.sys.sunrise)}</p> {/* Convert sunrise */}
//           <p><b>Sunset: &nbsp;</b>{convertToReadableFormat(data.sys.sunset)}</p> {/* Convert sunset */}
//           <p><b>Atmosphere: &nbsp;</b>{data.weather[0].main}</p>
//           <p><b>Description: &nbsp;</b>{data.weather[0].description}</p>
//         </div>
//       )}
//     </div>
//   );
// }
