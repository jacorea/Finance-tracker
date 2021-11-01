import React from 'react'
import "./ExpenseItemList.css"
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import Card from '../../UI/Card/Card';

const ExpenseItemList = ({ expenses}) => {

    let expensesList = expenses.map((expense)=>{
        return (
            <ExpenseItem 
                id={expense.id} 
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} 
            />
        )
    }) 

    return (
        <Card className="expenses">
            {expensesList}
        </Card>
    )
}

export default ExpenseItemList
