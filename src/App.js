import { React, useEffect } from "react";
import { useDispatch } from "react-redux";

// Import Actions
import { weatherData } from "./actions/weatherData";

import Home from "./components/Home";
import Nav from "./components/Nav";

// Import Style
import GlobalStyles from "./components/GlobalStyle";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(weatherData());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Nav />
      <Home />
    </>
  );
}

export default App;
