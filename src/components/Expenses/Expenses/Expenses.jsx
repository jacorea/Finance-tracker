import React, { useState } from 'react'
import "./Expenses.css"
import Card from '../../UI/Card/Card';
import ExpenseFilter from '../../ExpenseFilter/ExpenseFilter';
import ExpenseItemList from '../ExpenseItemList/ExpenseItemList';

const Expenses = ({ expenses }) => {

    const [ selectedYear, setSelectedYear ] =useState('2022')

    let filteredExpenses = expenses.filter((expense) => expense.date.getFullYear() === Number(selectedYear)) //filteres expenses based on selected year

    const selectYearHandler = (yearPicked) => {
        setSelectedYear(yearPicked);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selectedYear={selectedYear} onSelectYear={selectYearHandler}  />
                <ExpenseItemList expenses={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses
