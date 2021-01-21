import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Roboto', sans-serif;
    width: 100%;
}
h1{
    font-size: 4rem;
    padding: 2rem 5rem;
    font-weight: 400;
    color: #333;
}
h2{
    color: #e8e8e8;
}
p{
    color: white;
}
`;

export default GlobalStyles;
