import React from 'react';
import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
        <Weather defaultCity="Paris" />
      <footer>
        <a href="https://github.com/jaxscott/react-weather-app">Open-source code</a> by Jackie Scott and hosted on Netlify
      </footer>
      </div>
  );
}
