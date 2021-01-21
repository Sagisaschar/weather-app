import React from "react";

// Import Styled
import styled from "styled-components";

const Card = ({ date, min, max, icon }) => {
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

  return (
    <StyledCard>
      <h2>{day}</h2>
      <h3>{date} </h3>
      <p>Min temp: {Math.floor(min)} &#8451;</p>
      <p>Max temp: {Math.floor(max)} &#8451;</p>
      <img src={icon} alt="icon" />
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  /* width: 70%; */
  align-items: center;
  height: 45vh;
  flex-direction: column;
  background: #8abcf9;
  border-radius: 1.5rem;
  font-size: 1.7rem;
  margin: 2rem 5rem;
  box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.5);
  p {
    padding-bottom: 1.5rem;
    font-weight: 400;
    font-size: 1.3rem;
  }
  h2,
  h3 {
    padding: 1rem 0.1rem;
    color: #fffb83;
  }
`;

export default Card;
