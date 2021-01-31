import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchedData } from "../actions/weatherData";

// Import Styled
import styled from "styled-components";

//Import Image
import iconImg from "../images/icon.png";

const Nav = () => {
  const dispatch = useDispatch();
  const [searchCity, setSearchCity] = useState("");
  const inputHandler = (e) => {
    setSearchCity(e.target.value);
  };

  const searchHandler = (e) => {
    dispatch(searchedData(searchCity));
    e.preventDefault();
    setSearchCity("");
  };

  return (
    <StyledNav>
      <Logo>
        <img src={iconImg} alt="icon" />
        <h1>Weather App</h1>
      </Logo>
      <form className="search">
        <input value={searchCity} type="text" onChange={inputHandler} />
        <button onClick={searchHandler} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  margin: 2rem 4rem;
  padding: 2rem 0rem;
  min-height: 10vh;
  width: 90%;
  align-items: center;

  .search {
    display: flex;
    width: 30%;
    input {
      margin-right: 1rem;
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
      border: none;
      padding: 0.3rem;
      font-size: 1.5rem;
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
    width: 10%;
  }
`;

export default Nav;
