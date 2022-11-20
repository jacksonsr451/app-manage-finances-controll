import React, { Dispatch, SetStateAction, useEffect } from "react";
import { StyledTableArea, StyledTableContent, StyledTableHeader, StyledTextHeader } from "../styles/styledTableArea";
import TableItem from "./tableItem";



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

type TableAreaProps = {
    listItems: ItemsProps[]
    categories: CategoriesProps
    currentMonth: string
    setIncome: Dispatch<SetStateAction<number>>
    setExpense: Dispatch<SetStateAction<number>>
}

const TableArea: React.FC<TableAreaProps> = (props) => {

    let income = 0
    let expense = 0

    useEffect(() => {
        props.setExpense(expense)
        props.setIncome(income)
    }, [props.currentMonth, income, expense])

    return (
        <>
            <StyledTableHeader>
                <StyledTextHeader width="100">Data</StyledTextHeader>
                <StyledTextHeader width="100">Tipo</StyledTextHeader>
                <StyledTextHeader width="250">Descrição</StyledTextHeader>
                <StyledTextHeader width="150">Valor</StyledTextHeader>
                <StyledTextHeader width="100" style={{textAlign: 'center'}}>Ação</StyledTextHeader>
            </StyledTableHeader>
            <StyledTableContent>
                <StyledTableArea>
                    {
                        props.listItems.filter((item) => {
                            let [month, year] = props.currentMonth.split('/')
                            return item ? item.date.getMonth() === parseInt(month) &&
                                item.date.getFullYear() === parseInt(year) : null
                        }).map((item, index) => {

                            props.categories[item.category].expense ? 
                                expense += item.value : income += item.value
                            
                            return (
                                <TableItem 
                                    key={index}
                                    index={index} 
                                    item={item} 
                                    category={props.categories[item.category]}
                                />
                            )
                        })
                    }
                </StyledTableArea>
            </StyledTableContent>
        </>
    )
}

export default TableArea