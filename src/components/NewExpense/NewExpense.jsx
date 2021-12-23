import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense({ onAddExpense }) {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    console.log(expenseData);
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
