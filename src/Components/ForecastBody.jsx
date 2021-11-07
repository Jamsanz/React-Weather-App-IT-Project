import React from "react";

export default function ForecastBody(props) {
  return (
    <div className="forecast-body">
      <h5>
        {props.day} {props.date}
      </h5>
      <div className="forecast-weather-condition">
        <h5>{props.icon}</h5>
        <div className="forecast-weather-condition-temps">
          <h6>{props.temp}</h6>
          <h6>{props.temp2}</h6>
        </div>
      </div>
    </div>
  );
}
