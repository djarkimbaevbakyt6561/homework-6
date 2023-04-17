
import React, { useState } from 'react'
import './Expenses.css'
import { ExpenseItem } from './ExpenseItem'
import ExpensesFilter from "./ExpenseFilter"
import ExpenseChart from "../chart/ExpensesChart"

export const Expenses = ({ data, onClick }) => {
    const [selectedYear, setSelectedYear] = useState('2023')
    const [filteredYear, setFilteredYear] = useState(data)
    function getSelectValue(event) {
        setSelectedYear(event.target.value)
        setFilteredYear(data.filter((el) => {
            return el.date.getFullYear().toString() === event.target.value
        }))
    }
    function ascendingProduct() {
        const sortedData = data.sort((a, b) => a.date.getMonth() - b.date.getMonth())
        setFilteredYear(sortedData.filter((el) => {
            return el.date.getFullYear().toString() === selectedYear
        }))
    }
    function descendingProduct() {
        const sortedData = data.sort((a, b) => b.date.getMonth() - a.date.getMonth())
        setFilteredYear(sortedData.filter((el) => {
            return el.date.getFullYear().toString() === selectedYear
        }))
    }
    return (
        <ul className='ul'>
            <ExpensesFilter onClick2={descendingProduct} onClick={ascendingProduct} getValue={getSelectValue} selected={selectedYear} />
            <ExpenseChart filteredExpenses={filteredYear} />
            {filteredYear.map((el) => {
                return <ExpenseItem el={el} id={el.id} onClick={onClick} />
            })}
        </ul>
    )
}