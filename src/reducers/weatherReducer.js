const initState = {
  forecastWeather: null,
  hoursData: null,
};

const dataWeather = (state = initState, action) => {
  // console.log(state.hoursData);
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        forecastWeather: action.payload.forecastWeather,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        forecastWeather: action.payload.searched,
      };
    case "FETCH_HOURS":
      return {
        ...state,
        hoursData: action.payload.hoursData,
      };
    default:
      return state;
  }
};

export default dataWeather;
