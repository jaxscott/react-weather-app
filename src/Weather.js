import React from "react";
import "./styles.css";

export default function Widget() {
  let data = {
    date: "Wednesday, October 28, 2020",
    time: "7:55 PM",
    city: "Los Angeles",
    condition: "Clear",
    currentTemp: "67º",
    humidity: "Humidity: 25%",
    windspeed: "Wind Speed: 2.3m/s"
  };
  return (
    <div className="container widget">
      <div className="row date-time">
        <div className="col date">
          <p id="current-date">{data.date}</p>
        </div>
        <div className="col time">
          <p>
            Last Updated: <span id="current-time">{data.time}</span>
          </p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col current-city">
          <h1 id="current-city">{data.city}</h1>
          <ul>
            <li id="condition">{data.condition}</li>
            <li id="current-temp">{data.currentTemp}</li>
          </ul>
        </div>
        <div className="col-md-auto weather-icon">
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            alt="Cloudy"
            className="icon"
            id="icon"
          />
        </div>
        <div className="col weather-details">
          <ul>
            <li id="humidity">{data.humidity}</li>
            <li id="windspeed">{data.windspeed}</li>
          </ul>

          <div className="conversion">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-warning active" id="celsius">
                <input type="radio" name="options" />
                ºC
              </label>
              <label className="btn btn-warning" id="fahrenheit">
                <input type="radio" name="options" />
                ºF
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
