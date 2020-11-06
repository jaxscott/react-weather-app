import React from 'react';
import Weather from "./Weather";
import './App.css';


export default function App() {
  return (
    <div className="App">
        <Weather defaultCity="Paris" />
      <footer>
        <a href="https://github.com/jaxscott/react-weather-app">Open-source code</a> by Jackie Scott and hosted on <a href="https://elated-almeida-f2b644.netlify.app">Netlify</a>
      </footer>
      </div>
  );
}
