import React from "react";
// import { useState } from "react";
// import styled, { keyframes } from "styled-components";
//
// const StyledInput = styled.input`
//     height: 0;
//     width: 0;
//     opacity: 0;
//     z-index: -1;
// `;
//
// const StyledLabel = styled.label`
//     position: relative;
//     display: inline-block;
//     cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
//     margin: 0 auto;
// `;
//
// const CheckboxRotate = keyframes`
//     from {
//         opacity: 0;
//         transform: rotate(0deg);
//     }
//     to {
//         opacity: 1;
//         transform: rotate(45deg);
//     }
// `;
//
// const StyledIndicator = styled.div`
//     width: 20px;
//     height: 20px;
//     background-color: #e6e6e6;
//     position: absolute;
//     top: 0;
//     left: -30px;
//     border: 1px solid #757575;
//     border-radius: 3px;
//
//     ${StyledInput}:not(:disabled):checked & {
//         background-color: #d1d1d1;
//     }
//
//     ${StyledLabel}:hover & {
//         background-color: #ccc;
//     }
//
//     &::after {
//         content: "";
//         position: absolute;
//         display: none;
//     }
//
//     ${StyledInput}:checked + &::after {
//         display: block;
//         top: 0;
//         left: 5px;
//         width: 35%;
//         height: 70%;
//         border: solid #263238;
//         border-width: 0 3px 3px 0;
//         animation-name: ${CheckboxRotate};
//         animation-duration: 0.3s;
//         animation-fill-mode: forwards;
//     }
//
//     &::disabled {
//         cursor: not-allowed;
//     }
// `;
//
// export const Checkbox = ({
//                              value,
//                              checked,
//                              onChange,
//                              name,
//                              id,
//                              label,
//                              disabled
//                          }) => {
//     return (
//         <StyledLabel
//             htmlFor = {id}
//             disabled = {disabled}
//         >
//             { label }
//             <StyledInput
//                 id = {id}
//                 type = "checkbox"
//                 name = {name}
//                 value = {value}
//                 disabled = {disabled}
//                 checked = {checked}
//                 onChange = {onChange}
//             />
//             <StyledIndicator />
//         </StyledLabel>
//     )
// }