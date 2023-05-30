import axios from 'axios'

const BASE_URL = 'https://0777-201-189-194-197.ngrok-free.app/'

export async function getShow () {
  try {
    const response = await axios.get(`${BASE_URL}api/shows`)
    // console.log(response);
    return response
  } catch (error) {
    console.error(error)
  }
}

export const AUTH_LOGIN = `${BASE_URL}api/auth/login`

export const AUTH_SIGNUP = `${BASE_URL}api/auth/signup`
