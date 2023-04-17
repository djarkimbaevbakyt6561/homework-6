import "./App.css";
import { NewExpense } from "./components/newExpense/NewExpense"
import { Expenses } from "./components/expenses/Expenses";
import { useState } from "react";

function App() {
  const productData = [
    {
      title: "Sirop",
      price: 2000,
      date: new Date(2023, 3, 16),
      id: 1
    },
    {
      title: "Agusha",
      price: 2000,
      date: new Date(2023, 4, 26),
      id: 2

    }, {
      title: "Chupik",
      price: 2000,
      date: new Date(2022, 6, 26),
      id: 3

    }, {
      title: "Privet Kak dela?",
      price: 2000,
      date: new Date(2021, 9, 16),
      id: 4
    }, {
      title: "Avtomat",
      price: 10000,
      date: new Date(2020, 8, 16),
      id: 5
    },
  ];
  const [product, setNewProduct] = useState(productData);

  const addNewExpensesHandler = (data) => {
    setNewProduct([...product, data]);
  };
  function deleteExpenses(id) {
    const newData = product.filter((el) => el.id !== id)
    setNewProduct(newData)
  }
  return (
    <div className="App">
      <NewExpense onSubmit={addNewExpensesHandler} />
      <Expenses onClick={deleteExpenses} data={product} />

    </div>
  );
}

export default App;