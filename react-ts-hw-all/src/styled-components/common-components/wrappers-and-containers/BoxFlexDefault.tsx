import React from "react";
import styled from "styled-components";
import { CommonSizeBox } from "./Box";

type TFlexDirectionTypes =
    "row"
    | "row-reverse"
    | "column"
    | "column-reverse";

type TFlexWrapTypes =
    "nowrap"
    | "wrap"
    | "wrap-reverse";

type TJustifyContentTypes =
    "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";

type TAlignItemsTypes =
    "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";

interface IFlexBoxProps {
    flexDirection?: TFlexDirectionTypes;
    flexWrap?: TFlexWrapTypes
    justifyContent?: TJustifyContentTypes;
    alignItems?: TAlignItemsTypes;
};

export const FlexBox = styled( CommonSizeBox )<IFlexBoxProps>`
  display: flex;
  flex-direction: ${ p => p.flexDirection || "row" };
  flex-wrap: ${ p => p.flexWrap || "nowrap" };
  justify-content: ${ p => p.justifyContent || "center" };
  align-items: ${ p => p.alignItems || "center" };
`;