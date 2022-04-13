import React from "react";

import styled from "styled-components";

import { useState } from "react";

interface ICheckboxComponent {
    type: string;
};

interface IInputCheckboxTagProps {
    type: string;
    onChange: (e: React.ChangeEventHandler<HTMLInputElement>) => void;
};

interface ISvgPseudoCheckboxProps {
    className: string;
    ariaHidden: boolean;
    viewBox: string;
};

interface ISvgPathProps {
    d: string
    stroke: string;
};

const Container = styled.div`
  margin: 0 auto 50px;
  padding: 0 16px;
`;

const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 200px;
  width: 100%;
`;

const HiddenCheckbox = styled.input<IInputCheckboxTagProps>`
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect( 0 0 0 0 );
  clip-path: inset( 50% );
  overflow: hidden;
  white-space: nowrap;
`;

const WatchedCheckbox = styled.svg<ISvgPseudoCheckboxProps>`
  display: inline-block;
  
  margin-right: 7px;
  width: 20px;
  height: 20px;
  background-color: ${ p => p.theme.colors.lightYellow };
  border: 2px solid ${ p => p.theme.colors.lightGray };
  border-radius: 4px;
  fill: none;
  
  &:not(:disabled):not(:checked):hover {
    border-color: ${ p => p.theme.colors.secondaryGray };
    background-color: ${ p => p.theme.colors.secondaryYellow };
  }
  
  &.active {
    box-shadow: 0 0 6px 3px ${ p => p.theme.colors.translucentBlackThirty };
    border-color: ${ p => p.theme.colors.primaryGray };
    background-color: ${ p => p.theme.colors.primaryYellow };
  }
`;

const Path = styled.path<ISvgPathProps>`
  stroke-width: 2;
`;


export const Checkbox = ({
                            type = "",
                         }: ICheckboxComponent) => {

    const [isChecked, setIsChecked] = useState( false );

    return (
        <Container>
            <Label>
                <HiddenCheckbox
                    type = { type }
                    onChange = {
                        () => {
                            setIsChecked( !isChecked );
                        }
                    }
                />
                    <WatchedCheckbox
                        className = { `checkbox ${ isChecked ? "active" : "" }` }
                        ariaHidden = { true }
                        viewBox = "0 0 15 11"
                    >
                        <Path
                            d = "M1 4.5L5 9L14 1"
                            stroke = { isChecked ? "#383835" : "none" }
                        />
                    </WatchedCheckbox>
                Lucky checkbox
            </Label>
        </Container>
    )
};