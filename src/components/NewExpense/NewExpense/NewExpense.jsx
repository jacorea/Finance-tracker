import React, {useState} from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import './NewExpense.css'
//Components

const NewExpense = (props) => {

    const [isFormEditing, setIsFormEditing] = useState(false)



    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsFormEditing(!isFormEditing)
    }

    const onToggleFormHandler = () => {
        setIsFormEditing(!isFormEditing)
    }
    
    return (
        <div className="new-expense">
            { isFormEditing ? <ExpenseForm onCancel={onToggleFormHandler} onSaveExpenseData={saveExpenseDataHandler}/> 
            : <button onClick={onToggleFormHandler}>Add New Expense</button>
            }
        </div>
    )
}

export default NewExpense
