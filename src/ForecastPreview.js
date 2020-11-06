import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastPreview(props) {
    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00`;
    }

    function temperature() {
        let maxtemp = Math.round(props.data.main.temp_max);
        let mintemp = Math.round(props.data.main.temp_min);

        return (<div><strong>{maxtemp}º</strong> / {mintemp}º</div> )
    }

    return (
        <div className="col forecast-preview">
          <strong>{hours()}</strong><br />
          <WeatherIcon code={props.data.weather[0].icon} /><br />
          {temperature()}
        </div>
    )}