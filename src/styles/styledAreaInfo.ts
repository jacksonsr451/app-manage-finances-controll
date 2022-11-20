import styled from 'styled-components/native'


export const StyledAreaInfo = styled.View`
    flex: 1;
    flex-direction: row;
    width: 90%;
    background-color: ${({theme}) => theme.colors.background};

    border-radius: 8px;
    padding: 20px;

    margin-top: -30px;
`

export const StyledMonth = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const StyledMonthArrow = styled.View`
    width: 40px;
    text-align: center;
    font-size: 25px;
`

export const StyledMonthTitle = styled.View`
    flex: 1;
`

export const StyledText = styled.Text`
    font-size: 20px;
    text-align: center;
`

export const StyledResume = styled.View`
    flex: 2;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
`

type StyledResumeText = {
    expense?: boolean
}

export const StyledResumeText = styled.Text<StyledResumeText>`
    font-size: 18px;
    text-align: left;
    margin-bottom: 5px;
    color: ${props => props.expense ? props.theme.colors.secondary : props.theme.colors.primary};
`

export const StyledIncome = styled.View`
    flex: 1;
`

export const StyledExpense = styled.View`
    flex: 1;
`


export const StyledTotal = styled.View`
    flex: 1;
`