import { useState } from "react";
import Card from "../UI/Card";
import "./Expense.css";
import ExpendItems from "./ExpenseItems";
import ExpensesFilter from "./ExpensesFilter";

function Expense({ items }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  console.log(filteredExpenses);

  let expensesContent = <p>No expense found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpendItems
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {expensesContent}
      </Card>
    </div>
  );
}
export default Expense;
