import { useState, useEffect } from "react";
import Forecast from "./Forecast";
import WeatherDetails from "./WeatherDetails";
import moment from "moment";
import { FaSearch } from "react-icons/fa";

function DisplayWeather() {
  const api = {
    key: process.env.REACT_APP_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [required, setRequired] = useState("");
  const [defaultLocation, setDefaultLocation] = useState({});

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
        setDefaultLocation(result);
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
    <div className="container">
      {/* <div className="date">{dateString}</div>
      <div className="search-wrapper">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter a Location"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={handleKeyPress}
          />
          <button type="submit" onClick={clicked}>
            <FaSearch />
          </button>
        </div>
        <p className="field-required">{required}</p>
        {weather.cod === "404" ? <p className="field-required">Location Not Found</p> : ""}
      </div> */}
      {typeof weather.main != "undefined" ? (
        <div
          className={
            typeof weather.main != "undefined"
              ? moment().utcOffset(timezoneInMinutes).format("H") >= 20
                ? "App night"
                : "App" && moment().utcOffset(timezoneInMinutes).format("H") < 8
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
          <input
            type="text"
            placeholder="Enter a Location"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={handleKeyPress}
          />
          <button type="submit" onClick={clicked}>
            <FaSearch />
          </button>
          <p className="field-required">{required}</p>
          {weather.cod === "404" ? <p className="field-required">Location Not Found</p> : ""}

          <div className="weather-info">
            <h1 className="temp">{Math.round(weather.main.temp)}°</h1>

            <div className="col-two">
              <h1 className="location">
                {weather.name}, {weather.sys.country}
              </h1>

              <div>
                <img
                  src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                  alt={weather.weather[0].main}
                />
              </div>
            </div>

            <div>
              <p>
                {weather.weather[0].main} | {moment().utcOffset(timezoneInMinutes).format("h:mm A")}
              </p>
            </div>

            <p>{moment().utcOffset(timezoneInMinutes).format("dddd Do MMMM YYYY")}</p>

            {/* <p>
              Sunrise:{" "}
              {moment(weather.sys.sunrise * 1000)
                .utcOffset(timezoneInMinutes)
                .format("h:mm A")}
            </p>

            <p>
              Sunset:{" "}
              {moment(weather.sys.sunset * 1000)
                .utcOffset(timezoneInMinutes)
                .format("h:mm A")}
            </p> */}

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
                typeof defaultLocation.main != "undefined"
                  ? moment().utcOffset(timezoneInMinutes).format("H") >= 20
                    ? "App night"
                    : "App" && moment().utcOffset(timezoneInMinutes).format("H") < 8
                    ? "App night"
                    : "App" && defaultLocation.weather[0].main === "Clear"
                    ? "App clear"
                    : "App" && defaultLocation.weather[0].main === "Clouds"
                    ? "App cloudy"
                    : "App" && defaultLocation.weather[0].main === "Snow"
                    ? "App snowy"
                    : "App" && defaultLocation.weather[0].main === "Rain"
                    ? "App rain"
                    : "App" && defaultLocation.weather[0].main === "Thunderstorm"
                    ? "App thunderstorm"
                    : "App" && defaultLocation.weather[0].main === "Drizzle"
                    ? "App drizzle"
                    : "App" && defaultLocation.weather[0].main === "Fog"
                    ? "App fog"
                    : "App" && defaultLocation.weather[0].main === "Mist"
                    ? "App mist"
                    : "App" && defaultLocation.weather[0].main === "Haze"
                    ? "App haze"
                    : "App"
                  : "App"
              }
            >
              <input
                type="text"
                placeholder="Enter a Location"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                onKeyPress={handleKeyPress}
              />
              <button type="submit" onClick={clicked}>
                <FaSearch />
              </button>
              <p className="field-required">{required}</p>
              {weather.cod === "404" ? <p className="field-required">Location Not Found</p> : ""}
              {/* <h1>
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
              </p> */}
              <div className="weather-info">
                <h1 className="temp">{Math.round(defaultLocation.main.temp)}°</h1>

                <div className="col-two">
                  <h1 className="location">
                    {defaultLocation.name}, {defaultLocation.sys.country}
                  </h1>

                  <div>
                    <img
                      src={`http://openweathermap.org/img/w/${defaultLocation.weather[0].icon}.png`}
                      alt={defaultLocation.weather[0].main}
                    />
                  </div>
                </div>

                <div>
                  <p>
                    {defaultLocation.weather[0].main} | {moment().utcOffset(timezoneInMinutes).format("h:mm A")}
                  </p>
                </div>

                <p>{moment().utcOffset(timezoneInMinutes).format("dddd Do MMMM YYYY")}</p>

                {/* <p>
              Sunrise:{" "}
              {moment(weather.sys.sunrise * 1000)
                .utcOffset(timezoneInMinutes)
                .format("h:mm A")}
            </p>

            <p>
              Sunset:{" "}
              {moment(weather.sys.sunset * 1000)
                .utcOffset(timezoneInMinutes)
                .format("h:mm A")}
            </p> */}

                {/* <Forecast forecast={forecast} /> */}

                {/* <div className="forecast-wrapper">
                  <div>
                    <p>{moment(london.list[6].dt_txt).format("ddd")}</p>
                    <div>
                      <img src={`http://openweathermap.org/img/w/${london.list[6].weather[0].icon}.png`} />
                    </div>
                    <p>{Math.round(london.list[6].main.temp)}°</p>
                  </div>
                  <div>
                    <p>{moment(london.list[14].dt_txt).format("ddd")}</p>
                    <div>
                      <img src={`http://openweathermap.org/img/w/${london.list[14].weather[0].icon}.png`} />
                    </div>
                    <p>{Math.round(london.list[14].main.temp)}°</p>
                  </div>
                  <div>
                    <p>{moment(london.list[22].dt_txt).format("ddd")}</p>
                    <div>
                      <img src={`http://openweathermap.org/img/w/${london.list[22].weather[0].icon}.png`} />
                    </div>
                    <p>{Math.round(london.list[22].main.temp)}°</p>
                  </div>
                  <div>
                    <p>{moment(london.list[30].dt_txt).format("ddd")}</p>
                    <div>
                      <img src={`http://openweathermap.org/img/w/${london.list[30].weather[0].icon}.png`} />
                    </div>
                    <p>{Math.round(london.list[30].main.temp)}°</p>
                  </div>
                  <div>
                    <p>{moment(london.list[38].dt_txt).format("ddd")}</p>
                    <div>
                      <img src={`http://openweathermap.org/img/w/${london.list[38].weather[0].icon}.png`} />
                    </div>
                    <p>{Math.round(london.list[38].main.temp)}°</p>
                  </div>
                </div> */}
              </div>
            </div>
          )}
        </div>
      )}
      <WeatherDetails weather={weather} defaultLocation={defaultLocation} />
    </div>
  );
}

export default DisplayWeather;
