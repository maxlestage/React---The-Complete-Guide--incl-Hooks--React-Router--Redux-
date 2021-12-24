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
        {/* {filteredExpenses.length === 0 && <p>No expense found.</p>} */}
        {/* ou */}
        {/* {filteredExpenses.length < 0 ? (
          <p>No expense found.</p>
        ) : (
          filteredExpenses.map((item) => (
            <ExpendItems
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))
        )} */}

        {/* {filteredExpenses.map((item) => {
          return (
            <ExpendItems
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })} */}

        {/* <ExpendItems
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpendItems
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpendItems
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpendItems
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
}
export default Expense;
