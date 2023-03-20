import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
// import Container from "react-bootstrap/Container";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState();
  const Api = "fa1906045f11eff43fee5f29266882c8";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${Api}`;
  function showLocation() {
    axios.get(url).then(function (response) {
      setData(response.data);
    });
    setLocation();
  }

  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          placeholder="Give Your City Name"
          onChange={(e) => setLocation(e.target.value)}
        />
        <BsSearch
          className="searchIcon"
          onClick={showLocation}
        />
      </div>
      <div className="Section1">
        <div className="Item1">City Name : {data.name}</div>
        <div className="Item1">
          City Temperature :{data.main ? <h2>{data.main.temp}°C</h2> : ""}
        </div>
      </div>
      <div className="Section2">
        <div className="Section2Part1">
          <div className="Item2">
            IOC:{data.sys ? <h6>{data.sys.country}</h6> : ""}
          </div>
          <div className="Item2">
            Longitude : {data.coord ? <h6>{data.coord.lon}</h6> : ""} °
          </div>
          <div className="Item2">
            Latitude : {data.coord ? <h6>{data.coord.lat}</h6> : ""} °
          </div>

          <div className="Item2">
            Overview :{" "}
            {data.weather ? <p>{data.weather[0].description}</p> : ""}
          </div>
        </div>
        <div className="Section2Part2">
          <div className="Item2">
            Feel Temperature : {data.main ? <p>{data.main.feels_like}</p> : ""}
            °F
          </div>
          <div className="Item2">
            Humidity : {data.main ? <h6>{data.main.humidity}</h6> : ""}%
          </div>
          <div className="Item2">
            Atmospheric Pressure :{" "}
            {data.main ? <h6>{data.main.pressure}</h6> : ""} Pa
          </div>
          <div className="Item2">
            Wind Speed:{data.wind ? <h6>{data.wind.speed}</h6> : ""} kt
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
