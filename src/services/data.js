import axios from 'axios'
import Cookies from 'js-cookie'

const BASE_URL = 'https://9a5c-201-246-59-217.ngrok-free.app/'

const TOKEN = Cookies.get('JWT')

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

export async function putShow (id) {
  const { data } = await axios.put(`${BASE_URL}api/users/favorite-shows`, { showId: id }, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
}
