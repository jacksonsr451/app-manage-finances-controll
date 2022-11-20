import React, { useEffect, useState } from "react";
import { StyledTableButton, StyledTableItem, StyledTableText } from "../styles/styledTableItem";


type ItemProps = {
    date: Date
    category: string
    title: string
    value: number
}

type CategoryProps = {
    title: string
    expense: boolean
}

type TableProps = {
    index: number
    item: ItemProps
    category: CategoryProps
}

const TableItem: React.FC<TableProps> = (props) => {
    const [date, setDate] = useState<string>('')

    const handleDate = (itemDate: Date) => {
        let day = validateDate(itemDate.getDay())
        let month = validateDate(itemDate.getMonth())
        let year = itemDate.getFullYear()

        function validateDate(item: number): string {
            return item < 10 ? `0${item}` : `${item}` 
        }

        setDate(`${day}/${month}/${year}`)
    }

    useEffect(() => {
        handleDate(props.item.date)
    }, [props.item.date])

    return (
        <StyledTableItem key={props.index}>
            <StyledTableText
                width={100} 
                expense={props.category.expense}
            >{date}</StyledTableText>
            <StyledTableText
                width={100} 
                expense={props.category.expense}
            >{props.category.title}</StyledTableText>
            <StyledTableText
                width={250} 
                expense={props.category.expense}
            >{props.item.title}</StyledTableText>
            <StyledTableText
                width={150} 
                expense={props.category.expense}
            >R$: {props.item.value}</StyledTableText>
            <StyledTableButton>🚫</StyledTableButton>
        </StyledTableItem>
    )
}

export default TableItem