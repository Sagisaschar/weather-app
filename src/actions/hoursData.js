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
