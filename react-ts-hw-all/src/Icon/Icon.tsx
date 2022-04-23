import React from "react";
import styled, { css } from "styled-components";
import { CommonContainer } from "../styled-components/common-components/wrappers-and-containers/CommonContainer";

interface IIconTagProps {
    borderRadius: number;
    className: string;
    disabled: boolean;
    name: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    size: number;
};

interface IIconComponentProps {
    name: string;
    className: string;
    size: number;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
};

const IconSmall = styled.i<IIconTagProps>`
  display: block;
  margin: 0 auto;
  width: 90px;
  height: 90px;
  position: relative;
  border: 1px solid ${ p => p.theme.colors.black };
  border-radius: ${ p => p.borderRadius }%;
  background-color: ${ p => p.theme.colors.primaryOrange };
  font-size: ${ p => p.size }px;
  transition: all 0.3s linear;
  &:before {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    background-color: ${ p => p.theme.colors.hoverOrange };
  }
  &:active {
    background-color: ${ p => p.theme.colors.activeOrange };
  }
  
  ${ p => p.disabled && css`
    cursor: default;
    background-color: ${ p => p.theme.colors.disabledOrange };
        &:hover {
          background-color: ${ p => p.theme.colors.disabledOrange };
        }
  ` };
`;

export const Icon = ({
                         name = "",
                         className = "",
                         size = 0,
                         onClick = () => {},
                         disabled = false,
                     }: IIconComponentProps) => {

    const handleClick = ( e: React.MouseEvent<HTMLElement> ) => {
        if ( disabled ) {
            e.preventDefault();
        } else {
            console.log( "Click" );
            return onClick( e );
        }
    };

    return (
        <CommonContainer>
            <IconSmall
                name = { name }
                className = { `${ className }${ name }` }
                onClick = { handleClick }
                size = { size }
                borderRadius = { 50 }
                disabled = { disabled }>
            </IconSmall>
        </CommonContainer>
    );
};