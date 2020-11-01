import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import Loader from 'react-loader-spinner';
import Forecast from "./Forecast";
import "./styles.css";

export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState({ loaded : false });
  let [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp), 
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed
    });
    }
  
  function search() {
    let apiKey = "681353d6f7c98879b8cafb97e5874854";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityInput(event) {
    setCity(event.target.value);
  }
 

if (weatherData.loaded) {
    return (
      <div className="weather-app">
    <div className="search-bar">
      <button id="pinpoint">
        <i className="fas fa-map-marker-alt" alt="Current Location"></i>
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="search/text"
          id="city-search"
          name="city-search"
          autoComplete="off"
          autoFocus="on"
          placeholder="Enter a City..."
          onChange={handleCityInput}
        />

        <button type="submit" value="search" id="search-button">
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
  return (<div className="loading">
<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
</div>)
}
  }