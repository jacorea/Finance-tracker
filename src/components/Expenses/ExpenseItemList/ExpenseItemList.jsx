import React from 'react'
import "./ExpenseItemList.css"
import ExpenseItem from '../ExpenseItem/ExpenseItem'

const ExpenseItemList = ({ expenses }) => {

    if (expenses.length === 0 ) {
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }

    return (
        <ul className="expenses-list">
            {expenses.map((filteredExpense)=> ( // list filtered expenses
                <ExpenseItem 
                    key={filteredExpense.id}
                    title={filteredExpense.title} 
                    amount={filteredExpense.amount} 
                    date={filteredExpense.date} 
                />
            ))}
        </ul>
    )
}

export default ExpenseItemList
