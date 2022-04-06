import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import { Button } from './Button/Button';
import { ButtonGroup } from './ButtonGroup/ButtonGroup';
import { Icon } from './Icon/Icon';
// import { Checkbox } from './Checkbox/Checkbox';


const Wrapper = styled.div`
  max-width: 100%;
  min-height: 100vh;
  padding: 100px;
  background-color: rgb(170, 241, 218);
`
const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  max-width: 500px;
  width: 100%;
`

function App() {
  // const [value, setCheckbox] = useState(true);
  return (
      <Wrapper>
        <Container>
          <Button
              active={false}
              children={"Click me !"}
              className={"btn"}
              disabled={false}
              href={"#"}
              onClick={function (e: React.MouseEvent<HTMLButtonElement>) {}}
              type={"button"} />

          <ButtonGroup
              vertical = { true }
              children = { "btn" }
              className = { "btnGroup" }
          />

          <Icon
              name = { "kiwi-bird" }
              className = { "fa fa-" }
              size = { 50 }
              onClick = {function (e: React.MouseEvent<HTMLElement>) {}}
              disabled = { false }
          />

          {/* <Checkbox
          label = "value"
          value = {value}
          checked = {value}
          onChange = {({target}) => setCheckbox(!value)}
        /> */}

        </Container>
      </Wrapper>
  );
}

export default App;