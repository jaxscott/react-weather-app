import React from "react";

export default function FormattedDate(props) {
    let weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      let day = weekday[props.date.getDay()];
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let month = months[props.date.getMonth()];
      let date = props.date.getDate();
      let year = props.date.getFullYear();
      return (<div>
        ${day}, ${month} ${date}, ${year}
      </div>);
}