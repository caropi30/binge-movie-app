import axios from "axios";

export async function getShow() {
  try {
    const response = await axios.get(
      "https://2d98-191-113-226-161.sa.ngrok.io/api/shows"
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
