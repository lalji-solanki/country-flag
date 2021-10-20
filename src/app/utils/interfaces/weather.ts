export interface ILocation {
  name: string
  country: string
}

export interface ICurrentWeather {
  weather_icons: string[]
  temperature: number
  wind_speed: number
  precip: number
}

export interface ICapitalWeatherInfo {
  location: ILocation
  current: ICurrentWeather
}
