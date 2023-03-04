import axios from "axios";

export async function getShow() {
  try {
    const response = await axios.get(
      "https://fabf-201-189-201-131.sa.ngrok.io/api/shows"
    );
    //console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
