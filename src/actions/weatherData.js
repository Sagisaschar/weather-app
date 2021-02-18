import axios from "axios";
import { forecastWeather, searchedWeather } from "../api";

export const weatherData = () => async (dispatch) => {
  dispatch({
    type: "LOADING_WEATHER",
  });

  const results = await axios.get(`${forecastWeather()}Barcelona&days=3`);

  dispatch({
    type: "FETCH_DATA",
    payload: {
      forecastWeather: results.data,
    },
  });
};

export const searchedData = (input_searched) => async (dispatch) => {
  dispatch({
    type: "LOADING_WEATHER",
  });
  const results = await axios.get(searchedWeather(input_searched), {
    timeout: 3000,
  });

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: results.data,
    },
  });
};
