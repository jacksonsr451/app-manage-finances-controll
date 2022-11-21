import React, { Dispatch, SetStateAction, useState } from "react";
import { StyledButton, StyledButtonArea, StyledFieldsArea, StyledInput, StyledInputArea, StyledInputTop, StyledInputTopText, StyledLabel, StyledTextButton, StyledTextHeader } from "../styles/styledInputArea";

import DateField from 'react-native-datefield';
import DropDownPicker from 'react-native-dropdown-picker';
import { Checkbox } from 'react-native-paper';

type InputAreaProps = {
    activad: boolean
    setActivad: Dispatch<SetStateAction<boolean>>
}

const InputArea: React.FC<InputAreaProps> = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]);

    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        props.setActivad(!props.activad)
    }

    return (
        <StyledInputArea actived={props.activad}>
            <StyledInputTop>
                <StyledTextHeader>Cadastrar novo valor</StyledTextHeader>
                <StyledInputTopText onPress={handleClick}>x</StyledInputTopText>
            </StyledInputTop>
            <StyledFieldsArea>
                <StyledLabel>Data: </StyledLabel>
                <DateField               
                    labelDate='Dia'
                    labelMonth='Mês'
                    labelYear='Ano'
                    styleInput={{
                        paddingLeft: 20,
                        paddingRight: 20,
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}
                />
            </StyledFieldsArea>
            <StyledFieldsArea>
                <StyledLabel>Categoria: </StyledLabel>
                <DropDownPicker
                    open={open}
                    value={value}
                    
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    textStyle={{
                        paddingLeft: 20,
                        paddingRight: 20,
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}
                    style={{
                        width: 300
                    }}
                />
            </StyledFieldsArea>
            <StyledFieldsArea>
                <StyledLabel>Titulo: </StyledLabel>
                <StyledInput />
            </StyledFieldsArea>
            <StyledFieldsArea>
                <StyledLabel>Valor: </StyledLabel>
                <StyledInput />
            </StyledFieldsArea>
            <StyledFieldsArea>
                <StyledLabel>Despesa? </StyledLabel>
                <Checkbox 
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={
                        () => setChecked(!checked)
                    }
                />
            </StyledFieldsArea>
            <StyledButtonArea>
                <StyledButton>
                    <StyledTextButton>SALVAR</StyledTextButton>
                </StyledButton>
            </StyledButtonArea>
        </StyledInputArea>
    )
}

export default InputArea