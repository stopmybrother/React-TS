import React from 'react';
import styled from 'styled-components';
import { COLOR } from "./styled-components/color-constants";
import { Button } from './Button/Button';
import { ButtonGroup, ButtonInButtonGroup } from './ButtonGroup/ButtonGroup';
import { Icon } from './Icon/Icon';
import { Checkbox } from "./Checkbox/Checkbox";
import { Image } from "./Image/Image";
import GetResponse from "./Hoc/Preloader";
// import Routing from "./Routing/Routing";
// import HOCApp from "./Routing/ToggleButtonHOC";

interface IWrapper {
    backGroundColor?: string;
};

const Wrapper = styled.div<IWrapper>`
  padding: 100px;
  max-width: 100%;
  min-height: 100vh;
  background-color: ${ p => p.backGroundColor };
`;

const App = () => {
  return (
      <Wrapper backGroundColor = { COLOR.magicMint }>
          <Button
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

          <Checkbox />

          <Image
              src = { require( "./../src/Image/svg/Stitch-sit.png" ) }
              alt = "Stitch"
              width = { 150 }
              height = { 150 }
          />

          <GetResponse />

          {/*<Routing />*/}
          {/*<HOCApp />*/}
      </Wrapper>
  );
};

export default App;