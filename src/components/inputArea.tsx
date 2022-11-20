import React, { Dispatch, SetStateAction } from "react";
import { StyledInputArea, StyledInputTop, StyledInputTopText, StyledTextHeader } from "../styles/styledInputArea";


type InputAreaProps = {
    activad: boolean
    setActivad: Dispatch<SetStateAction<boolean>>
}

const InputArea: React.FC<InputAreaProps> = (props) => {

    const handleClick = () => {
        props.setActivad(!props.activad)
    }

    return (
        <StyledInputArea actived={props.activad}>
            <StyledInputTop>
                <StyledTextHeader>Cadastrar novo valor</StyledTextHeader>
                <StyledInputTopText onPress={handleClick}>x</StyledInputTopText>
            </StyledInputTop>
        </StyledInputArea>
    )
}

export default InputArea