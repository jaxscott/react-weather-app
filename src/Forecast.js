import React, {useState} from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";
import "./styles.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

if (loaded && props.city === forecast.city.name) {
  console.log(forecast.list[0]);
  return (
    <div className="container forecast">
      <div className="row row-cols-5" id="forecast">
        {forecast.list.slice(0, 5).map(function (forecastItem) {
          return <ForecastPreview data={forecast.list[0]} />;
        })}
      </div>
    </div>
  );
} else {
  let apiKey = "681353d6f7c98879b8cafb97e5874854";
  let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(forecastUrl).then(displayForecast)

  return null;
}
}