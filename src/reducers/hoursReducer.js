const initState = {
  dataHours: null,
};

const dataHours = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_HOURS":
      return {
        ...state,
        dataHours: action.payload.hoursData,
      };
    default:
      return state;
  }
};

export default dataHours;
