import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherSvg from "./WeatherSvg";
import TemperatureConversion from "./TemperatureConversion";

export default function WeatherInfo(props) {
    return (
    <div className="container weather-info">
      <FormattedDate date={props.data.date} />
      <div className="row align-items-center weather">
        <div className="col current-city">
          <h2>{props.data.city}</h2>
          <TemperatureConversion celsius={props.data.temperature} />
        </div>
        <div className="col-md-auto weather-icon">
          <WeatherSvg code={props.data.icon} alt={props.data.description} />
        </div>
        <div className="col weather-details">
          <ul>
            <li className="condition">{props.data.description}</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind Speed: {props.data.wind} m/sec</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 

