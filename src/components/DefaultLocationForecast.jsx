import moment from "moment";

function DefaultLocationForecast({ defaultLocationForecast }) {
  return (
    <div>
      {typeof defaultLocationForecast.list != "undefined" ? (
        <div className="forecast-wrapper">
          <div>
            <p>{moment(defaultLocationForecast.list[6].dt_txt).format("ddd")}</p>
            <div>
              <img src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[6].weather[0].icon}.png`} />
            </div>
            <p>{Math.round(defaultLocationForecast.list[6].main.temp)}°</p>
          </div>
          <div>
            <p>{moment(defaultLocationForecast.list[14].dt_txt).format("ddd")}</p>
            <div>
              <img src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[14].weather[0].icon}.png`} />
            </div>
            <p>{Math.round(defaultLocationForecast.list[14].main.temp)}°</p>
          </div>
          <div>
            <p>{moment(defaultLocationForecast.list[22].dt_txt).format("ddd")}</p>
            <div>
              <img src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[22].weather[0].icon}.png`} />
            </div>
            <p>{Math.round(defaultLocationForecast.list[22].main.temp)}°</p>
          </div>
          <div>
            <p>{moment(defaultLocationForecast.list[30].dt_txt).format("ddd")}</p>
            <div>
              <img src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[30].weather[0].icon}.png`} />
            </div>
            <p>{Math.round(defaultLocationForecast.list[30].main.temp)}°</p>
          </div>
          <div>
            <p>{moment(defaultLocationForecast.list[38].dt_txt).format("ddd")}</p>
            <div>
              <img src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[38].weather[0].icon}.png`} />
            </div>
            <p>{Math.round(defaultLocationForecast.list[38].main.temp)}°</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DefaultLocationForecast;
