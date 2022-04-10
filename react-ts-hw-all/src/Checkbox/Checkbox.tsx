import React from "react";
// import { useState } from "react";
// import styled, { keyframes } from "styled-components";
//
// interface ICheckbox {
//     type: string;
//     checked: boolean;
//     disabled: boolean;
//     id?: string;
//     // onChange: (e: React.MouseEvent<HTMLFormElement>) => void;
// }
//
// const Container = styled.div`
//   margin: 0 auto;
//   padding: 0 16px;
// `
//
// const Icon = styled.svg`
//   fill: none;
//   stroke: ${ p => p.theme.colors.white };
//   stroke-width: 2px;
// `
//
// const HiddenCheckbox = styled.input.attrs( { type: "checkbox" } )<ICheckbox>`
//   margin: -1px;
//   padding: 0;
//   width: 1px;
//   height: 1px;
//   position: absolute;
//   clip: rect(0 0 0 0);
//   clip-path: inset(50%);
//   overflow: hidden;
//   white-space: nowrap;
//   border: 0;
// `;
//
// const InputCheckbox = styled.input.attrs( { type: "checkbox" } )<ICheckbox>`
//   display: inline-block;
//   width: 16px;
//   height: 16px;
//   background-color: ${ p => p.checked ? p.theme.colors.primaryYellow : p.theme.colors.lightYellow };
//   border-radius: 3px;
//   transition: all 0.15s linear;
//
//   ${ HiddenCheckbox }:focus + & {
//     box-shadow: 0 0 0 3px ${ p => p.theme.colors.lightGray };
//   }
//
//   ${ Icon } {
//     visibility: ${ p => p.checked ? "visible" : "hidden" };
//   }
// `;
//
// const Label = styled.label
// const Span = styled.span`
//   margin-left: 8px;
// `
//
// export const Checkbox = ({
//                              type = "",
//                              checked = false,
//                              disabled = false,
//                              id = ""
//                              // onChange = () => {},
//                          }: ICheckbox) => {
//
//     // const changeStateCheckbox = (e: React.MouseEvent<HTMLFormElement>) => {
//     //     if ( disabled ) {
//     //         e.preventDefault();
//     //     } else {
//     //         console.log( "Click" );
//     //         return onChange( e );
//     //     }
//     // }
//
//     return (
//         <>
//             <Container>
//                 <Label for = { id }>
//                     <HiddenCheckbox type = { type } checked = { checked } disabled = { disabled } />
//                     <InputCheckbox
//                         type = { type }
//                         checked = { checked }
//                         disabled = { disabled }
//                         id = {id}
//                         // onChange = { changeStateCheckbox }
//                     >
//                         <Icon viewBox = "0 0 24 24">
//                             <polyline points = "20 6 9 17 4 12"/>
//                         </Icon>
//                     </InputCheckbox>
//                 </Label>
//             </Container>
//         </>
//     )
// }

