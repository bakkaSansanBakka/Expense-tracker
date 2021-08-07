import { useState } from "react";

import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "el1",
    title: "Молоко",
    date: new Date(2020, 12, 28),
    amount: 1000,
  },
  {
    id: "el2",
    title: "Оплата штрафа",
    date: new Date(2021, 1, 12),
    amount: 36.79,
  },
  {
    id: "el3",
    title: "Стиральная машина",
    date: new Date(2019, 10, 16),
    amount: 5300,
  },
  {
    id: "el4",
    title: "Бытовая химия",
    date: new Date(2020, 11, 24),
    amount: 45.95,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
