import React from "react";
import axios from "axios";

// Import Styled
import styled from "styled-components";

//Import Image
import iconImg from "../images/icon.png";

const Nav = ({ searchCity, setSearchCity, setDataWeather }) => {
  const inputHandler = (e) => {
    setSearchCity(e.target.value);
  };

  const searchHandler = (e) => {
    const fetchData = async () => {
      try {
        const results = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API}&q=${searchCity}&days=3`
        );
        setDataWeather(results.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    e.preventDefault();
  };

  return (
    <StyledNav>
      <Logo>
        <img src={iconImg} alt="icon" />
        <h1>Weather App</h1>
      </Logo>
      <form className="search">
        <input type="text" onChange={inputHandler} />
        <button onClick={searchHandler} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  margin: 2rem 5rem;
  padding: 2rem 0rem;
  min-height: 10vh;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  .search {
    display: flex;
    width: 30%;
    input {
      margin-right: 1rem;
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
      border: none;
      padding: 0.3rem;
      font-size: 1.5rem;
      width: 50%;
    }
    button {
      border: none;
      background: #ff7676;
      border-radius: 0.3rem;
      padding: 0.5rem 2rem;
      color: white;
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    button:hover {
      background: #ff6464;
    }
  }
`;

const Logo = styled.nav`
  display: flex;
  img {
    /* margin-right: auto; */
    width: 10%;
  }
`;

export default Nav;
