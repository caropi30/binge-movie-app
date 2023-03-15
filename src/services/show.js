import axios from "axios";

export async function getShow() {
  try {
    const response = await axios.get(
      "https://be7e-201-189-193-242.sa.ngrok.io/api/shows"
    );
    //console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
