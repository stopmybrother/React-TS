import React from "react";
import styled from "styled-components";
import Container from "./containerDefault";

export const ContainerFlexBox = styled.div<typeof Container>`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:  center;
`;

export default ContainerFlexBox; // don't understand how to export default flexBoxContainer in ButtonGroup (errors)