import moment from "moment";

function WeatherDetails({ weather, defaultLocation }) {
  const timezone = weather.timezone;
  const timezoneInMinutes = timezone / 60;
  return (
    <div>
      {typeof weather.main != "undefined" ? (
        <div>
          <h2 className="weather-details-title">Weather Details</h2>
          <div className="details-container">
            <div className="details-item-wrapper">
              <p>Location</p>
              <p>{weather.name}</p>
            </div>

            <div className="details-item-wrapper">
              <p>Latitude</p>
              <p>{weather.coord.lat}</p>
            </div>
            <div className="details-item-wrapper">
              <p>Longitude</p>
              <p>{weather.coord.lon}</p>
            </div>

            <div className="details-item-wrapper">
              <p>MIN</p>
              <p>{Math.round(weather.main.temp_min)}°</p>
            </div>
            <div className="details-item-wrapper">
              <p>MAX</p>
              <p>{Math.round(weather.main.temp_max)}°</p>
            </div>
            <div className="details-item-wrapper">
              <p>Feels Like</p>
              <p>{Math.round(weather.main.feels_like)}°</p>
            </div>
            <div className="details-item-wrapper">
              <p>Sunrise</p>
              <p>
                {" "}
                {moment(weather.sys.sunrise * 1000)
                  .utcOffset(timezoneInMinutes)
                  .format("h:mm A")}
              </p>
            </div>
            <div className="details-item-wrapper">
              <p>Sunset</p>
              <p>
                {" "}
                {moment(weather.sys.sunset * 1000)
                  .utcOffset(timezoneInMinutes)
                  .format("h:mm A")}
              </p>
            </div>
            <div className="details-item-wrapper">
              <p>Humidity</p>
              <p>{weather.main.humidity}%</p>
            </div>

            <div className="details-item-wrapper">
              <p>Wind Speed</p>
              <p>{Math.round(weather.wind.speed)} mph</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {typeof defaultLocation.main != "undefined" ? (
            <div>
              <h2 className="weather-details-title">Weather Details</h2>
              <div className="details-container">
                <div className="details-item-wrapper">
                  <p>Location</p>
                  <p>{defaultLocation.name}</p>
                </div>

                <div className="details-item-wrapper">
                  <p>Latitude</p>
                  <p>{defaultLocation.coord.lat}</p>
                </div>
                <div className="details-item-wrapper">
                  <p>Longitude</p>
                  <p>{defaultLocation.coord.lon}</p>
                </div>

                <div className="details-item-wrapper">
                  <p>MIN</p>
                  <p>{Math.round(defaultLocation.main.temp_min)}°</p>
                </div>
                <div className="details-item-wrapper">
                  <p>MAX</p>
                  <p>{Math.round(defaultLocation.main.temp_max)}°</p>
                </div>
                <div className="details-item-wrapper">
                  <p>Feels Like</p>
                  <p>{Math.round(defaultLocation.main.feels_like)}°</p>
                </div>
                <div className="details-item-wrapper">
                  <p>Sunrise</p>
                  <p>
                    {" "}
                    {moment(defaultLocation.sys.sunrise * 1000)
                      .utcOffset(timezoneInMinutes)
                      .format("h:mm A")}
                  </p>
                </div>
                <div className="details-item-wrapper">
                  <p>Sunset</p>
                  <p>
                    {" "}
                    {moment(defaultLocation.sys.sunset * 1000)
                      .utcOffset(timezoneInMinutes)
                      .format("h:mm A")}
                  </p>
                </div>
                <div className="details-item-wrapper">
                  <p>Humidity</p>
                  <p>{defaultLocation.main.humidity}%</p>
                </div>

                <div className="details-item-wrapper">
                  <p>Wind Speed</p>
                  <p>{Math.round(defaultLocation.wind.speed)} mph</p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}

export default WeatherDetails;
