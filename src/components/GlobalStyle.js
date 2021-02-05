import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0rem 0.5rem;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Roboto', sans-serif;
    width: 100%;
}
h1{
    font-size: 4rem;
    padding: 3rem 5rem;
    justify-content: center;
    font-weight: 400;
    color: #333;
}
h2{
    padding: 1rem 5rem;
    margin: 4rem 0rem;
    color: black;
    font-size: 3rem;
}
p{
    color: white;
}
a{
    text-decoration: none;
}

`;

export default GlobalStyles;
