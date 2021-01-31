import axios from "axios";
import { forecastWeather, searchedWeather } from "../api";

export const weatherData = () => async (dispatch) => {
  const results = await axios.get(`${forecastWeather()}Barcelona&days=3`);

  dispatch({
    type: "FETCH_DATA",
    payload: {
      forecastWeather: results.data,
    },
  });
};

export const searchedData = (input_searched) => async (dispatch) => {
  const results = await axios.get(searchedWeather(input_searched));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: results.data,
    },
  });
};

export const getHoursData = (hours) => async (dispatch) => {
  // const results = await axios.get(searchedWeather(input_searched));
  // console.log(hours);
  dispatch({
    type: "FETCH_HOURS",
    payload: {
      hoursData: hours,
    },
  });
};
