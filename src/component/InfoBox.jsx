import React from "react";

export default function InfoBox({ value }) {
  if (!value || !value.city || !value.list || value.list.length === 0) {
    return <h2>"Search For a location"</h2>;
  }

  const city_name = value.city.name;
  const population = value.city.population;
  const sunrise = new Date(value.city.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(value.city.sunset * 1000).toLocaleTimeString();

  const WeatherInfo = value.list.map((item, index) => {
    const DateNTime = item.dt_txt;
    const Description = item.weather[0].description;
    const Climate = item.weather[0].main;
    const temperature = item.main.temp;
    const Humidity = item.main.humidity;

    return (
      <div key={index}>
        
        <p><b>Population:</b> {population}</p>
        <p><b>Sunrise:</b> {sunrise}</p>
        <p><b>Sunset: </b>{sunset}</p>
      </div>
    );
  });
  return (
    <div>
      <h1>City Name: {city_name}</h1>
      <p>Population: {population}</p>
      <p>Sunrise: {sunrise}</p>
      <p>Sunset: {sunset}</p>
      <div>{WeatherInfo}</div>
    </div>
  );
}

// import React from "react";

// export default function InfoBox({ value }) {
//   if (!value || !value.city || !value.list || value.list.length === 0) {
//     return <p>Search for a location</p>; // Improved check for valid data
//   }

//   const city_name = value.city.name;
//   const population = value.city.population;
//   const sunrise = new Date(value.city.sunrise * 1000).toLocaleTimeString(); // Use toLocaleTimeString for clarity
//   const sunset = new Date(value.city.sunset * 1000).toLocaleTimeString(); // Use toLocaleTimeString for clarity

//   const WeatherInfo = value.list.map((item, index) => {
//     const DateNTime = item.dt_txt;
//     const Description = item.weather[0].description;
//     const Climate = item.weather[0].main;
//     const temperature = item.main.temp;
//     const Humidity = item.main.humidity;

//     return (
//       <li key={index}>
//         <strong>Date and Time:</strong> {DateNTime} <br />
//         <strong>Description:</strong> {Description} <br />
//         <strong>Climate:</strong> {Climate} <br />
//         <strong>Temperature:</strong> {temperature} °C <br />
//         <strong>Humidity:</strong> {Humidity} %
//       </li>
//     );
//   });

//   return (
//     <>
//       <h1>{city_name}</h1>
//       <p>Population: {population}</p>
//       <p>Sunrise: {sunrise}</p>
//       <p>Sunset: {sunset}</p>
//       <ul>{WeatherInfo}</ul> {/* Render all weather info in a single list */}
//     </>
//   );
// }
