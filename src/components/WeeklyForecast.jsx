import moment from "moment";

function WeeklyForecast({ forecast }) {
  return (
    <div>
      {typeof forecast.list != "undefined" ? (
        <div className="forecast-wrapper">
          <div>
            <p>{moment(forecast.list[6].dt_txt).format("ddd")}</p>
            <div>
              <img
                src={`http://openweathermap.org/img/w/${forecast.list[6].weather[0].icon}.png`}
                alt={forecast.list[6].weather[0].main}
              />
            </div>
            <p>{Math.round(forecast.list[6].main.temp)}°</p>
          </div>
          <div>
            <p>{moment(forecast.list[14].dt_txt).format("ddd")}</p>
            <div>
              <img
                src={`http://openweathermap.org/img/w/${forecast.list[14].weather[0].icon}.png`}
                alt={forecast.list[14].weather[0].main}
              />
            </div>
            <p>{Math.round(forecast.list[14].main.temp)}°</p>
          </div>
          <div>
            <p>{moment(forecast.list[22].dt_txt).format("ddd")}</p>
            <div>
              <img
                src={`http://openweathermap.org/img/w/${forecast.list[22].weather[0].icon}.png`}
                alt={forecast.list[22].weather[0].main}
              />
            </div>
            <p>{Math.round(forecast.list[22].main.temp)}°</p>
          </div>
          <div>
            <p>{moment(forecast.list[30].dt_txt).format("ddd")}</p>
            <div>
              <img
                src={`http://openweathermap.org/img/w/${forecast.list[30].weather[0].icon}.png`}
                alt={forecast.list[30].weather[0].main}
              />
            </div>
            <p>{Math.round(forecast.list[30].main.temp)}°</p>
          </div>
          <div>
            <p>{moment(forecast.list[38].dt_txt).format("ddd")}</p>
            <div>
              <img
                src={`http://openweathermap.org/img/w/${forecast.list[38].weather[0].icon}.png`}
                alt={forecast.list[38].weather[0].main}
              />
            </div>
            <p>{Math.round(forecast.list[38].main.temp)}°</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default WeeklyForecast;
