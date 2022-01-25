import { useState, useEffect } from "react";
import WeeklyForecast from "./WeeklyForecast";
import WeatherDetails from "./WeatherDetails";
import DefaultLocationForecast from "./DefaultLocationForecast";
import Footer from "./Footer";
import moment from "moment";
import { FaSearch } from "react-icons/fa";

function DisplayWeather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [required, setRequired] = useState("");
  const [defaultLocation, setDefaultLocation] = useState({});
  const [defaultLocationForecast, setDefaultLocationForecast] = useState({});

  const [loading, setLoading] = useState(true);

  const timezone = weather.timezone;
  const timezoneInMinutes = timezone / 60;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=92ad1b8fac49021cb4c59e5896d7a138`
    )
      .then((res) => res.json())
      .then((result) => {
        setDefaultLocation(result);
        console.log(result);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=london&units=metric&APPID=92ad1b8fac49021cb4c59e5896d7a138`
    )
      .then((res) => res.json())
      .then((result) => {
        setDefaultLocationForecast(result);
        console.log(result);
      });
  }, []);

  const clicked = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=92ad1b8fac49021cb4c59e5896d7a138`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery("");
        console.log(result);
      });
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&APPID=92ad1b8fac49021cb4c59e5896d7a138`
    )
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
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter a Location"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={handleKeyPress}
            />
            <button className="search-btn" type="submit" onClick={clicked}>
              <FaSearch />
            </button>
          </div>
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

            <WeeklyForecast forecast={forecast} />
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
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Enter a Location"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                  onKeyPress={handleKeyPress}
                />
                <button className="search-btn" type="submit" onClick={clicked}>
                  <FaSearch />
                </button>
              </div>
              <p className="field-required">{required}</p>
              {weather.cod === "404" ? <p className="field-required">Location Not Found</p> : ""}

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

                {typeof defaultLocationForecast.list != "undefined" ? (
                  <DefaultLocationForecast defaultLocationForecast={defaultLocationForecast} />
                ) : (
                  ""
                )}
              </div>
            </div>
          )}
        </div>
      )}
      <div className="weather-details">
        <WeatherDetails
          weather={weather}
          defaultLocation={defaultLocation}
          defaultLocationForecast={defaultLocationForecast}
          forecast={forecast}
        />
        <Footer />
      </div>
    </div>
  );
}

export default DisplayWeather;
