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

      let hour = props.date.getHours();
      let minute = props.date.getMinutes();
      if (minute < 10) {
        minute = `0${minute}`;
      }  
      let meridiem = "AM";
      if (hour >= 12) {
        hour = hour - 12;
        meridiem = "PM";
      }
      if (hour === 0) {
        hour = 12
      }


      return (<div className="row date-time"> 
      <div className="col date">
      {day}, {month} {date}, {year}
      </div>
      <div className="col time">
      Last Updated: {hour}:{minute} {meridiem}
      </div>
    </div>);
}



      