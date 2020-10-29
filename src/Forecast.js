import React from "react";
import "./styles.css";

export default function Forecast() {
  let forecastData = {
    icon: "http://openweathermap.org/img/wn/01d@2x.png",
    maxtemp: "90º",
    mintemp: "60º"
  };
  return (
    <div className="container forecast">
      <div className="row row-cols-5" id="forecast">
        <div className="col">
          <h5>Monday</h5>
          <img src={forecastData.icon} alt="Sunny" />
          <p>
            <strong id="maxtemp">{forecastData.maxtemp}</strong> /{" "}
            <span id="mintemp">{forecastData.mintemp}</span>
          </p>
        </div>

        <div className="col">
          <h5>Tuesday</h5>
          <img src={forecastData.icon} alt="Sunny" />
          <p>
            <strong id="maxtemp">{forecastData.maxtemp}</strong> /{" "}
            <span id="mintemp">{forecastData.mintemp}</span>
          </p>
        </div>

        <div className="col">
          <h5>Wednesday</h5>
          <img src={forecastData.icon} alt="Sunny" />
          <p>
            <strong id="maxtemp">{forecastData.maxtemp}</strong> /{" "}
            <span id="mintemp">{forecastData.mintemp}</span>
          </p>
        </div>

        <div className="col">
          <h5>Thursday</h5>
          <img src={forecastData.icon} alt="Sunny" />
          <p>
            <strong id="maxtemp">{forecastData.maxtemp}</strong> /{" "}
            <span id="mintemp">{forecastData.mintemp}</span>
          </p>
        </div>

        <div className="col">
          <h5>Friday</h5>
          <img src={forecastData.icon} alt="Sunny" />
          <p>
            <strong id="maxtemp">{forecastData.maxtemp}</strong> /{" "}
            <span id="mintemp">{forecastData.mintemp}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
