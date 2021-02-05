import React from "react";
import Card from "./Card";

import DetailsHours from "./DetailsHours";

// Import Animation
import { motion } from "framer-motion";

// Import State
import { useSelector } from "react-redux";

// Import Styled
import styled from "styled-components";

const Home = () => {
  const { forecastWeather } = useSelector((state) => state.forecastWeather);
  return (
    <>
      <h2>
        Weather in {forecastWeather ? forecastWeather.location.name : ""}
        {", "}
        {forecastWeather ? forecastWeather.location.country : ""}
      </h2>
      <HomeStyle>
        <DetailsHours />
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
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 3rem 3rem;
`;

export default Home;
