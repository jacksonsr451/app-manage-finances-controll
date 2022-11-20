import styled from 'styled-components/native'


export const StyledHome = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.colors.shadow};
    color: ${({theme}) => theme.colors.text};

`

export const StyledHeader = styled.View`
        flex: 1;
        width: 100%;
        background-color: ${({theme}) => theme.colors.primary};
        align-items: center;
        justify-content: center;
`

export const StyledTitle = styled.Text`
    color: ${({theme}) => theme.colors.secondaryText};
    font-size: 32px;
    margin-top: -20px;
`

export const StylesContent = styled.View`
    flex: 3;
    width: 100%;

    align-items: center;
    margin-bottom: 10px;
`
