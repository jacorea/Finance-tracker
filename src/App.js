import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import EXPENSES_DATA from './data/utils/expenses';
import ExpenseItemList from './components/Expenses/ExpenseItemList/ExpenseItemList';
import NewExpense from './components/NewExpense/NewExpense/NewExpense';

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
      <NewExpense onAddExpense={addExpenseHandler}  />
      <ExpenseItemList expenses={expenses} />
    </div>
  );
}

export default App;
