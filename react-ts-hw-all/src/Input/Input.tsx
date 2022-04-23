import React from "react";
import styled from "styled-components";



export const Input = ({
                          id = "",
                          label = "",
                          validation = []
                      }) => {
    return (
        <></>
    );
};

// Создать кастомный компонент для поля ввода (Input) , который может принимать в себя следующие пропсы:
//      id - id для input и соответствующего ему label (string, default: ‘’),
//      className - класс для стилизации (string, default: ''),
//      label - label для нашего input (string, default: ''),
//      validation - массив объектов вида:
//          { validationFunc, error }
//              validationFunc - функция, по которой можно проводить валидацию
//                (например, функция для определения соответствует ли введенное значение минимальной длине
//                для заданного поля, или не пустое ли оно - проверка на обязательность ввода)
//              error - ошибка (string), появляющаяся красной надписью снизу input, если validationFunc возвращает false

// То есть мы можем сделать массив вида:
//     const validators = [
//         { validationFunc: … (проверка, чтобы введенных символов было минимум 2),
//         error: “Ошибка, должно быть введено не менее 2 символов” },
//         { validationFunc: … (проверка чтобы поле не было пустым),
//         error: “Ошибка, необходимо ввести данные” }