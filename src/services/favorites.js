import axios from 'axios'
import { BASE_URL, TOKEN } from './data'

export async function putShow (id) {
  const { data } = await axios.put(`${BASE_URL}api/users/favorite-shows`, { showId: id }, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
  console.log(data)
}

export async function getFavoriteShows () {
  try {
    const response = await axios.get(`${BASE_URL}api/users/favorite-shows`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}
