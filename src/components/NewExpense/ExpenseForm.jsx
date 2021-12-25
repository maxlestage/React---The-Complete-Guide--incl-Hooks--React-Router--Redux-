import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm({ onSaveExpenseData, onCancel }) {
  const [entryTitle, setEntryTitle] = useState("");
  const [entryAmount, setEntryAmount] = useState("");
  const [entryDate, setEntryDate] = useState("");

  /*  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmout: "",
    enteredDate: "",
  }); */

  const handlerTitle = (event) => {
    setEntryTitle(event.target.value);
    /*    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    }); */
  };

  const handlerAmout = (event) => {
    setEntryAmount(event.target.value);
    /*  setUserInput((prevState) => {
      return { ...prevState, enteredAmout: event.target.value };
    }); */
  };

  const handlerDate = (event) => {
    setEntryDate(event.target.value);
    /* setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    }); */
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: entryTitle,
      amount: entryAmount,
      date: new Date(entryDate),
    };
    // console.log(expenseData);
    onSaveExpenseData(expenseData);

    setEntryTitle("");
    setEntryAmount("");
    setEntryDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={entryTitle} onChange={handlerTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={entryAmount}
            onChange={handlerAmout}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={entryDate}
            onChange={handlerDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
