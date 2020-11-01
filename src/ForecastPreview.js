import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastPreview(props) {
    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00`;
    }

    function temperature() {
        let maxtemp = Math.round(props.data.list[0].main.temp_max);
        let mintemp = Math.round(props.data.list[0].main.temp_min);

        return (`<strong>${maxtemp}º</strong> / ${mintemp}º`)
    }

    return (
    <div className="col">
          <h5>{hours()}</h5>
          <WeatherIcon code={props.data.weather[0].icon} />
          <p>{temperature()}</p>
        </div>
    )}