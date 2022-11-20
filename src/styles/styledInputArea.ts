import styled from "styled-components/native";


type StyledInputAreaProps = {
    actived: boolean
}

export const StyledInputArea = styled.View<StyledInputAreaProps>`
    display: ${props => props.actived ? 'flex' : 'none'};

    position: absolute;

    width: 90%;
    height: 300px;

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