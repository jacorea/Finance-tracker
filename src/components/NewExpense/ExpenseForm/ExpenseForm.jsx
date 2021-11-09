import React, { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {

    //Done using single State function calls
    // const [ inputTitle, setInputTitle ] = useState('');
    // const [ inputAmount, setInputAmount ] = useState('');
    // const [ inputDate, setInputDate ] = useState('');

    //Handling multiple state function calls
    const [ userInput, setUserInput ] = useState({
        title: '',
        amount: '',
        date: ''
    })

    const inputChangeHandler = (e) => {
        setUserInput((prevState)=> (
            {...prevState,
            [e.target.name]: e.target.value 
            }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let {title, amount, date} = userInput
        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        }
        props.onSaveExpenseData(expenseData);
        setUserInput({
            title: '',
            amount: '',
            date: ''
        }) 
    }

    const { title, amount, date } = userInput;
    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" name="title"  value={title} onChange={inputChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={inputChangeHandler} name="amount" value={amount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={inputChangeHandler} name="date" value={date}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
