import React, { useState } from 'react'
import './Expenses.css'
import { ExpenseItem } from './ExpenseItem'
import ExpensesFilter from "./ExpenseFilter"
import ExpenseChart from "../chart/ExpensesChart"

export const Expenses = ({ data, onClick }) => {
    const [selectedYear, setSelectedYear] = useState('2023')
    const [sortState, setSortState] = useState(true)

    const filteredYear = data.filter((el) => el.date.getFullYear().toString() === selectedYear)

    const sortedData = filteredYear.slice().sort((a, b) => {
        if (sortState === true) {
            return a.date.getMonth() - b.date.getMonth()
        } else if (sortState === false) {
            return b.date.getMonth() - a.date.getMonth()
        }
    })

    function getSelectValue(event) {
        setSelectedYear(event.target.value)
    }

    function ascendingProduct() {
        setSortState(true)
    }

    function descendingProduct() {
        setSortState(false)
    }

    return (
        <ul className='ul'>
            <ExpensesFilter onClick2={descendingProduct} onClick={ascendingProduct} getValue={getSelectValue} selected={selectedYear} />
            <ExpenseChart filteredExpenses={filteredYear} />
            {sortedData.map((el) => (
                <ExpenseItem id={el.id} key={el.id} el={el} onClick={onClick} />
            ))}
        </ul>
    )
}