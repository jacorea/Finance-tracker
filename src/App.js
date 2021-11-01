import logo from './logo.svg';
import './App.css';
import EXPENSES_DATA from './data/utils/expenses';
import ExpenseItemList from './components/ExpenseItemList/ExpenseItemList';

function App() {
  return (
    <div>
      <h2>Let's get started</h2>
      <ExpenseItemList expenses={EXPENSES_DATA} />
    </div>
  );
}

export default App;
