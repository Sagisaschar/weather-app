import dataWeather from "./weatherReducer";
// import search from "./searchReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  forecastWeather: dataWeather,
  // searchWeather: search,
});

export default rootReducers;
