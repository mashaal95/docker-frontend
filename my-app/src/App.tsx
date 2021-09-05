import React, { useEffect, useState } from "react";
// import logo from "logo.svg";
import "./App.css";
import { WeatherForecastService } from "./services/WeatherForecastService";
import { WeatherForecast } from "./sdk";

function App() {
  const [forecasts, setForecasts] = useState<WeatherForecast[]>();

  const service = new WeatherForecastService();
  useEffect(() => {
    async function getData() {
      const res = await service.getForecasts();
      if (res && res.length !== 0) {
        setForecasts(res);
      }
    }
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {forecasts && forecasts[0] && forecasts[0].id && forecasts.map((forecast) => {
          return (<div>
            <p>{forecast.id}</p>
            <p>{forecast.date}</p>
            <p>{forecast.summary}</p>
            <p>{forecast.temperatureC}</p>
            <p>{forecast.temperatureF}</p>
          </div>)
        }
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
