import axios from "axios";

const token = localStorage.getItem("token");

export const getMovies = async (page) => {
  try {
    const response = await axios({
      baseURL: import.meta.env.VITE_MOVIES_APP_SERVER_URL,
      url: "movie/popular",
      method: "GET",
      params: {
        language: "en-US",
        page,
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
