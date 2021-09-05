import { Client, WeatherForecast } from "../sdk";

export class WeatherForecastService {
  private clientApi = new Client("http://localhost:8000");
  async getForecasts(): Promise<WeatherForecast[]> {
    return this.clientApi.weatherForecast();
  }
}
