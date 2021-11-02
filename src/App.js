import logo from './logo.svg';
import './App.css';
import EXPENSES_DATA from './data/utils/expenses';
import ExpenseItemList from './components/Expenses/ExpenseItemList/ExpenseItemList';
import NewExpense from './components/NewExpense/NewExpense/NewExpense';

function App() {

  const addExpenseHandler = expense => {
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}  />
      <ExpenseItemList expenses={EXPENSES_DATA} />
    </div>
  );
}

export default App;
