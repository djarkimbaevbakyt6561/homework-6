import React from 'react'
import './ExpenseFilter.css'
const ExpensesFilter = (props) => {
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <button onClick={props.onClick2}>По убыванию</button>
                <button onClick={props.onClick}>По возрастанию</button>
                <label>Фильтр по году</label>
                <select value={props.selected} onChange={props.getValue}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>
        </div>
    )
}
export default ExpensesFilter