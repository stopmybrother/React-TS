import React from "react";

import styled from "styled-components";

interface IImageTagProps {
    alt: string;
    className: string;
    height: number;
    src: string;
    width: number;
};

interface IImageComponentProps {
    alt: string;
    circle?: boolean;
    className: string;
    height: number;
    src: string;
    width: number;
};

const Container = styled.div`
  margin: 0 auto 50px;
  padding: 0 16px;
`;

const Img = styled.img<IImageTagProps>`
  width: ${ p => p.width }px;
  height: ${ p => p.height }px;
  
  &.rounded {
    border-radius: 50%;
  }
`;

export const Image = ({
                        alt = "image",
                        circle = false,
                        className = "",
                        height = 100,
                        src = "",
                        width = 100,
                      }: IImageComponentProps) => {
    return (
        <Container>
            <Img
                alt = { alt }
                className = { `${ className } ${ circle ? "rounded" : "" }` }
                height = { height }
                src = { src }
                width = { width }
            >

            </Img>
        </Container>
    )
};
