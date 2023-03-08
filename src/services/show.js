import axios from "axios";

export async function getShow() {
  try {
    const response = await axios.get(
      "https://a62f-201-189-202-86.sa.ngrok.io/api/shows"
    );
    //console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
