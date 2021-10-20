import { ICountry } from 'app/utils/interfaces/country'
import { AxiosResponse } from 'axios'
import httpClient from 'app/services/http-service'
import { COUNTRIES_API_BASE_URL } from 'app/configs'

const countryHttpClient = httpClient.create({
  baseURL: COUNTRIES_API_BASE_URL,
})

const getAll = (): Promise<AxiosResponse<ICountry[]>> =>
  countryHttpClient.get(`/all`)

const getByName = (countryName: string): Promise<AxiosResponse<ICountry[]>> =>
  countryHttpClient.get(`/name/${countryName}`)

export const countryService = {
  getByName,
  getAll,
}
export default countryService
