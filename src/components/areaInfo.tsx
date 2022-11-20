import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { StyledAreaInfo, StyledExpense, StyledIncome, StyledMonth, StyledMonthArrow, StyledMonthTitle, StyledResume, StyledResumeText, StyledText, StyledTotal } from "../styles/styledAreaInfo";


type InfoAreaProps = {
    currentMonth: string
    setCurrentMonth: Dispatch<SetStateAction<string>>
    income: number
    expense: number
}

const AreaInfo: React.FC<InfoAreaProps> = (props) => {

    const [data, setData] = useState<string>("")

    useEffect(() => {
        let [month, year] = props.currentMonth.split('/')
        let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        setData(`${months[currentDate.getMonth()]} de ${currentDate.getFullYear()}`)
    }, [props.currentMonth])

    const handlePrevMonth = () => {
        let [month, year] = props.currentMonth  .split('/')
        props.setCurrentMonth(`${parseInt(month) - 1}/${year}`)
    }

    const handleNextMonth = () => {
        let [month, year] = props.currentMonth.split('/')
        props.setCurrentMonth(`${parseInt(month) + 1}/${year}`)
    }
    

    return (
        <StyledAreaInfo>
            <StyledMonth>
                <StyledMonthArrow>
                    <StyledText onPress={handlePrevMonth}>
                        ⬅️
                    </StyledText>
                </StyledMonthArrow>
                <StyledMonthTitle>
                    <StyledText>
                        {data}
                    </StyledText>
                </StyledMonthTitle>
                <StyledMonthArrow>
                    <StyledText onPress={handleNextMonth}>
                        ➡️
                    </StyledText>
                </StyledMonthArrow>
            </StyledMonth>
            <StyledResume>
                <StyledIncome>
                    <StyledResumeText>Receita</StyledResumeText>
                    <StyledResumeText>{`R$ ${props.income}`}</StyledResumeText>
                </StyledIncome>
                <StyledExpense>
                    <StyledResumeText>Dispesa</StyledResumeText>
                    <StyledResumeText>{`R$ ${props.expense}`}</StyledResumeText>
                </StyledExpense>
                <StyledTotal>
                    <StyledResumeText>Total</StyledResumeText>
                    <StyledResumeText expense={(props.income - props.expense) < 0 ? true : false}>{`R$ ${props.income - props.expense}`}</StyledResumeText>
                </StyledTotal>
            </StyledResume>
        </StyledAreaInfo>
    )
}


export default AreaInfo