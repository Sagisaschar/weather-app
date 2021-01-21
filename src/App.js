import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// Import Actions
import weatherData from "./actions/weatherData";

import Home from "./components/Home";
import Nav from "./components/Nav";

// Import Style
import GlobalStyles from "./components/GlobalStyle";

function App() {
  const dispatch = useDispatch();

  const [dataWeather, setDataWeather] = useState("");
  const [searchCity, setSearchCity] = useState("");

  useEffect(() => {
    dispatch(weatherData());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Nav
        searchCity={searchCity}
        setSearchCity={setSearchCity}
        setDataWeather={setDataWeather}
      />
      <Home />
    </>
  );
}

export default App;
