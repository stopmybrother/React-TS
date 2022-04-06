import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import styled, { css } from "styled-components";

const Global = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
`

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);