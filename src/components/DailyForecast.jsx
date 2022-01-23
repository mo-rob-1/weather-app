import moment from "moment";

function DailyForecast({ forecast }) {
  return (
    <div show={3.5} slide={3} swiping={true} className="daily-forecast-wrapper">
      <div className="daily-forecast-item">
        <p>{moment(forecast.list[0].dt_txt).format("h:mm A")}</p>
        <div>
          <img src={`http://openweathermap.org/img/w/${forecast.list[0].weather[0].icon}.png`} />
        </div>
        <p>{Math.round(forecast.list[0].main.temp)}°</p>
        <p className="forecast-day">{moment(forecast.list[0].dt_txt).format("ddd")}</p>
      </div>
      <div className="daily-forecast-item">
        <p>{moment(forecast.list[1].dt_txt).format("h:mm A")}</p>
        <div>
          <img src={`http://openweathermap.org/img/w/${forecast.list[1].weather[0].icon}.png`} />
        </div>
        <p>{Math.round(forecast.list[1].main.temp)}°</p>
        <p className="forecast-day">{moment(forecast.list[1].dt_txt).format("ddd")}</p>
      </div>
      <div className="daily-forecast-item">
        <p>{moment(forecast.list[2].dt_txt).format("h:mm A")}</p>
        <div>
          <img src={`http://openweathermap.org/img/w/${forecast.list[2].weather[0].icon}.png`} />
        </div>
        <p>{Math.round(forecast.list[2].main.temp)}°</p>
        <p className="forecast-day">{moment(forecast.list[2].dt_txt).format("ddd")}</p>
      </div>
      <div className="daily-forecast-item">
        <p>{moment(forecast.list[3].dt_txt).format("h:mm A")}</p>
        <div>
          <img src={`http://openweathermap.org/img/w/${forecast.list[3].weather[0].icon}.png`} />
        </div>
        <p>{Math.round(forecast.list[3].main.temp)}°</p>
        <p className="forecast-day">{moment(forecast.list[3].dt_txt).format("ddd")}</p>
      </div>
      <div className="daily-forecast-item">
        <p>{moment(forecast.list[4].dt_txt).format("h:mm A")}</p>
        <div>
          <img src={`http://openweathermap.org/img/w/${forecast.list[4].weather[0].icon}.png`} />
        </div>
        <p>{Math.round(forecast.list[4].main.temp)}°</p>
        <p className="forecast-day">{moment(forecast.list[4].dt_txt).format("ddd")}</p>
      </div>
      <div className="daily-forecast-item">
        <p>{moment(forecast.list[5].dt_txt).format("h:mm A")}</p>
        <div>
          <img src={`http://openweathermap.org/img/w/${forecast.list[5].weather[0].icon}.png`} />
        </div>
        <p>{Math.round(forecast.list[5].main.temp)}°</p>
        <p className="forecast-day">{moment(forecast.list[5].dt_txt).format("ddd")}</p>
      </div>
      <div className="daily-forecast-item">
        <p>{moment(forecast.list[6].dt_txt).format("h:mm A")}</p>
        <div>
          <img src={`http://openweathermap.org/img/w/${forecast.list[6].weather[0].icon}.png`} />
        </div>
        <p>{Math.round(forecast.list[6].main.temp)}°</p>
        <p className="forecast-day">{moment(forecast.list[6].dt_txt).format("ddd")}</p>
      </div>
      <div className="daily-forecast-item">
        <p>{moment(forecast.list[7].dt_txt).format("h:mm A")}</p>
        <div>
          <img src={`http://openweathermap.org/img/w/${forecast.list[7].weather[0].icon}.png`} />
        </div>
        <p>{Math.round(forecast.list[7].main.temp)}°</p>
        <p className="forecast-day">{moment(forecast.list[7].dt_txt).format("ddd")}</p>
      </div>
      <div className="daily-forecast-item">
        <p>{moment(forecast.list[8].dt_txt).format("h:mm A")}</p>
        <div>
          <img src={`http://openweathermap.org/img/w/${forecast.list[8].weather[0].icon}.png`} />
        </div>
        <p>{Math.round(forecast.list[8].main.temp)}°</p>
        <p className="forecast-day">{moment(forecast.list[8].dt_txt).format("ddd")}</p>
      </div>
    </div>
  );
}

export default DailyForecast;
