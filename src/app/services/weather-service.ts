import { AxiosResponse } from 'axios'
import httpClient from 'app/services/http-service'
import { ICapitalWeatherInfo } from 'app/utils/interfaces/weather'
import { WEATHER_API_ACCESS_KEY, WEATHER_API_BASE_URL } from 'app/configs'
export const weatherHttpClient = httpClient.create({
  baseURL: WEATHER_API_BASE_URL,
})

const getWeatherByCity = (
  cityName: string
): Promise<AxiosResponse<ICapitalWeatherInfo>> =>
  weatherHttpClient.get(
    `/current?access_key=${WEATHER_API_ACCESS_KEY}&query=${cityName}`
  )

const weatherService = {
  getWeatherByCity,
}

export default weatherService
