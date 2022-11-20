import React, { Dispatch, SetStateAction } from "react";
import { StyledNewButtonRegister, StyledNewButtonText } from "../styles/styledButtonNewRegister";


type ButtonNewRegisterProps = {
    activad: boolean
    setActivad: Dispatch<SetStateAction<boolean>>
}

const ButtonNewRegister: React.FC<ButtonNewRegisterProps> = (props) => {

    const handleClick = () => {
        props.setActivad(!props.activad)
    }

    return (
        <StyledNewButtonRegister onPress={handleClick} actived={props.activad}>
            <StyledNewButtonText>
                +
            </StyledNewButtonText>
        </StyledNewButtonRegister>
    )
}

export default ButtonNewRegister
