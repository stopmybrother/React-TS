import React from "react";
import styled, { css } from "styled-components";
import { CommonContainer } from "../styled-components/common-components/wrappers-and-containers/CommonContainer";
import { TButtonComponentStyle, TLink } from './button-types';

interface IButtonTagProps {
    borderRadius: number;
    disabled: boolean;
    active: boolean;
};

interface ILinkTagProps {
    active: boolean;
    href: string;
};

interface IButtonComponentProps {
    active?: boolean;
    children: string;
    disabled?: boolean;
    href?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type: TButtonComponentStyle;
};

const Btn = styled.button<IButtonTagProps>`
    margin: 0 auto;
    padding: 10px 50px;
    border: 1px solid ${ p => p.theme.colors.borderColor };
    border-radius: ${p => p.borderRadius}px;
    background-color: ${ p => p.theme.colors.primaryBlue };
    color: ${ p => p.theme.colors.translucentBlack };
    font-size: 32px;
    line-height: 28px;

    transition: 0.3s linear;
  
    &:hover:enabled {
        background-color: ${ p => p.theme.colors.hoverBlue };
        color: ${ p => p.theme.colors.black };
    }
    &:active:enabled {
        transition: 0s linear;
        background-color: ${ p => p.theme.colors.activeBlue };
        color: ${ p => p.theme.colors.black };
    }

    ${p => p.active && css`
        background-color: ${ p => p.theme.colors.primaryGreen };
        &:hover:enabled {
          background-color: ${ p => p.theme.colors.hoverGreen };
          color: ${ p => p.theme.colors.black };
        }
        &:active:enabled {
          transition: 0s linear;
          background-color: ${ p => p.theme.colors.activeGreen };
          color: ${ p => p.theme.colors.black };
        }
    `}

    ${p => p.disabled && css`
        background-color: ${ p => p.theme.colors.disabledBlue };
    `}
`;

const Link = styled.a<ILinkTagProps>`
    margin: 0 auto 50px;
    font-size: 32px;
    line-height: 28px;
    color: ${ p => p.theme.colors.primaryBlue };
    
    transition: 0.3s linear;
    
    &:hover {
        color: ${ p => p.theme.colors.hoverBlue };
    }
    &:active {
        transition: 0s linear;
        color: ${ p => p.theme.colors.activeBlue };
    }

    ${p => p.active && css`
        background-color: ${ p => p.theme.colors.primaryGreen };
            &:hover {
              background-color: ${ p => p.theme.colors.hoverGreen };
              color: ${ p => p.theme.colors.black };
            }
            &:active {
              transition: 0s linear;
              background-color: ${ p => p.theme.colors.activeGreen };
              color: ${ p => p.theme.colors.black };
            }
        `}
`;

export const Button = ( {
                            active = false,
                            children = "Default button",
                            disabled = false,
                            href = "#",
                            onClick = () => {},
                            type = "button",
                        }: IButtonComponentProps ) => {

    const handleClick = ( e: React.MouseEvent<HTMLButtonElement> ) => {
        if ( disabled ) {
            e.preventDefault();
        } else {
            console.log( "Click" );
            return onClick( e );
        }
    };

    const isLink = type === "link" && href;

    return (
        <>
            <CommonContainer>
                {isLink ? (
                    <Link
                        active = { active }
                        href = { href }
                    >
                        { children }
                    </Link>
                ) : (
                    <Btn
                        active = { active }
                        borderRadius = { 10 }
                        disabled = { disabled }
                        onClick = { handleClick }
                        type = { type as Exclude<TButtonComponentStyle, TLink> }
                    >
                        { children }
                    </Btn>
                )}
            </CommonContainer>
        </>
    );
};