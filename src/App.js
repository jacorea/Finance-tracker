import React, { useState } from 'react'
import './App.css';
import EXPENSES_DATA from './data/utils/expenses';
import NewExpense from './components/NewExpense/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses/Expenses';


function App() {
  const [expenses, setExpenses] = useState(EXPENSES_DATA);
  
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses)=> {
      return (
        [expense, ...expenses]
      )
    })
  }
  
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Finance Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler}  />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
