import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveExpense } from "@/db/expenseDb.ts";

function ExpenseRegistrationForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    ExpenseNo: `EXP${Date.now()}`,
    ExpenseDate: "",
    CategoryId: "",
    CategoryName: "",
    Description: "",
    Amount: 0,
    Currency: "INR",
    PaymentMethod: "Cash",
    Status: "Draft",
    Remarks: "",
  });

  const handleSave = async () => {
    await saveExpense(form);

    navigate("/MyExpense");
  };

  return (
    <div className="page-container">
      <h1>Expense Registration</h1>

      <div className="card">
        <div className="form-grid">

          <input
            value={form.ExpenseNo}
            readOnly
          />

          <input
            type="date"
            value={form.ExpenseDate}
            onChange={(e) =>
              setForm({
                ...form,
                ExpenseDate: e.target.value,
              })
            }
          />

          <input
            placeholder="Description"
            value={form.Description}
            onChange={(e) =>
              setForm({
                ...form,
                Description: e.target.value,
              })
            }
          />

          <input
            type="number"
            value={form.Amount}
            onChange={(e) =>
              setForm({
                ...form,
                Amount: Number(e.target.value),
              })
            }
          />
        </div>

        <div className="page-actions">
          <button onClick={handleSave}>
            Save
          </button>

          <button
            onClick={() => navigate("/MyExpense")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseRegistrationForm;