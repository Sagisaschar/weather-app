const BASE_URL = "https://api.weatherapi.com/v1/";

const forecast =
  BASE_URL + `forecast.json?key=${process.env.REACT_APP_WEATHER_API}&q=`;

export const forecastWeather = () => forecast;

export const searchedWeather = (input_searched) => {
  return (
    BASE_URL +
    `forecast.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input_searched}&days=3`
  );
};

// const currentWeather =
//   BASE_URL + `current.json?key=${process.env.REACT_APP_WEATHER_API}&q=`;

// const searchAutocomplete =
//   BASE_URL + `search.json?key=${process.env.REACT_APP_WEATHER_API}&q=`;

// const history =
//   BASE_URL + `history.json?key=${process.env.REACT_APP_WEATHER_API}&q=`;

// const timeZone =
//   BASE_URL + `timezone.json?key=${process.env.REACT_APP_WEATHER_API}&q=`;

// const sports =
//   BASE_URL + `sports.json?key=${process.env.REACT_APP_WEATHER_API}&q=`;

// const astronomy =
//   BASE_URL + `astronomy.json?key=${process.env.REACT_APP_WEATHER_API}&q=`;

// const ipLookup =
//   BASE_URL + `ip.json?key=${process.env.REACT_APP_WEATHER_API}&q=`;
