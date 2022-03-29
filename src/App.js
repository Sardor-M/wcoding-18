import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ExpenseContext from "./contexts/ExpenseContext";

function App() {
  const [total, setTotal] = useState({
    price: 0,
    quantity: 0,
  });
  return (
    <ExpenseContext.Provider value={{
      total,
      setTotal,
    }}>
      <Header />
      <Content />
      <Footer />
    </ExpenseContext.Provider>
  );
}

export default App;
