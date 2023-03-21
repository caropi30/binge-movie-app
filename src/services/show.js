import axios from "axios";

export async function getShow() {
  try {
    const response = await axios.get(
      "https://32ac-191-113-224-128.sa.ngrok.io/api/shows"
    );
    //console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
