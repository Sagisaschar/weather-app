import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

const DetailsHours = () => {
  const history = useHistory();

  const exitDetails = (e) => {
    console.log(e);
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  // Data
  const { dataHours } = useSelector((state) => state.dataHours);

  const { isLoading } = useSelector((state) => state.forecastWeather);
  // console.log(dataHours);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetails}>
          <Detail>
            <Link to="/">
              <Bibi className="shadow" onClick={exitDetails}>
                X
              </Bibi>
            </Link>
            <Day>
              <h3>{dataHours && dataHours[0].time.slice(0, 10)}</h3>
            </Day>
            <Stats>
              <Info>
                {dataHours &&
                  dataHours.map((state) => (
                    <Condition key={state.time_epoch}>
                      <h3 key={state.text}>{state.time.slice(10)}</h3>
                      <p>{Math.floor(state.temp_c)} &#8451;</p>
                      <p>{state.condition.text}</p>
                      <img
                        src={state.condition.icon}
                        alt={state.condition.text}
                      />
                    </Condition>
                  ))}
              </Info>
            </Stats>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const Bibi = styled(motion.div)`
  background: black;
  color: white;
  width: 25px;
  height: 20px;
  position: fixed;
  top: 10;
  left: 200px;
  border-radius: 50%;
  align-content: center;
`;

const CardShadow = styled(motion.div)`
  position: fixed;
  overflow-y: scroll;
  margin: 0;
  width: 100%;
  top: 0;
  left: 0;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
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
  width: 80%;
  height: 90%;
  top: 5%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  text-align: center;
  margin: 0 auto;
  overflow-y: scroll;
  p {
    color: black;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  width: 100%;
  text-align: center;
`;

const Condition = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    width: 10%;
  }
`;

const Day = styled(motion.div)`
  width: 80%;
  margin: 1rem auto;
  font-size: 1.7rem;
`;

export default DetailsHours;
