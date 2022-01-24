import moment from "moment";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "pure-react-carousel/dist/react-carousel.es.css";

function DailyForecast({ forecast }) {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={6}
      className="daily-forecast-wrapper"
    >
      <Slider>
        <Slide index={0} className="daily-forecast-item">
          <p>{moment(forecast.list[0].dt_txt).format("h:mm A")}</p>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${forecast.list[0].weather[0].icon}.png`}
              alt={forecast.list[0].weather[0].main}
            />
          </div>
          <p>{Math.round(forecast.list[0].main.temp)}°</p>
          <p className="forecast-day">{moment(forecast.list[0].dt_txt).format("ddd")}</p>
        </Slide>
        <Slide index={1} className="daily-forecast-item">
          <p>{moment(forecast.list[1].dt_txt).format("h:mm A")}</p>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${forecast.list[1].weather[0].icon}.png`}
              alt={forecast.list[1].weather[0].main}
            />
          </div>
          <p>{Math.round(forecast.list[1].main.temp)}°</p>
          <p className="forecast-day">{moment(forecast.list[1].dt_txt).format("ddd")}</p>
        </Slide>
        <Slide index={2} className="daily-forecast-item">
          <p>{moment(forecast.list[2].dt_txt).format("h:mm A")}</p>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${forecast.list[2].weather[0].icon}.png`}
              alt={forecast.list[2].weather[0].main}
            />
          </div>
          <p>{Math.round(forecast.list[2].main.temp)}°</p>
          <p className="forecast-day">{moment(forecast.list[2].dt_txt).format("ddd")}</p>
        </Slide>
        <Slide index={3} className="daily-forecast-item">
          <p>{moment(forecast.list[3].dt_txt).format("h:mm A")}</p>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${forecast.list[3].weather[0].icon}.png`}
              alt={forecast.list[3].weather[0].main}
            />
          </div>
          <p>{Math.round(forecast.list[3].main.temp)}°</p>
          <p className="forecast-day">{moment(forecast.list[3].dt_txt).format("ddd")}</p>
        </Slide>
        <Slide index={4} className="daily-forecast-item">
          <p>{moment(forecast.list[4].dt_txt).format("h:mm A")}</p>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${forecast.list[4].weather[0].icon}.png`}
              alt={forecast.list[4].weather[0].main}
            />
          </div>
          <p>{Math.round(forecast.list[4].main.temp)}°</p>
          <p className="forecast-day">{moment(forecast.list[4].dt_txt).format("ddd")}</p>
        </Slide>
        <Slide index={5} className="daily-forecast-item">
          <p>{moment(forecast.list[5].dt_txt).format("h:mm A")}</p>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${forecast.list[5].weather[0].icon}.png`}
              alt={forecast.list[5].weather[0].main}
            />
          </div>
          <p>{Math.round(forecast.list[5].main.temp)}°</p>
          <p className="forecast-day">{moment(forecast.list[5].dt_txt).format("ddd")}</p>
        </Slide>
        <Slide index={6} className="daily-forecast-item">
          <p>{moment(forecast.list[6].dt_txt).format("h:mm A")}</p>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${forecast.list[6].weather[0].icon}.png`}
              alt={forecast.list[6].weather[0].main}
            />
          </div>
          <p>{Math.round(forecast.list[6].main.temp)}°</p>
          <p className="forecast-day">{moment(forecast.list[6].dt_txt).format("ddd")}</p>
        </Slide>
        <Slide index={7} className="daily-forecast-item">
          <p>{moment(forecast.list[7].dt_txt).format("h:mm A")}</p>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${forecast.list[7].weather[0].icon}.png`}
              alt={forecast.list[7].weather[0].main}
            />
          </div>
          <p>{Math.round(forecast.list[7].main.temp)}°</p>
          <p className="forecast-day">{moment(forecast.list[7].dt_txt).format("ddd")}</p>
        </Slide>
        <Slide index={8} className="daily-forecast-item">
          <p>{moment(forecast.list[8].dt_txt).format("h:mm A")}</p>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${forecast.list[8].weather[0].icon}.png`}
              alt={forecast.list[8].weather[0].main}
            />
          </div>
          <p>{Math.round(forecast.list[8].main.temp)}°</p>
          <p className="forecast-day">{moment(forecast.list[8].dt_txt).format("ddd")}</p>
        </Slide>
        <Slide index={9} className="daily-forecast-item">
          <p>{moment(forecast.list[9].dt_txt).format("h:mm A")}</p>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${forecast.list[9].weather[0].icon}.png`}
              alt={forecast.list[9].weather[0].main}
            />
          </div>
          <p>{Math.round(forecast.list[9].main.temp)}°</p>
          <p className="forecast-day">{moment(forecast.list[9].dt_txt).format("ddd")}</p>
        </Slide>
        <Slide index={10} className="daily-forecast-item">
          <p>{moment(forecast.list[10].dt_txt).format("h:mm A")}</p>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${forecast.list[10].weather[0].icon}.png`}
              alt={forecast.list[10].weather[0].main}
            />
          </div>
          <p>{Math.round(forecast.list[10].main.temp)}°</p>
          <p className="forecast-day">{moment(forecast.list[10].dt_txt).format("ddd")}</p>
        </Slide>
        <Slide index={11} className="daily-forecast-item">
          <p>{moment(forecast.list[11].dt_txt).format("h:mm A")}</p>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${forecast.list[11].weather[0].icon}.png`}
              alt={forecast.list[11].weather[0].main}
            />
          </div>
          <p>{Math.round(forecast.list[11].main.temp)}°</p>
          <p className="forecast-day">{moment(forecast.list[11].dt_txt).format("ddd")}</p>
        </Slide>
        <Slide index={12} className="daily-forecast-item">
          <p>{moment(forecast.list[12].dt_txt).format("h:mm A")}</p>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${forecast.list[12].weather[0].icon}.png`}
              alt={forecast.list[12].weather[0].main}
            />
          </div>
          <p>{Math.round(forecast.list[12].main.temp)}°</p>
          <p className="forecast-day">{moment(forecast.list[9].dt_txt).format("ddd")}</p>
        </Slide>
        <Slide index={13} className="daily-forecast-item">
          <p>{moment(forecast.list[13].dt_txt).format("h:mm A")}</p>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${forecast.list[13].weather[0].icon}.png`}
              alt={forecast.list[13].weather[0].main}
            />
          </div>
          <p>{Math.round(forecast.list[13].main.temp)}°</p>
          <p className="forecast-day">{moment(forecast.list[13].dt_txt).format("ddd")}</p>
        </Slide>
        <Slide index={14} className="daily-forecast-item">
          <p>{moment(forecast.list[14].dt_txt).format("h:mm A")}</p>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${forecast.list[14].weather[0].icon}.png`}
              alt={forecast.list[14].weather[0].main}
            />
          </div>
          <p>{Math.round(forecast.list[14].main.temp)}°</p>
          <p className="forecast-day">{moment(forecast.list[14].dt_txt).format("ddd")}</p>
        </Slide>
        <Slide index={15} className="daily-forecast-item">
          <p>{moment(forecast.list[15].dt_txt).format("h:mm A")}</p>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${forecast.list[15].weather[0].icon}.png`}
              alt={forecast.list[15].weather[0].main}
            />
          </div>
          <p>{Math.round(forecast.list[15].main.temp)}°</p>
          <p className="forecast-day">{moment(forecast.list[15].dt_txt).format("ddd")}</p>
        </Slide>
        <Slide index={16} className="daily-forecast-item">
          <p>{moment(forecast.list[16].dt_txt).format("h:mm A")}</p>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${forecast.list[16].weather[0].icon}.png`}
              alt={forecast.list[16].weather[0].main}
            />
          </div>
          <p>{Math.round(forecast.list[16].main.temp)}°</p>
          <p className="forecast-day">{moment(forecast.list[16].dt_txt).format("ddd")}</p>
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
  );
}

export default DailyForecast;
