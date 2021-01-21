const search = (state = "", action) => {
  switch (action.type) {
    case "SEARCH_CITY":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default search;
