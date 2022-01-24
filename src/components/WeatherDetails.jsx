import moment from "moment";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "pure-react-carousel/dist/react-carousel.es.css";

function WeatherDetails({ weather, defaultLocation, defaultLocationForecast }) {
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
              {typeof defaultLocationForecast.list != "undefined" ? (
                <div>
                  <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={6}
                    className="daily-forecast-wrapper"
                  >
                    <Slider>
                      <Slide index={0} className="daily-forecast-item">
                        <p>{moment(defaultLocationForecast.list[0].dt_txt).format("h:mm A")}</p>
                        <div>
                          <img
                            src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[0].weather[0].icon}.png`}
                            alt={defaultLocationForecast.list[0].weather[0].main}
                          />
                        </div>
                        <p>{Math.round(defaultLocationForecast.list[0].main.temp)}°</p>
                        <p className="forecast-day">{moment(defaultLocationForecast.list[0].dt_txt).format("ddd")}</p>
                      </Slide>
                      <Slide index={1} className="daily-forecast-item">
                        <p>{moment(defaultLocationForecast.list[1].dt_txt).format("h:mm A")}</p>
                        <div>
                          <img
                            src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[1].weather[0].icon}.png`}
                            alt={defaultLocationForecast.list[1].weather[0].main}
                          />
                        </div>
                        <p>{Math.round(defaultLocationForecast.list[1].main.temp)}°</p>
                        <p className="forecast-day">{moment(defaultLocationForecast.list[1].dt_txt).format("ddd")}</p>
                      </Slide>
                      <Slide index={2} className="daily-forecast-item">
                        <p>{moment(defaultLocationForecast.list[2].dt_txt).format("h:mm A")}</p>
                        <div>
                          <img
                            src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[2].weather[0].icon}.png`}
                            alt={defaultLocationForecast.list[2].weather[0].main}
                          />
                        </div>
                        <p>{Math.round(defaultLocationForecast.list[2].main.temp)}°</p>
                        <p className="forecast-day">{moment(defaultLocationForecast.list[2].dt_txt).format("ddd")}</p>
                      </Slide>
                      <Slide index={3} className="daily-forecast-item">
                        <p>{moment(defaultLocationForecast.list[3].dt_txt).format("h:mm A")}</p>
                        <div>
                          <img
                            src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[3].weather[0].icon}.png`}
                            alt={defaultLocationForecast.list[3].weather[0].main}
                          />
                        </div>
                        <p>{Math.round(defaultLocationForecast.list[3].main.temp)}°</p>
                        <p className="forecast-day">{moment(defaultLocationForecast.list[3].dt_txt).format("ddd")}</p>
                      </Slide>
                      <Slide index={4} className="daily-forecast-item">
                        <p>{moment(defaultLocationForecast.list[4].dt_txt).format("h:mm A")}</p>
                        <div>
                          <img
                            src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[4].weather[0].icon}.png`}
                            alt={defaultLocationForecast.list[4].weather[0].main}
                          />
                        </div>
                        <p>{Math.round(defaultLocationForecast.list[4].main.temp)}°</p>
                        <p className="forecast-day">{moment(defaultLocationForecast.list[4].dt_txt).format("ddd")}</p>
                      </Slide>
                      <Slide index={5} className="daily-forecast-item">
                        <p>{moment(defaultLocationForecast.list[5].dt_txt).format("h:mm A")}</p>
                        <div>
                          <img
                            src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[5].weather[0].icon}.png`}
                            alt={defaultLocationForecast.list[5].weather[0].main}
                          />
                        </div>
                        <p>{Math.round(defaultLocationForecast.list[5].main.temp)}°</p>
                        <p className="forecast-day">{moment(defaultLocationForecast.list[5].dt_txt).format("ddd")}</p>
                      </Slide>
                      <Slide index={6} className="daily-forecast-item">
                        <p>{moment(defaultLocationForecast.list[6].dt_txt).format("h:mm A")}</p>
                        <div>
                          <img
                            src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[6].weather[0].icon}.png`}
                            alt={defaultLocationForecast.list[6].weather[0].main}
                          />
                        </div>
                        <p>{Math.round(defaultLocationForecast.list[6].main.temp)}°</p>
                        <p className="forecast-day">{moment(defaultLocationForecast.list[6].dt_txt).format("ddd")}</p>
                      </Slide>
                      <Slide index={7} className="daily-forecast-item">
                        <p>{moment(defaultLocationForecast.list[7].dt_txt).format("h:mm A")}</p>
                        <div>
                          <img
                            src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[7].weather[0].icon}.png`}
                            alt={defaultLocationForecast.list[7].weather[0].main}
                          />
                        </div>
                        <p>{Math.round(defaultLocationForecast.list[7].main.temp)}°</p>
                        <p className="forecast-day">{moment(defaultLocationForecast.list[7].dt_txt).format("ddd")}</p>
                      </Slide>
                      <Slide index={8} className="daily-forecast-item">
                        <p>{moment(defaultLocationForecast.list[8].dt_txt).format("h:mm A")}</p>
                        <div>
                          <img
                            src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[8].weather[0].icon}.png`}
                            alt={defaultLocationForecast.list[8].weather[0].main}
                          />
                        </div>
                        <p>{Math.round(defaultLocationForecast.list[8].main.temp)}°</p>
                        <p className="forecast-day">{moment(defaultLocationForecast.list[8].dt_txt).format("ddd")}</p>
                      </Slide>
                      <Slide index={9} className="daily-forecast-item">
                        <p>{moment(defaultLocationForecast.list[9].dt_txt).format("h:mm A")}</p>
                        <div>
                          <img
                            src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[9].weather[0].icon}.png`}
                            alt={defaultLocationForecast.list[9].weather[0].main}
                          />
                        </div>
                        <p>{Math.round(defaultLocationForecast.list[9].main.temp)}°</p>
                        <p className="forecast-day">{moment(defaultLocationForecast.list[9].dt_txt).format("ddd")}</p>
                      </Slide>
                      <Slide index={10} className="daily-forecast-item">
                        <p>{moment(defaultLocationForecast.list[10].dt_txt).format("h:mm A")}</p>
                        <div>
                          <img
                            src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[10].weather[0].icon}.png`}
                            alt={defaultLocationForecast.list[10].weather[0].main}
                          />
                        </div>
                        <p>{Math.round(defaultLocationForecast.list[10].main.temp)}°</p>
                        <p className="forecast-day">{moment(defaultLocationForecast.list[10].dt_txt).format("ddd")}</p>
                      </Slide>
                      <Slide index={11} className="daily-forecast-item">
                        <p>{moment(defaultLocationForecast.list[11].dt_txt).format("h:mm A")}</p>
                        <div>
                          <img
                            src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[11].weather[0].icon}.png`}
                            alt={defaultLocationForecast.list[11].weather[0].main}
                          />
                        </div>
                        <p>{Math.round(defaultLocationForecast.list[11].main.temp)}°</p>
                        <p className="forecast-day">{moment(defaultLocationForecast.list[11].dt_txt).format("ddd")}</p>
                      </Slide>
                      <Slide index={12} className="daily-forecast-item">
                        <p>{moment(defaultLocationForecast.list[12].dt_txt).format("h:mm A")}</p>
                        <div>
                          <img
                            src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[12].weather[0].icon}.png`}
                            alt={defaultLocationForecast.list[12].weather[0].main}
                          />
                        </div>
                        <p>{Math.round(defaultLocationForecast.list[12].main.temp)}°</p>
                        <p className="forecast-day">{moment(defaultLocationForecast.list[12].dt_txt).format("ddd")}</p>
                      </Slide>
                      <Slide index={13} className="daily-forecast-item">
                        <p>{moment(defaultLocationForecast.list[13].dt_txt).format("h:mm A")}</p>
                        <div>
                          <img
                            src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[13].weather[0].icon}.png`}
                            alt={defaultLocationForecast.list[13].weather[0].main}
                          />
                        </div>
                        <p>{Math.round(defaultLocationForecast.list[13].main.temp)}°</p>
                        <p className="forecast-day">{moment(defaultLocationForecast.list[13].dt_txt).format("ddd")}</p>
                      </Slide>

                      <Slide index={14} className="daily-forecast-item">
                        <p>{moment(defaultLocationForecast.list[14].dt_txt).format("h:mm A")}</p>
                        <div>
                          <img
                            src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[14].weather[0].icon}.png`}
                            alt={defaultLocationForecast.list[14].weather[0].main}
                          />
                        </div>
                        <p>{Math.round(defaultLocationForecast.list[14].main.temp)}°</p>
                        <p className="forecast-day">{moment(defaultLocationForecast.list[14].dt_txt).format("ddd")}</p>
                      </Slide>
                      <Slide index={15} className="daily-forecast-item">
                        <p>{moment(defaultLocationForecast.list[15].dt_txt).format("h:mm A")}</p>
                        <div>
                          <img
                            src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[15].weather[0].icon}.png`}
                            alt={defaultLocationForecast.list[15].weather[0].main}
                          />
                        </div>
                        <p>{Math.round(defaultLocationForecast.list[15].main.temp)}°</p>
                        <p className="forecast-day">{moment(defaultLocationForecast.list[15].dt_txt).format("ddd")}</p>
                      </Slide>
                      <Slide index={16} className="daily-forecast-item">
                        <p>{moment(defaultLocationForecast.list[16].dt_txt).format("h:mm A")}</p>
                        <div>
                          <img
                            src={`http://openweathermap.org/img/w/${defaultLocationForecast.list[16].weather[0].icon}.png`}
                            alt={defaultLocationForecast.list[16].weather[0].main}
                          />
                        </div>
                        <p>{Math.round(defaultLocationForecast.list[16].main.temp)}°</p>
                        <p className="forecast-day">{moment(defaultLocationForecast.list[16].dt_txt).format("ddd")}</p>
                      </Slide>
                    </Slider>
                    <div className="swiper-btn-wrapper">
                      <ButtonBack>
                        <FaChevronLeft className="chevron-icon" />
                      </ButtonBack>
                      <ButtonNext>
                        <FaChevronRight className="chevron-icon" />
                      </ButtonNext>
                    </div>
                  </CarouselProvider>
                </div>
              ) : (
                ""
              )}
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
