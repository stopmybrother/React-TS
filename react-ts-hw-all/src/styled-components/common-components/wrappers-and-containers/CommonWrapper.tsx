import React from "react";
import styled from "styled-components";
import { CommonSizeBox } from "./BoxDefault";

interface IWrapper {
    borderRadius?: number;
    backGroundColor?: string;
};

export const CommonWrapper = styled( CommonSizeBox )<IWrapper>`
  max-width: 100%;
  min-height: 100vh;
  background-color: ${ p => p.backGroundColor};
`;