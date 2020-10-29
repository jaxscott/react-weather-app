import React from 'react';
import './App.css';

import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
       <div className="weather-app">
        <Search />
        <Weather />
        <Forecast />
      </div>
      <footer>
        <a href="https://github.com/jaxscott/react-weather-app">Open-source code</a> by Jackie Scott
      </footer>
    </div>
  );
}
