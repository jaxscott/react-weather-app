import React from "react";

export default function WeatherSvg(props) {
    const codeMapping = {
        "01d": "/images/sun.svg",
        "01n": "/images/moon.svg",
        "02d": "/images/few_clouds_sun.svg",
        "02n": "/images/few_clouds_moon.svg",
        "03d": "/images/scattered_clouds.svg",
        "03n": "/images/scattered_clouds.svg",
        "04d": "/images/scattered_clouds.svg",
        "04n": "/images/scattered_clouds.svg",
        "09d": "/images/shower_rain_sun.svg",
        "09n": "/images/shower_rain_moon.svg",
        "10d": "/images/rain.svg",
        "10n": "/images/rain.svg",
        "11d": "/images/thunderstorm.svg",
        "11n": "/images/thunderstorm.svg",
        "13d": "/images/snow_sun.svg",
        "13n": "/images/snow_moon.svg",
        "15d": "/images/mist.svg",
        "15n": "/images/mist.svg",
      }
return (<img src={codeMapping[props.code]} alt="" width="100px"/>)
}








