import axios from "axios";
import { forecastWeather } from "../api";

const weatherData = () => async (dispatch) => {
  const results = await axios.get(`${forecastWeather()}=Yehud&days=3`);

  dispatch({
    type: "FETCH_DATA",
    payload: {
      forecastWeather: results.data,
    },
  });
};

export default weatherData;
