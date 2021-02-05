import dataWeather from "./weatherReducer";
import dataHours from "./hoursReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  forecastWeather: dataWeather,
  dataHours: dataHours,
});

export default rootReducers;
