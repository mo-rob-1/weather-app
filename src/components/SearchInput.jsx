import { click } from "@testing-library/user-event/dist/click";
import { useState, useEffect } from "react";
import Forecast from "./Forecast";

function SearchInput() {
  const api = {
    key: process.env.REACT_APP_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [required, setRequired] = useState("");

  const nth = function (d) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const dateObj = new Date();
  const date = dateObj.getDate();
  const month = [
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
    "December",
  ][dateObj.getMonth()];
  const year = dateObj.getFullYear();

  const dateString = date + nth(date) + " " + month + " " + year;

  const clicked = (e) => {
    e.preventDefault();
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery("");

        console.log(result);
      });
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setForecast(result);
        setQuery("");

        console.log(result);
      });
    if (query === "") {
      setRequired("Please enter a location");
    } else {
      setRequired("");
    }
  };

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      clicked(e);
    }
  }

  return (
    <div>
      <div>
        <div className="date">{dateString}</div>
        <input
          type="text"
          placeholder="Enter a Location"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={handleKeyPress}
        />
        <button type="submit" onClick={clicked}>
          Get Weather
        </button>
        <p className="field-required">{required}</p>
        {weather.cod === "404" ? <p className="field-required">Location Not Found</p> : ""}
      </div>

      {typeof weather.main != "undefined" ? (
        <div className="searched-location-weather">
          <div>
            <h1>
              {weather.name}, {weather.sys.country}
            </h1>
            <p>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString("en")}</p>
            <p>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString("en")}</p>
          </div>
          <div>
            <div>{Math.round(weather.main.temp)}°</div>
            <div>{weather.weather[0].main}</div>
            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt={weather.weather[0].main} />
            <Forecast forecast={forecast} />
          </div>
        </div>
      ) : (
        <div className="searched-location-weather">
          <h1>London</h1>
        </div>
      )}
    </div>
  );
}

export default SearchInput;
