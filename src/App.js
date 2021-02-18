import { React, useEffect } from "react";
import { useDispatch } from "react-redux";

// Import Actions
import { weatherData } from "./actions/weatherData";

import Home from "./components/Home";
import Nav from "./components/Nav";

// Import Style
import GlobalStyles from "./components/GlobalStyle";

import { Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(weatherData());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Nav />
      <Route path={["/hours/day", "/"]}>
        <Home />
      </Route>
    </>
  );
}

export default App;
