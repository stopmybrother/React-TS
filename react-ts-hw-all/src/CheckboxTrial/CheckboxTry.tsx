import React from "react";
//
// import styled from "styled-components";
//
// const CheckboxContainer = styled.div`
//   margin: 0 auto 50px;
//   display: inline-block;
//   vertical-align: middle;
// `;
//
// const Icon = styled.svg`
//   fill: none;
//   stroke: ${ p => p.theme.colors.white };
//   stroke-width: 2px;
// `;
//
// const HiddenCheckbox = styled.input.attrs( { type: "checkbox" } )`
//   border: 0;
//   clip: rect( 0 0 0 0 );
//   clip-path: inset( 50% );
//   height: 1px;
//   margin: -1px;
//   overflow: hidden;
//   padding: 0;
//   position: absolute;
//   white-space: nowrap;
//   width: 1px;
// `;
//
// const Checkbox = styled.div< { checked: boolean } >`
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
// interface ICheckboxProps {
//     className?: string;
//     checked: boolean;
//     onChange: ( e: React.ChangeEvent<HTMLInputElement> ) => void;
//     labelWrap?: boolean;
// };
//
// export const CheckboxComp: React.FC<ICheckboxProps> = ( {
//                             className,
//                             checked,
//                             labelWrap = true,
//                             ...props
//                         } ) => {
//     const content = (
//         <CheckboxContainer>
//             <HiddenCheckbox checked = { checked } { ...props } />
//             <Checkbox checked = { checked } >
//                 <Icon viewBox = "0 0 24 24">
//                     <polyline points = "20 6 9 17 4 12" />
//                 </Icon>
//             </Checkbox>
//             <span>bla bla</span>
//         </CheckboxContainer>
//     );
//
//     return labelWrap ? <label>{ content }</label> : <>{ content }</>
// };