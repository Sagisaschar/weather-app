import React from "react";

// Import Styled
import styled from "styled-components";
import { motion } from "framer-motion";

import { getHoursData } from "../actions/hoursData";

// Import State
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const Card = ({ date, min, max, icon, hours }) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date(date);
  const day = weekday[d.getDay()];

  const dispatch = useDispatch();

  const dayWeatherHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(getHoursData(hours));
  };

  return (
    <StyledCard onClick={dayWeatherHandler}>
      <Link to={`/hours/${day}`}>
        <h3>{day}</h3>
        <h4>{date} </h4>
        <p>Min temp: {Math.floor(min)} &#8451;</p>
        <p>Max temp: {Math.floor(max)} &#8451;</p>
        <img src={icon} alt="icon" />
      </Link>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  min-height: 30vh;
  background: #8abcf9;
  border-radius: 1rem;
  font-size: 1.7rem;
  text-align: center;
  box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  p {
    /* padding: 1rem 5rem; */
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 200%;
  }
  h3 {
    padding: 1.5rem;
    color: #fffb83;
    font-size: 2rem;
  }
  h4 {
    margin: 1rem 0rem;
  }
  img {
    padding: 0rem 5rem;
    width: 60%;
  }
  &:hover {
    transform: scale(1.03);
  }
`;

export default Card;
