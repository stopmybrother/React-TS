import React from "react";
import styled from "styled-components";

interface ICommonSizeBox {
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;

    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;

    maxWidth?: number;
    minWidth?: number;
    width?: number;
    maxHeight?: number;
    minHeight?: number;
    height?: number;
};

export const CommonSizeBox = styled.div<ICommonSizeBox>`
  margin-top: ${ p => p.marginTop || 0 }px;
  margin-right: ${ p => p.marginRight || 0 }px;
  margin-bottom: ${ p => p.marginBottom || 0 }px;
  margin-left: ${ p => p.marginLeft || 0 }px;

  padding-top: ${ p => p.paddingTop || 0 }px;
  padding-right: ${ p => p.paddingRight || 0 }px;
  padding-bottom: ${ p => p.paddingBottom || 0 }px;
  padding-left: ${ p => p.paddingLeft || 0 }px;
`;