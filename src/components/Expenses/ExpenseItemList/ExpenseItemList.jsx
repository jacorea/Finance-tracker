import React, { useState } from 'react'
import "./ExpenseItemList.css"
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import Card from '../../UI/Card/Card';
import ExpenseFilter from '../../ExpenseFilter/ExpenseFilter';

const ExpenseItemList = ({ expenses}) => {

    const [ selectedYear, setSelectedYear ] =useState('2022')

    let filteredExpenses = expenses.filter((expense) => expense.date.getFullYear() === Number(selectedYear)) //filteres expenses based on selected year
    let filteredExpensesList = filteredExpenses.map((filteredExpense)=> { // list filtered expenses
        return (
            <ExpenseItem 
                key={filteredExpense.id}
                title={filteredExpense.title} 
                amount={filteredExpense.amount} 
                date={filteredExpense.date} 
            />
        )
    })

    const selectYearHandler = (yearPicked) => {
        setSelectedYear(yearPicked);
    }

    let expensesDisplay = <p>No expenses to display.</p>;

    if (filteredExpenses.length > 0 ) {
        expensesDisplay = filteredExpensesList
    }

    return (
        <div>
            <Card className="expenses">
            <ExpenseFilter selectedYear={selectedYear} onSelectYear={selectYearHandler}  />
                {expensesDisplay}
            </Card>
        </div>
    )
}

export default ExpenseItemList
