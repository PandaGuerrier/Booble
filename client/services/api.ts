// @ts-ignore
import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" }
})

class Api {
  static async get(url: string) {
    try {
      const response = await api.get(url)
      return response.data
    } catch (error: any) {
      return {
        status: error.response.status,
        data: error.response.data.message
      }
    }
  }

  static async post(url: string, data: any) {
    try {
      const response = await api.post(url, data)
      return response.data
    } catch (error: any) {
      return {
          status: error.response.status,
          data: error.response.data
      }
    }
  }

  static async put(url: string, data: any) {
    try {
      const response = await api.put(url, data)
      return response.data
    } catch (error: any) {
      return {
        status: error.response.status,
        data: error.response.data.message
      }
    }
  }

  static async delete(url: string) {
    try {
      const response = await api.delete(url)
      return response.data
    } catch (error: any) {
      return {
        status: error.response.status,
        message: error.response.data.message
      }
    }
  }
}

export default Api