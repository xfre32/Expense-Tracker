import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_Array = [
  {
    id: 'e4',
    title: 'A Book',
    amount: 7.07,
    date: new Date(2021, 5, 29),
  },
  {
    id: 'e3',
    title: 'Haircut',
    amount: 8.75,
    date: new Date(2021, 5, 28),
  },
  { 
    id: 'e2', 
    title: 'Boat Headphones', 
    amount: 25.58, 
    date: new Date(2021, 4, 29) 
  },
  {
    id: 'e1',
    title: 'Ergonomic chair',
    amount: 49.68,
    date: new Date(2021, 4, 3),
  },
]

function App() {
  const [expenses, setExpenses] = useState(Dummy_Array);
  
  function addExpenseDataHandler(receivedData) {
    setExpenses((prevItem) => {
      return [receivedData, ...prevItem]      
    });
  }

  function inlineStyle() {
    return(
      {
        fontFamily: "'Questrial', sans-serif",
        color: 'white',
        textAlign: 'center'
      }
    );
  }

  return (
    <div>
      <h1 style={inlineStyle()}>Expense Tracker</h1>
      <NewExpense onAddExpenseData={addExpenseDataHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
