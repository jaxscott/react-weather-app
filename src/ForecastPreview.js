import React from "react";
import WeatherSvg from "./WeatherSvg";

export default function ForecastPreview(props) {
    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        if (hours >= 12) {
            hours = hours - 12;
          }
          if (hours === 0) {
            hours = 12
          }
        return `${hours}:00`;
    }

    function temperature() {
        let maxtemp = Math.round(props.data.main.temp_max);
        let mintemp = Math.round(props.data.main.temp_min);

        return (<div><strong>{maxtemp}º</strong> / {mintemp}º</div> )
    }

    return (
        <div className="col forecast-preview">
          <b>{hours()}</b><br />
          <WeatherSvg code={props.data.weather[0].icon} /><br />
          {temperature()}
        </div>
    )}