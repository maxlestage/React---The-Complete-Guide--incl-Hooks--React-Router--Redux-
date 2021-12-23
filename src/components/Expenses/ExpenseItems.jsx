import React, { useState } from "react";

import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpendItems(props) {
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");
  // let title = props.title;

  const handlerClicker = () => {
    // title = "Update!";
    setTitle("Test title");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={handlerClicker}>Update Title</button>
    </Card>
  );
}

export default ExpendItems;
