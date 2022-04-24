import React from "react";
import styled from "styled-components";
import { CommonSizeBox } from "./BoxDefault";
import { BoxFlexDefault } from "./BoxFlexDefault";

interface IContainer {
    borderRadius?: number;
    backGroundColor?: string;
};

export const CommonContainer = styled( CommonSizeBox )<IContainer>`
  margin-bottom: 50px;
  padding-right: 16px;
  padding-left: 16px;
  max-width: 1440px;
  width: 100%;
  border-radius: ${ p => p.borderRadius || 0};
  background-color: ${ p => p.backGroundColor};
`;

export const CommonContainerFlexBox = styled( BoxFlexDefault )<IContainer>`
  margin-bottom: 50px;
  padding-right: 16px;
  padding-left: 16px;
  max-width: 1440px;
  width: 100%;
  border-radius: ${ p => p.borderRadius || 0};
  background-color: ${ p => p.backGroundColor};
`;