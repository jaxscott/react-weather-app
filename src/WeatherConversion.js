import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./styles.css";

export default function WeatherConversion(props) {
    const [unit, setUnit] = useState("metric")
    
    function convertToFahrenheit(event) {
      event.preventDefault();
      setUnit("imperial");  
    }
    
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("metric");  
      }
    
    if (unit === "metric") {
    return ( <div className="container weather-info">
    <div className="row date-time">
      <div className="col date">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="col time">
        <p>
          Last Updated: 6:27 PM
        </p>
      </div>
    </div>
    <div className="row align-items-center">
      <div className="col current-city">
        <h1 className="city">{props.data.city}</h1>
        <ul>
          <li className="condition">{props.data.description}</li>
          <li className="temp">{props.data.temperature}º</li>
        </ul>
      </div>
      <div className="col-md-auto weather-icon">
        <WeatherIcon code={props.data.icon}
        alt={props.data.description}
        />
      </div>
      <div className="col weather-details">
        <ul>
          <li className="humiditiy">Humidity: {props.data.humidity} %</li>
          <li className="wind">Wind Speed: {props.data.wind} m/sec</li>
        </ul>

        <WeatherConversion celsius={props.data.temperature} />
        <div className="conversion">
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-warning" id="celsius" >
              <input type="radio" name="options" />
              ºC
            </label>
            <label className="btn btn-warning active" id="fahrenheit" onClick={convertToFahrenheit}>
              <input type="radio" name="options" />
              ºF
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>)
} else {
    let fahrenheit = Math.round((props.metric * 9/5) + 32);
    return (<div className="container weather-info">
    <div className="row date-time">
      <div className="col date">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="col time">
        <p>
          Last Updated: 6:27 PM
        </p>
      </div>
    </div>
    <div className="row align-items-center">
      <div className="col current-city">
        <h1 className="city">{props.data.city}</h1>
        <ul>
          <li className="condition">{props.data.description}</li>
          <li className="temp">{fahrenheit}º</li>
        </ul>
      </div>
      <div className="col-md-auto weather-icon">
        <WeatherIcon code={props.data.icon}
        alt={props.data.description}
        />
      </div>
      <div className="col weather-details">
        <ul>
          <li className="humiditiy">Humidity: {props.data.humidity} %</li>
          <li className="wind">Wind Speed: {props.data.wind} m/sec</li>
        </ul>

        <WeatherConversion celsius={props.data.temperature} />
        <div className="conversion">
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-warning active" id="celsius" onClick={convertToCelsius}>
              <input type="radio" name="options" />
              ºC
            </label>
            <label className="btn btn-warning" id="fahrenheit" >
              <input type="radio" name="options" />
              ºF
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

}