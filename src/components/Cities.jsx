import { useState, useEffect } from "react";

function Cities() {
  const api = {
    key: process.env.REACT_APP_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const [cardiff, setCardiff] = useState({});
  const [edinburgh, setEdinburgh] = useState({});
  const [manchester, setManchester] = useState({});
  const [birmingham, setBirmingham] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${api.base}weather?q=cardiff&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setCardiff(result);
        console.log(result);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`${api.base}weather?q=edinburgh&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setEdinburgh(result);
        console.log(result);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`${api.base}weather?q=manchester&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setManchester(result);
        console.log(result);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    fetch(`${api.base}weather?lat=52.4814&lon=-1.8998&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setBirmingham(result);
        console.log(result);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <div>
          <div>
            <p>{cardiff.name}</p>
            {typeof cardiff.main != "undefined" ? (
              <img
                src={`http://openweathermap.org/img/w/${cardiff.weather[0].icon}.png`}
                alt={cardiff.weather[0].main}
              />
            ) : (
              ""
            )}
          </div>
          <div>
            <p>{edinburgh.name}</p>{" "}
            {typeof edinburgh.main != "undefined" ? (
              <img
                src={`http://openweathermap.org/img/w/${edinburgh.weather[0].icon}.png`}
                alt={edinburgh.weather[0].main}
              />
            ) : (
              ""
            )}
          </div>
          <div>
            <p>
              <p>{manchester.name}</p>{" "}
              {typeof manchester.main != "undefined" ? (
                <img
                  src={`http://openweathermap.org/img/w/${manchester.weather[0].icon}.png`}
                  alt={manchester.weather[0].main}
                />
              ) : (
                ""
              )}
            </p>
          </div>
          <div>
            <p>{birmingham.name}</p>
            {typeof birmingham.main != "undefined" ? (
              <img
                src={`http://openweathermap.org/img/w/${birmingham.weather[0].icon}.png`}
                alt={birmingham.weather[0].main}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Cities;
