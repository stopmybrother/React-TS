import React from "react";
import styled from "styled-components";
import { CommonContainer } from "../styled-components/common-components/wrappers-and-containers/CommonContainer";
import { useState } from "react";

interface ISvgPseudoCheckboxProps {
    className: string;
    viewBox: string;
};

interface ISvgPathProps {
    d: string
    stroke: string;
};

const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 200px;
  width: 100%;
`;

const HiddenCheckbox = styled.input.attrs( { type: "checkbox" } )`
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

export const Checkbox = () => {

    const [isChecked, setIsChecked] = useState( false );

    return (
        <CommonContainer>
            <Label>
                <HiddenCheckbox
                    onChange = {
                        () => {
                            setIsChecked( !isChecked );
                        }
                    }
                />
                    <WatchedCheckbox
                        className = { `checkbox ${ isChecked ? "active" : "" }` }
                        viewBox = "0 0 15 11"
                    >
                        <Path
                            d = "M1 4.5L5 9L14 1"
                            stroke = { isChecked ? "#383835" : "none" }
                        />
                    </WatchedCheckbox>
                Lucky checkbox
            </Label>
        </CommonContainer>
    );
};