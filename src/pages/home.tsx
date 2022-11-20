import React, { useState } from "react";
import AreaInfo from "../components/areaInfo";
import ButtonNewRegister from "../components/buttonNewRegister";
import TableArea from "../components/tableArea";
import { StyledHome, StyledHeader, StylesContent, StyledTitle } from "../styles/styledHome";

type ItemsProps = {
    date: Date
    category: string
    title: string
    value: number
}

type CategoriesProps = {
    [category: string]: {
        title: string
        expense: boolean
    }
}


const Home: React.FC = () => {

    const handleCurrentMonth = () => {
        let now = new Date()
        return `${now.getMonth()+1}/${now.getFullYear()}`
    }
    const [currentMonth, setCurrentMonth] = useState(handleCurrentMonth())
    
    const [listItems, setListItems] = useState<ItemsProps[]>([
        {date: new Date(2022, 11, 5), category: 'food', title: 'McDonalds', value: 2.50},
        {date: new Date(2022, 11, 5), category: 'food', title: 'Burger King', value: 2.50},
        {date: new Date(2022, 11, 5), category: 'rent', title: 'Alugiel Apr', value: 2.50},
        {date: new Date(2022, 11, 5), category: 'food', title: 'McDonalds', value: 2.50},
        {date: new Date(2022, 11, 5), category: 'food', title: 'Burger King', value: 2.50},
        {date: new Date(2022, 11, 5), category: 'rent', title: 'Alugiel Apr', value: 2.50},
        {date: new Date(2022, 11, 5), category: 'food', title: 'McDonalds', value: 2.50},
        {date: new Date(2022, 11, 5), category: 'food', title: 'Burger King', value: 2.50},
        {date: new Date(2022, 11, 5), category: 'rent', title: 'Alugiel Apr', value: 2.50},
        {date: new Date(2022, 11, 5), category: 'food', title: 'McDonalds', value: 2.50},
        {date: new Date(2022, 11, 5), category: 'food', title: 'Burger King', value: 2.50},
        {date: new Date(2022, 11, 5), category: 'rent', title: 'Alugiel Apr', value: 2.50},
        {date: new Date(2022, 11, 5), category: 'food', title: 'McDonalds', value: 2.50},
        {date: new Date(2022, 11, 5), category: 'food', title: 'Burger King', value: 2.50},
        {date: new Date(2022, 11, 5), category: 'salary', title: 'Salário', value: 10000.00},
    ])

    const [categories, setCategories] = useState<CategoriesProps>({
        food: {title: 'Alimentação', expense: true},
        rent: {title: 'Aluguel', expense: true},
        salary: {title: 'Salário', expense: false},
    })

    const [income, setIncome] = useState<number>(0)
    const [expense, setExpense] = useState<number>(0)

    return (
        <StyledHome> 
            <StyledHeader>
                <StyledTitle>
                    Controle Financeiro
                </StyledTitle>
            </StyledHeader>
            <StylesContent>
                <AreaInfo 
                    currentMonth={currentMonth} 
                    setCurrentMonth={setCurrentMonth}
                    income={income}
                    expense={expense}
                />
                <TableArea 
                    currentMonth={currentMonth} 
                    listItems={listItems} 
                    categories={categories}
                    setIncome={setIncome}
                    setExpense={setExpense}
                />
            </StylesContent>
            <ButtonNewRegister />
        </StyledHome>
    )
}

export default Home