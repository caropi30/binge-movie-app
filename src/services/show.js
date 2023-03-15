import axios from "axios";

export async function getShow() {
  try {
    const response = await axios.get(
      "https://495a-201-189-200-68.sa.ngrok.io/api/shows"
    );
    //console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
