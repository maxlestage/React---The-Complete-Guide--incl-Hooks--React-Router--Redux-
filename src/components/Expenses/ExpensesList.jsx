import "./ExpensesList.css";
import ExpendItems from "./ExpenseItems";

const ExpensesList = ({ items }) => {
  //   let expensesContent = <p>No expense found.</p>;
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((item) => (
        <ExpendItems
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
