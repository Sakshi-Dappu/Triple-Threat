import React from "react";

export default function InfoBox({ value }) {
  if (value === "") {
    return <h2>Search For a location</h2>;
  }
  if (value.cod === "404") {
    throw new Error("City not found");
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
        <p>
          <b>Population:</b> {population}
        </p>
        <p>
          <b>Sunrise:</b> {sunrise}
        </p>
        <p>
          <b>Sunset: </b>
          {sunset}
        </p>
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
