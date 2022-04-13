import React from "react";

import styled, { css } from "styled-components";


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


const Container = styled.div`
  margin: 0 auto 50px;
  padding: 0 16px;
`;

const IconSmall = styled.i<IIconTagProps>`
  padding: 45px;
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
`

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
        <Container>
            <IconSmall
                name = { name }
                className = { `${ className }${ name }` }
                onClick = { handleClick }
                size = { size }
                borderRadius = { 50 }
                disabled = { disabled }>
            </IconSmall>
        </Container>
    )
};