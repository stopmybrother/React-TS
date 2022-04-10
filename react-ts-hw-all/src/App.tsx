import React from 'react';

import styled from 'styled-components';
import { COLOR } from "./styled-components/color-constants";

import { Button } from './Button/Button';
import { ButtonGroup } from './ButtonGroup/ButtonGroup';
import { Icon } from './Icon/Icon';
// import { Checkbox } from "./Checkbox/Checkbox";

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
              active = { false }
              children = "Click me !"
              className = "btn"
              disabled = { false }
              href = "#"
              onClick = { (e: React.MouseEvent<HTMLButtonElement>) => {} }
              type = "button" />

          <ButtonGroup
              vertical = { false }
              children = "btn"
              className = "btnGroup"
              numberOfButtons ={ [1, 2, 3] }
          />

          <Icon
              name = "kiwi-bird"
              className = "fa fa-"
              size = { 50 }
              onClick = { (e: React.MouseEvent<HTMLElement>) => {} }
              disabled = { false }
          />

        {/*   <Checkbox*/}
        {/*      type = "checkbox"*/}
        {/*      checked = { false }*/}
        {/*      disabled = { false }*/}
        {/*      id = "checkbox"*/}
        {/*      // onChange = { (e: React.MouseEvent<HTMLInputElement>) => {} }*/}
        {/*/>*/}

      </Wrapper>
  );
}

export default App;