import {
  INTERNAL_SERVER_ERROR,
  SOMETHING_WENT_WRONG,
} from 'app/utils/constants'
import { HttpStatusCodes } from 'app/utils/enums/http-status-codes'
import axios, { AxiosError, AxiosResponse } from 'axios'

const httpClient = axios

httpClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    switch (error.response?.status) {
      case HttpStatusCodes.Unauthorized:
      case HttpStatusCodes.BadRequest:
        break
      case HttpStatusCodes.InternalServerError:
        if (process.env.NODE_ENV === 'development') {
          console.log(INTERNAL_SERVER_ERROR)
        } else {
          console.log(SOMETHING_WENT_WRONG)
        }
        break
      default:
        break
    }
    return Promise.reject(error)
  }
)

export default httpClient
