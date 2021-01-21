import React, { useEffect } from "react";
import Card from "./Card";

// Import State
import { useSelector } from "react-redux";

// Import Styled
import styled from "styled-components";

const Home = () => {
  const { forecastWeather } = useSelector((state) => state.forecastWeather);

  return (
    <HomeStyle>
      <h1>Weather in {forecastWeather ? forecastWeather.location.name : ""}</h1>
      <h2 className="country">
        {forecastWeather ? forecastWeather.location.country : ""}
      </h2>
      {forecastWeather &&
        forecastWeather.forecast.forecastday.map((state) => (
          <Card
            key={state.date_epoch}
            date={state.date}
            min={state.day.mintemp_c}
            max={state.day.maxtemp_c}
            icon={forecastWeather.current.condition.icon}
          />
        ))}
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  display: flex;
  h1 {
    width: 100%;
  }
  .country {
    position: relative;
    top: 20rem;
    right: 19.5rem;
    color: black;
    font-size: 3rem;
  }
`;

export default Home;
