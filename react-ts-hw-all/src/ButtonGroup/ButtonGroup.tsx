import React, { Children } from "react";
import styled, { css } from "styled-components";

interface IBtnGroupProps {
    vertical?: boolean;
    children: string | null;
    className: string;
};

const FlexBox = styled.div`
    margin: 0 auto 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    row-gap: 15px;
`
const StyledBtn = styled.button`
    display: block;
    max-width: 118px;
    width: 100%;
    padding: 47px 35px;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: rgb(214, 102, 216);
    color: rgba($color: #000000, $alpha: .5);
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s linear;

    &:hover:enabled {
        background-color: rgb(222, 138, 224);
    }
    &:active:enabled {
        background-color: rgb(218, 62, 221);
    }
`

export const ButtonGroup = ({
                                vertical = false,
                                children = null,
                                className = "",
                            }: IBtnGroupProps) => {
    return (
        <>
            <FlexBox
                style = {vertical ? {flexDirection: 'column'} : {flexDirection: 'row'}}
                className={className}
            >
                <StyledBtn className={`${className} ${"item"}`}>{`${children} 1`}</StyledBtn>
                <StyledBtn className={`${className} ${"item"}`}>{`${children} 2`}</StyledBtn>
                <StyledBtn className={`${className} ${"item"}`}>{`${children} 3`}</StyledBtn>
            </FlexBox>
        </>
    )
};

// Создать кастомный компонент группы кнопок (ButtonGroup), который может принимать в себя следующие пропсы
// vertical (boolean, default: false)
// children - в данном случае группа кнопок, помещенная во wrapper ButtonGroup для них (node, default: null)
// className (string, default: '')