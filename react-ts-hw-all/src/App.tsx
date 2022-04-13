import React from 'react';

import styled from 'styled-components';
import { COLOR } from "./styled-components/color-constants";

import { Button } from './Button/Button';
import { ButtonGroup } from './ButtonGroup/ButtonGroup';
import { Icon } from './Icon/Icon';
import { Checkbox } from "./Checkbox/Checkbox";
import { Image } from "./Image/Image";

interface IWrapper {
    backGroundColor?: string;
}

const Wrapper = styled.div<IWrapper>`
  max-width: 100%;
  min-height: 100vh;
  padding: 100px;
  background-color: ${ p => p.backGroundColor };
`
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

          <ButtonGroup
              className = "btnGroup"
          >
              <button></button>
              <button></button>
              <button></button>
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
              src = "..Image/svg/Stitch-sit.png" // src doesn't work :(
              alt = "Stitch"
              width = { 150 }
              height = { 150 }
          />

      </Wrapper>
  );
}

export default App;