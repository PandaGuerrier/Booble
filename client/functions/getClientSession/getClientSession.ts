import api from "@/services/api"
import { UserResponse } from "@/types/UserResponse"
import { AxiosError } from "axios"

export async function getClientSession(): Promise<UserResponse> {
  try {
    const response = await api.get('/auth/me')

    return {
      user: response.data.data,
      isConnected: true,
      error: null,
    }

  } catch (e) {
    const error = e as AxiosError
    return {
      user: null,
      isConnected: false,
      error
    }
  }
}