import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";

export default function TransactionForm({ onClose }) {
  const { formData, setFormData, handleFormSubmit } =
    useContext(GlobalContext);

  function handleFormChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleFormSubmit(formData);
    onClose();
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        if (!formData.description || !formData.amount) {
          !formData.description ? alert("Please enter the description") : alert("Please enter the amount");
          return;
        };
        handleSubmit(event);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [formData]);

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "400px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Add New Transaction
          </h2>

          <div style={{ marginBottom: "12px" }}>
            <label style={{ display: "block", fontWeight: "bold" }}>
              Enter Description
            </label>
            <input
              type="text"
              placeholder="Enter Transaction Description"
              name="description"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginTop: "4px",
              }}
              onChange={handleFormChange}
              autoComplete="off"
              required
            />
          </div>

          <div style={{ marginBottom: "12px" }}>
            <label style={{ display: "block", fontWeight: "bold" }}>
              Enter Amount
            </label>
            <input
              type="number"
              placeholder="Enter Transaction Amount"
              name="amount"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginTop: "4px",
              }}
              onChange={handleFormChange}
              autoComplete="off"
              required
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Transaction Type:
            </label>
            <div>
              <input
                type="radio"
                id="income"
                name="type"
                value="income"
                checked={formData.type === "income"}
                onChange={handleFormChange}
                style={{ cursor: "pointer", accentColor: "blue" }}
              />
              <label
                htmlFor="income"
                style={{ marginLeft: "8px", cursor: "pointer" }}
              >
                Income
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="expense"
                name="type"
                value="expense"
                checked={formData.type === "expense"}
                onChange={handleFormChange}
                style={{ cursor: "pointer", accentColor: "red" }}
              />
              <label
                htmlFor="expense"
                style={{ marginLeft: "8px", cursor: "pointer" }}
              >
                Expense
              </label>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "16px",
            }}
          >
            <button
              onClick={onClose}
              style={{
                marginRight: "12px",
                padding: "8px 12px",
                border: "none",
                background: "#ccc",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
            <button
              style={{
                padding: "8px 12px",
                border: "none",
                background: "#007bff",
                color: "white",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
