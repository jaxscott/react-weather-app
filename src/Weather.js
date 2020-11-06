import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import axios from "axios";
import "./styles.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp), 
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
    }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityInput(event) {
    setCity(event.target.value);
  }
 
  function search() {
    let apiKey = "61047475996c6d6f6fc0343a7f7974b6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

if (weatherData.ready) {
    return (
      <div className="weather-app">
    <div className="search-bar">
      <button className="pinpoint">
        <i className="fas fa-map-marker-alt" alt="Current Location"></i>
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="search/text"
          id="city-search"
          name="city-search"
          autoComplete="off"
          placeholder="Enter a City..."
          onChange={handleCityInput}
        />

        <button type="submit" value="search" className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
    <WeatherInfo data={weatherData} />
    <Forecast city={weatherData.city} />
    </div>
  )
} else {
  search();
  return "Loading...";
}
  }