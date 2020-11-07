import React, { useState } from "react";


export default function WeatherConversion(props) {
    const [unit, setUnit] = useState("celsius")
    
    function showFahrenheit(event) {
      event.preventDefault();
      setUnit("fahrenheit");  
    }
    
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");  
      }

      function fahrenheit() {
        return (props.celsius * 9) / 5 + 32;
      }
    
    if (unit === "celsius") {
    return (
    <div className="WeatherTemperature">
      <h1>{Math.round(props.celsius)}</h1>
          <div className="conversion">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-info active">
                <input type="radio" name="options" checked />
                ºC
              </label>
              <label className="btn btn-info" onClick={showFahrenheit}>
                <input type="radio" name="options" />
                ºF
              </label>
            </div>
          </div>
    </div>
    );
} else {
  return (
    <div className="WeatherTemperature">
      <h1>{Math.round(fahrenheit())}</h1>
          <div className="conversion">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-info" onClick={showCelsius}>
                <input type="radio" name="options" />
                ºC
              </label>
              <label className="btn btn-info active" >
                <input type="radio" name="options" checked />
                ºF
              </label>
            </div>
          </div>
    </div>
  );
}

}