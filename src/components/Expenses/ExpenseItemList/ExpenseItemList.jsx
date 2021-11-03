import React, { useState } from 'react'
import "./ExpenseItemList.css"
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import Card from '../../UI/Card/Card';
import ExpenseFilter from '../../ExpenseFilter/ExpenseFilter';

const ExpenseItemList = ({ expenses}) => {

    const [ selectedYear, setSelectedYear ] =useState('2022')

    let expensesList = expenses.map((expense)=>{
        return (
            <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} 
            />
        )
    }) 

    const selectYearHandler = (yearPicked) => {
        setSelectedYear(yearPicked);
        console.log(yearPicked)
    }

    return (
        <div>
            <Card className="expenses">
            <ExpenseFilter selectedYear={selectedYear} onSelectYear={selectYearHandler}  />
                {expensesList}
            </Card>
        </div>
    )
}

export default ExpenseItemList
