import styled from "styled-components/native";


type StyledNewButtonRegisterProps = {
    actived: boolean
} 


export const StyledNewButtonRegister = styled.TouchableOpacity<StyledNewButtonRegisterProps>`
    display: ${props => props.actived ? 'none' : 'flex'};
    width: 60px;  
    height: 60px;   
    border-radius: 30px;            
    background-color: ${({theme}) => theme.colors.secondary};
    position: absolute;                                          
    top: 30px;
    right: 20px; 

    justify-content: center;
    align-items: center;
`

export const StyledNewButtonText = styled.Text`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 5px;
`