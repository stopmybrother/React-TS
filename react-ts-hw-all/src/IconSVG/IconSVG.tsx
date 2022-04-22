import React from "react";
import styled from "styled-components";
import Container from "../styled-components/containerDefault";
import { ICONS } from "./IconSVGconstant";

interface ILinkProps {
    width?: number;
    height?: number;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
}

const IconSVGComponent = styled.svg`
  display: inline-block;
`;

const PathSVGComponent = styled.path`
  stroke-width: 1;
`;

const ILinkTag = styled.a<ILinkProps>`
  margin: 0 auto;
  width: ${ p => p.width || 10 }px;
  height: ${ p => p.height || 10 }px;
`;

export const IconSVG = ({
                            width = 0,
                            height = 0,
                            onClick = () => {}
                        }: ILinkProps) => {

    const handleClick = ( e: React.MouseEvent<HTMLElement> ) => {
        e.preventDefault();
        console.log( "Click" );
        return onClick( e );
    };

    return (
        <>
            <Container>
                <ILinkTag
                    width = { width }
                    height = { height }
                    onClick = { handleClick }
                >
                    <IconSVGComponent
                        viewBox = { ICONS.business.viewBox }
                    >
                        <PathSVGComponent
                            d = { ICONS.business.path }
                        />
                    </IconSVGComponent>
                </ILinkTag>
            </Container>
        </>
    );
};