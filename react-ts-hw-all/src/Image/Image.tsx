import React from "react";
import styled from "styled-components";
import { CommonContainer } from "../styled-components/common-components/wrappers-and-containers/CommonContainer";

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
  display: block;
  margin: 0 auto;
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
        <CommonContainer>
            <Img
                alt = { alt }
                borderRadius = { circle ? 50 : 0 }
                height = { height }
                src = { src }
                width = { width }
            >
            </Img>
        </CommonContainer>
    );
};
