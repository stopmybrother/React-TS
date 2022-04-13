import React from "react";

import styled from "styled-components";


interface IFlexBoxProps {
    alignItems: string;
    className: string;
    flexDirection: string;
    justifyContent: string;
};

interface IButtonTagProps {
    borderRadius: number;
    className: string;
};

interface IButtonGroupComponentProps {
    vertical?: boolean;
    children: React.ReactNode[] | null;
    className: string;
};


const FlexBox = styled.div<IFlexBoxProps>`
    margin: 0 auto 50px;
    padding: 0 16px;
    display: flex;
    flex-direction: ${ p => p.flexDirection };
    justify-content: ${ p => p.justifyContent };
    align-items: ${ p => p.alignItems };
    row-gap: 15px;
`;

const ButtonInButtonGroup = styled.button<IButtonTagProps>`
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


export const ButtonGroup = ({
                                vertical = false,
                                children = null,
                                className = "",
                            }: IButtonGroupComponentProps) => {

    const Buttons = children !== null && children.map( ( button, index ) => {
        return (
            <ButtonInButtonGroup
                borderRadius = { 50 }
                className = { `${ className } btn` }
            >
                btn { index + 1 }
            </ButtonInButtonGroup>
            )
        }
    );

    return (
        <>
            <FlexBox
                className = { className }
                flexDirection = { vertical ? "column" : "row" }
                justifyContent = { "space-between" }
                alignItems = { "center" }
            >
                { Buttons }
            </FlexBox>
        </>
    )
};