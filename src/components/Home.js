import React from "react";
import Card from "./Card";

// Import Animation
import { motion } from "framer-motion";

// Import State
import { useSelector } from "react-redux";

// Import Styled
import styled from "styled-components";

const Home = () => {
  const { forecastWeather } = useSelector((state) => state.forecastWeather);
  // console.log(forecastWeather);
  return (
    <>
      <h2>
        Weather in {forecastWeather ? forecastWeather.location.name : ""}
        {", "}
        {forecastWeather ? forecastWeather.location.country : ""}
      </h2>
      <HomeStyle>
        {forecastWeather &&
          forecastWeather.forecast.forecastday.map((state) => (
            <Card
              key={state.date_epoch}
              date={state.date}
              min={state.day.mintemp_c}
              max={state.day.maxtemp_c}
              hours={state.hour}
              icon={forecastWeather.current.condition.icon}
            />
          ))}
      </HomeStyle>
    </>
  );
};

const HomeStyle = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default Home;
