import axios from 'axios'
import Cookies from 'js-cookie'

export const BASE_URL = 'https://a5c6-201-189-219-65.ngrok-free.app/'

export const TOKEN = Cookies.get('JWT')

export async function getShow (category) {
  try {
    const response = category
      ? await axios.get(`${BASE_URL}api/shows?category=${category}`)
      : await axios.get(`${BASE_URL}api/shows`)
    return response
  } catch (error) {
    console.error(error)
  }
}

export const AUTH_LOGIN = `${BASE_URL}api/auth/login`

export const AUTH_SIGNUP = `${BASE_URL}api/auth/signup`
