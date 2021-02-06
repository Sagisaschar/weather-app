import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

const DetailsHours = () => {
  // Data
  const { dataHours } = useSelector((state) => state.dataHours);
  console.log(dataHours);
  return (
    <CardShadow>
      <Detail>
        <div className="dayHours">
          <div className="day">
            <h3>{dataHours && dataHours[0].time.slice(0, 10)}</h3>
          </div>
          <div className="info">
            {dataHours &&
              dataHours.map((state) => (
                <div>
                  <h3 key={state.text}>{state.time.slice(10)}</h3>
                  <p>{Math.floor(state.temp_c)} &#8451;</p>
                  <p>{state.condition.text}</p>
                  <img src={state.condition.icon} alt={state.condition.text} />
                </div>
              ))}
          </div>
        </div>
      </Detail>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem 1rem; */
  position: fixed;
  overflow-y: scroll;
  margin: 0;
  width: 100%;
  top: 0;
  left: 0;
  min-height: 100vh;
  /* border-radius: 15px; */
  background: rgba(0, 0, 0, 0.5);
  /* color: white;
  padding: 2rem;
  padding-top: 5rem;
  border: 3px solid #9a9a9a; */
  /* div {
    display: flex;
    background: #6d6d6d;
    width: 100%;
    padding: 3px;
    font-size: 0.7rem;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    img {
      width: 30px;
      height: 30px;
    }
  }
  h2 {
    width: 100%;
    position: absolute;
    color: white;
    font-size: 2rem;
    padding: 2rem;
    margin: 0;
    text-align: center;
  } */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: white;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #90bfe8;
    /* outline: 1px solid #ffffff; */
  }
`;

const Detail = styled(motion.div)`
  width: 30%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  p {
    color: black;
  }
`;

export default DetailsHours;
