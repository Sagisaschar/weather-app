const initState = {
  forecastWeather: null,
  hoursData: null,
  isLoading: true,
};

const dataWeather = (state = initState, action) => {
  // console.log(state.hoursData);
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        forecastWeather: action.payload.forecastWeather,
        isLoading: false,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        forecastWeather: action.payload.searched,
        isLoading: false,
      };
    case "LOADING_WEATHER":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default dataWeather;
