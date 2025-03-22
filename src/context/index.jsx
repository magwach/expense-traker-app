import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    type: "expense",
    amount: 0,
    description: "",
  });
  const [value, setValue] = useState("expense");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);

  function handleFormSubmit(currFormData) {
    setAllTransactions([
      ...allTransactions,
      { id: Date.now(), ...currFormData },
    ]);
    setFormData({ type: "expense", amount: 0, description: "" });
  }

  console.log(allTransactions);

  return (
    <GlobalContext.Provider
      value={{
        value,
        setValue,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        allTransactions,
        setAllTransactions,
        handleFormSubmit,
        formData,
        setFormData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
