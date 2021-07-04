import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";
import './Expenses.css';

function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2021');

    function saveFilterHandler(filter) {
        setFilterYear(filter);
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filterYear);

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter currentYear={filterYear} onSaveFilter={saveFilterHandler}/>
                <ExpenseChart expenses={filteredExpenses}/>
                <ExpensesList filteredExpenses={filteredExpenses}/>
            </Card>
        </div>
    );

}

export default Expenses;