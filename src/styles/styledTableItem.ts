import styled from 'styled-components/native'


export const StyledTableItem = styled.View`
    flex: 1;
    flex-direction: row;
`

type StyledTableTextProps = {
    width: number
    expense: boolean
}

export const StyledTableText = styled.Text<StyledTableTextProps>`
    width: ${props => `${props.width}px`};
    font-size: 16px;
    font-weight: bold;
    background-color: ${props => props.expense ? props.theme.colors.secondary : props.theme.colors.primary};
    color: ${props => props.expense ? props.theme.colors.secondaryText : props.theme.colors.secondaryText};
    margin-top: 5px;
`


type StyledTableButton = {
    expense: boolean
}

export const StyledTableButton = styled.Text`
    width: 100px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 5px;
    text-align: center;
`
