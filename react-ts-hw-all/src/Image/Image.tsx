import React from "react";
import styled from "styled-components";
import Container from "../styled-components/containerDefault";

interface IImageTagProps {
    alt: string;
    borderRadius: number;
    height: number;
    src: string;
    width: number;
};

interface IImageComponentProps {
    alt: string;
    circle?: boolean;
    height: number;
    src: string;
    width: number;
};

const Img = styled.img<IImageTagProps>`
  width: ${ p => p.width }px;
  height: ${ p => p.height }px;
  border-radius: ${ p => p.borderRadius }%;
`;

export const Image = ({
                        alt = "image",
                        circle = false,
                        height = 100,
                        src = "",
                        width = 100,
                      }: IImageComponentProps) => {
    return (
        <Container>
            <Img
                alt = { alt }
                borderRadius = { circle ? 50 : 0 }
                height = { height }
                src = { src }
                width = { width }
            >
            </Img>
        </Container>
    );
};
