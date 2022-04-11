import React from "react";

import styled, { css } from "styled-components";
import { COLOR } from "../styled-components/color-constants";

interface IImageProps {
    className: string;
    src?: string;
    alt: string;
    width: number;
    height: number;
    circle: boolean;
}

const Container = styled.div`
  margin: 0 auto 50px;
  padding: 0 16px;
`

const Img = styled.img`
  width: ${ p => p.width }px;
  height: ${ p => p.height }px;
  
  &.rounded {
    border-radius: 50%;
  }
`

export const Image = ({
                        className = "",
                        src = "",
                        alt = "image",
                        width = 100,
                        height = 100,
                        circle = false,
                      }: IImageProps) => {
    return (
        <Container>
            <Img
                className = { `${className} ${circle ? "rounded" : ""}` }
                src = { src }
                alt = { alt }
                width = { width }
                height = { height }
            >

            </Img>
        </Container>
    )
}

// 5. Создать кастомный компонент для картинки(Image), который может принимать в себя следующие пропсы:
// src - путь к картинке (string, default: ''),
// alt - alt картинки (string, default: 'image'),
// width - ширина картинки (number, default: 100),
// height - высота картинки (number, default: 100),
// circle - будет ли картинка круглой (number, default: false) - делается через доп класс как active в кнопке,
// className - доп класс для стилизации (string, default: ''),
