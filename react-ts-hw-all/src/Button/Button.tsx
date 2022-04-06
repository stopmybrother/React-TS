import React from "react";
import styled, { css } from "styled-components";
import { TButtonComponentStyle, TLink } from './button-types'

interface IBtnProps {
    active?: boolean;
    children: string;
    className: string;
    disabled?: boolean;
    href?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type: TButtonComponentStyle;
};

const StyledButton = styled.button`
    display: block;
    margin: 0 auto 100px;
    padding: 10px 50px;
    border: 1px solid #000;
    border-radius: 10px;
    background-color: rgb(84, 176, 219);
    color: rgba($color: #000000, $alpha: .5);
    font-size: 32px;
    line-height: 28px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s linear;
    
    &:hover:enabled {
        background-color: rgb(137, 193, 219);
    }
    &:active:enabled {
        transition: 0s linear;
        background-color: rgb(77, 174, 219);
    }

    &.active {
        background-color: rgb(66, 201, 95);
    }
    &.active:hover:enabled {
        background-color: rgb(110, 199, 130);
    }
    &.active:active:enabled {
        transition: 0s linear;
        background-color: rgb(19, 194, 57);
    }

    ${props => props.disabled && css`
        cursor: default;
        background-color: rgb(181, 201, 211);
    `}
`
const StyledLink = styled.a`
    display: block;
    margin: 0 auto 50px;
    cursor: pointer;
    font-size: 32px;
    line-height: 28px;
    text-decoration: none;
    color: rgb(48, 135, 185);
    transition: 0.3s linear;
    
    &:hover {
        color: rgb(77, 146, 185);
    }
    &:active {
        transition: 0s linear;
        color: rgb(9, 118, 182);
    }

    &.active {
        color: rgb(50, 206, 84);
    }
    &.active:hover {
        color: rgb(96, 204, 120);
    }
    &.active:active {
        transition: 0s linear;
        color: rgb(4, 196, 45);
    }
`
export const Button = ( {
                            className = "",
                            children = "Default button",
                            active = false,
                            disabled = false,
                            onClick = function (e: React.MouseEvent<HTMLButtonElement>) {},
                            href = "#",
                            type = "button",
                        }: IBtnProps ) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) {
            e.preventDefault();
        } else {
            console.log("Click");
            return onClick(e);
        }
    };

    const isLink = type === "link" && href;

    return (
        <>
            {isLink ? (
                <StyledLink href={href} className={`${className} ${active ? "active" : ""}`}>
                    {children}
                </StyledLink>
            ) : (
                <StyledButton
                    disabled={disabled}
                    onClick={handleClick}
                    className={`${className} ${active ? "active" : ""}`}
                    type={type as Exclude<TButtonComponentStyle, TLink>}
                >
                    {children}
                </StyledButton>
            )}
        </>
    );
}

// Создать кастомный компонент кнопки (Button), который может принимать в себя следующие пропсы
// disabled - становится бледной (boolean, default: false)
// onClick - обработчик события при нажатии - выполняется при нажатии кнопки (event, default: () => {})
// children - содержимое кнопки (текст и/или иконки внутри) (node, default: 'Default button')
// active - активное состояние (boolean, default: false)
// className (string, default: '')
// type (“button” | “link” | “submit”) (string, default: “button”)
// href - опциональный, применяется только при type = “link”
// При hover кнопка должна плавно менять цвет, при нажатии - резко (цвета на ваше усмотрение)