import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { themes } from "./styled-components/themes";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Futura";
  }
  
  a {
    display: block;
    cursor: pointer;
    text-decoration: none;
    
    &:disabled {
      cursor: default;
      pointer-events: none;
    }
  }
  
  button {
    display: block;
    cursor: pointer;
    text-transform: uppercase;
    
    &:disabled {
      cursor: default;
      pointer-events: none;
    }
  }
  
  i {
    display: block;
    cursor: pointer;
  }

  label {
    display: block;
    cursor: pointer;
  }
  
  input {
    display: block;
    cursor: pointer;
    outline: none;
  }
`;

ReactDOM.render(
    <ThemeProvider theme = { themes }>

        <GlobalStyle />

        <App />

    </ThemeProvider>,
    document.getElementById( 'root' )
);