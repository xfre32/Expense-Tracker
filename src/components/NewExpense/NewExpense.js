import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props) {
    const[addMode, setAddMode] = useState(false);

    function saveExpenseDataHandler(receivedData) {
        const expenseData = {
            ...receivedData,
            id: Math.random().toString()
        }
        props.onAddExpenseData(expenseData);
        setAddMode(false);
    }

    function clickHanlder() {
        setAddMode(true);
    }

    function cancelHandler() {
        setAddMode(false)
    }

    return(
        <div className="new-expense">
            {addMode === false && <button onClick={clickHanlder}>Add a new Expense</button>}
            {addMode === true && <ExpenseForm onCancel={cancelHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    );
}

export default NewExpense; 