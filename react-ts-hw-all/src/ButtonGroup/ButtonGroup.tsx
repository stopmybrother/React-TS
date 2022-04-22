import React from "react";
import styled, { css } from "styled-components";

interface IFlexBoxProps {
    alignItems?: string;
    flexDirection?: string;
    justifyContent?: string;
};

interface IButtonTagProps {
    borderRadius?: number;
};

interface IButtonGroupComponentProps {
    vertical?: boolean;
    children: React.ReactNode[] | null;
};

const FlexBox = styled.div<IFlexBoxProps>`
    margin: 0 auto 50px;
    padding: 0 16px;
    display: flex;
    flex-direction: ${ p => p.flexDirection || "row" };
    justify-content: ${ p => p.justifyContent || "space-between" };
    align-items: ${ p => p.alignItems || "center" };
`;

export const ButtonInButtonGroup = styled.button<IButtonTagProps>`
    max-width: 118px;
    width: 100%;
    padding: 47px 35px;
    border: 1px solid ${ p => p.theme.colors.black };
    border-radius: ${ p => p.borderRadius }%;
    background-color: ${ p => p.theme.colors.primaryPink };
    color: ${ p => p.theme.colors.translucentBlack };
    font-size: 16px;
    line-height: 20px;
  
    transition: 0.3s linear;

    &:hover:enabled {
        background-color: ${ p => p.theme.colors.hoverPink };
        color: ${ p => p.theme.colors.black };
    }
    &:active:enabled {
        background-color: ${ p => p.theme.colors.activePink };
        color: ${ p => p.theme.colors.black };
    }
`;

export const ButtonGroup = styled( FlexBox )<IButtonGroupComponentProps>`
    ${ p => p.vertical &&
        css`
            flex-direction: column;
            row-gap: 15px;
        `
     }
`;