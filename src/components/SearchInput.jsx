import { useState, useEffect } from "react";
import Forecast from "./Forecast";
import moment from "moment";

function SearchInput() {
  const api = {
    key: process.env.REACT_APP_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [required, setRequired] = useState("");
  const [london, setLondon] = useState({});

  const [loading, setLoading] = useState(true);

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

  const timezone = weather.timezone;
  const timezoneInMinutes = timezone / 60;

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

  useEffect(() => {
    fetch(`${api.base}weather?q=london&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setLondon(result);
        console.log(result);
        setLoading(false);
      });
  }, []);

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
        <div
          className={
            typeof weather.main != "undefined"
              ? moment().utcOffset(timezoneInMinutes).format("H") > parseInt("0") &&
                moment().utcOffset(timezoneInMinutes).format("H") < parseInt("6")
                ? "App night"
                : "App" && weather.weather[0].main === "Clear"
                ? "App clear"
                : "App" && weather.weather[0].main === "Clouds"
                ? "App cloudy"
                : "App" && weather.weather[0].main === "Snow"
                ? "App snowy"
                : "App" && weather.weather[0].main === "Rain"
                ? "App rain"
                : "App" && weather.weather[0].main === "Thunderstorm"
                ? "App thunderstorm"
                : "App" && weather.weather[0].main === "Drizzle"
                ? "App drizzle"
                : "App" && weather.weather[0].main === "Fog"
                ? "App fog"
                : "App" && weather.weather[0].main === "Mist"
                ? "App mist"
                : "App" && weather.weather[0].main === "Haze"
                ? "App haze"
                : "App"
              : "App"
          }
        >
          <div>
            <h1>
              {weather.name}, {weather.sys.country}
            </h1>
            <p>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString("en")}</p>
            <p>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString("en")}</p>
            <p>{moment().utcOffset(timezoneInMinutes).format("h:mm A")}</p>
            <p>{moment().utcOffset(timezoneInMinutes).format("H")}</p>
            <p> {moment().utcOffset(timezoneInMinutes).format("dddd Do MMMM YYYY")}</p>
          </div>
          <div>
            <div>{Math.round(weather.main.temp)}°</div>
            <div>{weather.weather[0].main}</div>
            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt={weather.weather[0].main} />
            <Forecast forecast={forecast} />
          </div>
        </div>
      ) : (
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div
              className={
                typeof london.main != "undefined"
                  ? london.weather[0].main === "Clear"
                    ? "App clear"
                    : "App" && london.weather[0].main === "Clouds"
                    ? "App cloudy"
                    : "App" && london.weather[0].main === "Snow"
                    ? "App snowy"
                    : "App" && london.weather[0].main === "Rain"
                    ? "App rain"
                    : "App" && london.weather[0].main === "Thunderstorm"
                    ? "App thunderstorm"
                    : "App" && london.weather[0].main === "Drizzle"
                    ? "App drizzle"
                    : "App" && london.weather[0].main === "Fog"
                    ? "App fog"
                    : "App" && london.weather[0].main === "Mist"
                    ? "App mist"
                    : "App" && london.weather[0].main === "Haze"
                    ? "App haze"
                    : "App"
                  : "App"
              }
            >
              <h1>
                {london.name}, {london.sys.country}
              </h1>
              <h1>
                {Math.round(london.main.temp)}
                <sup>°C</sup>
              </h1>
              <h2>{london.weather[0].main}</h2>
              <img src={`http://openweathermap.org/img/w/${london.weather[0].icon}.png`} alt={london.weather[0].main} />
              <p>
                {moment().utcOffset(timezoneInMinutes).format("h:mm A")} |{" "}
                {moment().utcOffset(timezoneInMinutes).format("dddd Do MMMM YYYY")}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchInput;
