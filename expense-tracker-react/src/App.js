import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/incomeExpense';
import TransactionList from './components/TransactionList';
function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
