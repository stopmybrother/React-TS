import React, { useState } from "react";
import styled from "styled-components";
import { CommonContainer } from "../styled-components/common-components/wrappers-and-containers/CommonContainer";

interface IForm {
    for?: number;
}

interface IInput {
    id?: number,
    label?: string,
    validation?: object[],
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void,
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    value?: string,
    placeholder?: string;
}

const FormTag = styled.form<IForm>`
  margin: 0 auto;
  padding: 30px;
  max-width: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  border: 1px solid ${ p => p.theme.colors.black };
  border-radius: 4px;
  background-color: ${ p => p.theme.colors.lightMint };
  box-shadow: 2px 4px 10px 3px ${ p => p.theme.colors.translucentBlack };
`

const LabelTag = styled.label`
  display: block;
`

const InputTag = styled.input.attrs( { type: "text" } )<IInput>`
  padding: 2px 4px;
  border: 1px solid ${ p => p.theme.colors.black };
  border-radius: 4px;
`;

const ButtonSubmit = styled.button.attrs( { type: "submit" } )`
  padding: 2px 4px;
  border: 1px solid ${ p => p.theme.colors.black };
  border-radius: 4px;
  background-color: ${ p => p.theme.colors.paleMint };
  font-weight: 600;
  color: ${ p => p.theme.colors.translucentBlackThirty };
  transition: all 0.3s linear;
  &:hover {
    background-color: ${ p => p.theme.colors.mint };
    color: ${ p => p.theme.colors.translucentBlack };
  }
  &:active {
    background-color: ${ p => p.theme.colors.brightMint };
    color: ${ p => p.theme.colors.black };
  }
`;

const Input = ({
                          id,
                          label,
                          validation,
                          onChange,
                          onKeyPress,
                          value,
                          placeholder
                      }: IInput) => {

    const [ inputValue, setInputValue ] = useState( "" );

    const showInputValue = ( e: React.FormEvent<HTMLInputElement> ) => {
        const { target } = e;
        const { value } = target as HTMLInputElement;
        console.log( inputValue );
        setInputValue( value );
    };

    const handleChange = ( e: React.FormEvent<HTMLButtonElement> ) => {
        e.preventDefault();
    };

    return (
        <>
            <CommonContainer>
                <FormTag>
                    <LabelTag
                        // for = { id }
                    >
                        What's your name ?
                    </LabelTag>
                    <InputTag
                        // id = { id }
                        onChange = { showInputValue }
                        onKeyPress = { onKeyPress }
                        value = { value }
                        placeholder = "Enter your name"
                    />
                    <ButtonSubmit
                        onClick = { handleChange }
                    >
                        submit
                    </ButtonSubmit>
                </FormTag>
            </CommonContainer>
        </>
    );
};

export default Input;

// Создать кастомный компонент для поля ввода (Input) , который может принимать в себя следующие пропсы:
    //      id - id для input и соответствующего ему label (string, default: ‘’),
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