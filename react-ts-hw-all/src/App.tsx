import React from 'react';
import styled from 'styled-components';
import { COLOR } from "./styled-components/color-constants";
import { Button } from './Button/Button';
import { ButtonGroup, ButtonInButtonGroup } from './ButtonGroup/ButtonGroup';
import { Icon } from './Icon/Icon';
import { Checkbox } from "./Checkbox/Checkbox";
import { Image } from "./Image/Image";

interface IWrapper {
    backGroundColor?: string;
};

const Wrapper = styled.div<IWrapper>`
  background-color: ${ p => p.backGroundColor };
  max-width: 100%;
  min-height: 100vh;
  padding: 100px;
`;

const App = () => {
  return (
      <Wrapper backGroundColor = { COLOR.magicMint }>
          <Button
              className = "btn"
              onClick = { (e: React.MouseEvent<HTMLButtonElement>) => {} }
              type = "button"
              >
              Click me !
          </Button>

          <ButtonGroup>
              <ButtonInButtonGroup />
              <ButtonInButtonGroup />
              <ButtonInButtonGroup />
          </ButtonGroup>

          <Icon
              name = "kiwi-bird"
              className = "fa fa-"
              size = { 50 }
              onClick = { (e: React.MouseEvent<HTMLElement>) => {} }
          />

          <Checkbox
              type = "checkbox"
          />

          <Image
              className = "image"
              src = { require( "./../src/Image/svg/Stitch-sit.png" ) }
              alt = "Stitch"
              width = { 150 }
              height = { 150 }
          />
      </Wrapper>
  );
};

export default App;