import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import axios from "axios";
import Loader from 'react-loader-spinner';
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

  function errorFunction(error) {
    alert ("Please enter a valid city. 🌎")
  }

  function handleCityInput(event) {
    setCity(event.target.value);
  }
 
  function search() {
    let apiKey = "538fc872aa705c57fa7d84cb5eac6a65";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse).catch(errorFunction);
}

function currentLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "766c14bb86493bee61d8edc39d383fca";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

function geoLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentLocation);
}

if (weatherData.ready) {
    return (
      <div className="weather-app">
    <div className="search-bar">
      <button className="pinpoint" onClick={geoLocation}>
        <i className="fas fa-map-marker-alt" alt="Current Location"></i>
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="search/text"
          id="city-search"
          name="city-search"
          autoComplete="off"
          autoFocus="off"
          placeholder="Enter a City..."
          onChange={handleCityInput}
        />
        <button type="submit" value="search" className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
    <WeatherInfo data={weatherData} />
    <hr />
    <Forecast city={weatherData.city} />
    </div>
  )} else {
  search();
  return (<div>
  <Loader type="Oval" color="purple" height={80} width={80} className="loader" />
  </div>);
}}