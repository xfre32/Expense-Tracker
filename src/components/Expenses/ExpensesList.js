import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

function ExpensesList(props) {
    if(props.filteredExpenses.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses found.</h2> 
    }
    return(
        <ul className="expenses-list">
            {props.filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
        </ul>
    );

}

export default ExpensesList; 