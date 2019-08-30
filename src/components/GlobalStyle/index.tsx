import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        font-family: "Varela Round", sans-serif;  
        user-select: none;
    display: flex;
    flex-wrap: wrap;
      }
`;
