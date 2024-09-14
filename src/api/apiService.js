import axios from "axios";
import { BASE_URL } from "./config";
import { API_KEY } from "./config";

export const apiService = axios.create({
  baseURL: BASE_URL,
  params: "",
});

export const getTrendingMovies = async () => {
  const res = await apiService.get(`/trending/all/week?api_key=${API_KEY}`);
  const data = res.data.results;
  return data; // this will return a promise
};
export const getDiscoverMovies = async (pageId) => {
  const res = await apiService.get(
    `discover/movie?api_key=${API_KEY}&page=${pageId}&language=en-US`
  );
  const data = res.data.results;
  return data;
};

export const getMovieDetails = async (movieId) => {
  const res = await apiService.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
  );
  const data = res.data;
  return data;
};
// handle when post data through API
apiService.interceptors.request.use(
  (request) => {
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// handle when request data through API
apiService.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
