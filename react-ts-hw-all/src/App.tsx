import React from 'react';
import { COLOR } from "./styled-components/color-constants";
import { CommonWrapper } from "./styled-components/common-components/wrappers-and-containers/CommonWrapper";
import { Button } from './Button/Button';
import { ButtonGroup, ButtonInButtonGroup } from './ButtonGroup/ButtonGroup';
import { Icon } from './Icon/Icon';
import { Checkbox } from "./Checkbox/Checkbox";
import { Image } from "./Image/Image";
import { IconSVG } from "./IconSVG/IconSVG";
// import GetResponse from "./Hoc/Preloader";
// import Routing from "./Routing/Routing";
// import HOCApp from "./Routing/ToggleButtonHOC";

const App = () => {
  return (
      <CommonWrapper
          paddingTop = { 100 }
          paddingBottom={ 100 }
          backGroundColor = { COLOR.magicMint }
      >
          <Button
              onClick = { (e: React.MouseEvent<HTMLButtonElement>) => {} }
              type = "button"
              >
              Click me !
          </Button>

          <ButtonGroup
            justifyContent = "space-between"
          >
              <ButtonInButtonGroup borderRadius = { 50 } >btn 1</ButtonInButtonGroup>
              <ButtonInButtonGroup borderRadius = { 50 } >btn 2</ButtonInButtonGroup>
              <ButtonInButtonGroup borderRadius = { 50 } >btn 2</ButtonInButtonGroup>
          </ButtonGroup>

          <Icon
              name = "kiwi-bird"
              className = "fa fa-"
              size = { 50 }
              onClick = { (e: React.MouseEvent<HTMLElement>) => {} }
          />

          <IconSVG
              width = { 40 }
              height = { 40 }
              onClick = { (e: React.MouseEvent<HTMLElement>) => {} }
          />

          <Checkbox />

          <Image
              src = { require( "./../src/Image/svg/Stitch-sit.png" ) }
              alt = "Stitch"
              width = { 150 }
              height = { 150 }
          />

          {/*<GetResponse />*/}

          {/*<Routing />*/}
          {/*<HOCApp />*/}
      </CommonWrapper>
  );
};

export default App;