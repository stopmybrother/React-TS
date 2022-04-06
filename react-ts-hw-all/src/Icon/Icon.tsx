import React from "react";
// import styled, {css} from "styled-components";
//
// interface IIconProps {
//     name: string;
//     className: string;
//     size: number;
//     onClick: (e: React.MouseEvent<HTMLElement>) => void;
//     disabled: boolean;
// };
//
// export const Icon = ({
//                          name = "",
//                          className = "",
//                          size = 0,
//                          onClick = function (e: React.MouseEvent<HTMLElement>) {},
//                          disabled = false,
//                      }: IIconProps) => {
//     const handleClick = (e: React.MouseEvent<HTMLElement>) => {
//         e.preventDefault();
//         console.log("Click");
//         return onClick(e);
//     };
//     return (
//         <i name = {name} className = {className} size = {size} onClick = {handleClick} disabled = {disabled}></i>
//     )
// };



// 4. Создать кастомный компонент для иконки (Icon), который может принимать в себя следующие пропсы:
// name - берется из fontawesome.com (string, default: ''), при этом имя класса формируется по принципу `fa fa-${name}` - тк так fontawesome понимает, какую иконку надо использовать
// className - доп класс для стилизации (string, default: ''),
// size - размер иконки: (number, 0),
// onClick - обработчик события при нажатии - выполняется при нажатии кнопки (event, default: () => {}),
// disabled - бледная иконка, на которую нельзя нажать: (boolean, false)
// NB!: иконка обозначается через <i>
// иконки берутся из следующего источника (прописываем в index.html в public)
// <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
// пример:
// https://www.w3schools.com/icons/#:~:text=Try%20It%20Yourself%20%C2%BB-,Font%20Awesome%204%20Icons,-To%20use%20the (второй пример)