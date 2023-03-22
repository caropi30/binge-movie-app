import axios from "axios";

const BASE_URL = "https://f25a-191-113-224-128.sa.ngrok.io/";

export async function getShow() {
  try {
    const response = await axios.get(`${BASE_URL}api/shows`);
    //console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const AUTH = `${BASE_URL}api/auth/login`;