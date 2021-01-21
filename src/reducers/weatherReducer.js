const initState = {
  forecastWeather: null,
};

const dataWeather = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        forecastWeather: action.payload.forecastWeather,
      };
    default:
      return state;
  }
};

export default dataWeather;
