import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherConversion from "./WeatherConversion";
import "./styles.css";


export default function Weather(props) {
    return (
    <div className="container weather-info">
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

          <WeatherConversion metric={props.data.temperature} />
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

