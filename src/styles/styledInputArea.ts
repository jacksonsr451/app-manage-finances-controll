import styled from "styled-components/native";


type StyledInputAreaProps = {
    actived: boolean
}

export const StyledInputArea = styled.View<StyledInputAreaProps>`
    display: ${props => props.actived ? 'flex' : 'none'};

    position: absolute;

    width: 90%;
    height: 310px;

    top: 50px;

    background-color: ${({theme}) => theme.colors.background};
`

export const StyledInputTop = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;

    background-color: blue;
    align-items: center;
    justify-content: space-between;
`

export const StyledTextHeader = styled.Text`
    width: auto;
    color: ${({theme}) => theme.colors.secondaryText};
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
`

export const StyledInputTopText = styled.Text`
    width: 30px;
    height: 30px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    
    margin-right: 10px;

    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.secondaryText};

    border-radius: 8px;
    margin: 5px;
`

export const StyledFieldsArea = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    padding: 5px;
`

export const StyledLabel = styled.Text`
    width: 100px;
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;

    text-align: right;
`

export const StyledInput = styled.TextInput`
    width: 80%;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.secondaryText};
    font-size: 20px;
    font-weight: bold;
`

export const StyledButtonArea = styled.View`
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const StyledButton = styled.TouchableOpacity`
    width: 210px;
    height: 40px;

    justify-content: center;
    border-radius: 12px;
    background-color: ${({theme}) => theme.colors.primary};
`   

export const StyledTextButton = styled.Text`
    color: ${({theme}) => theme.colors.secondaryText};
    text-align: center;
    font-size: 25px;
    font-weight: bold;
`