import moment from "moment";

function Forecast({ forecast }) {
  return (
    <div>
      {typeof forecast.list != "undefined" ? (
        <div className="searched-location-weather">
          <div>
            <img src={`http://openweathermap.org/img/w/${forecast.list[6].weather[0].icon}.png`} />
            {moment(forecast.list[6].dt_txt).format("dddd Do MMMM YYYY hh:mm a")}
            <p>Min: {forecast.list[6].main.temp_min}</p>
            <p>Max: {forecast.list[6].main.temp_max}</p>
          </div>
          <div>
            <img src={`http://openweathermap.org/img/w/${forecast.list[6].weather[0].icon}.png`} />
            {moment(forecast.list[6].dt_txt).format("dddd Do MMMM YYYY h:mm a")}
            <p>Min: {forecast.list[6].main.temp_min}</p>
            <p>Max: {forecast.list[6].main.temp_max}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Forecast;
