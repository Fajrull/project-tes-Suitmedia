import axios from "axios";

const BASE_URL_API = "https://suitmedia-backend.suitdev.com/api/ideas";

const getApi = async () => {
  try {
    const url = `${BASE_URL_API}`;

    const response = await axios.get(url);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default getApi;
