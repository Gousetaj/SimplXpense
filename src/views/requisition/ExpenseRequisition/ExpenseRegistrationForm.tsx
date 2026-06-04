import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

import {
  saveExpense,
  getExpenseById,
} from "@/db/expenseDb";

import "./ExpenseRegistrationForm.css";

function ExpenseRegistrationForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const isEdit = location.pathname.includes("/edit/");
  const isView = location.pathname.includes("/view/");
  const readOnly = isView;

  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    const loadExpense = async () => {
      if (!id) return;

      setLoading(true);

      try {
        const expense: any =
          await getExpenseById(id);

        if (expense) {
          setForm(expense);
        }
      } finally {
        setLoading(false);
      }
    };

    loadExpense();
  }, [id]);

  const handleSave = async () => {
    await saveExpense(form);

    navigate("/MyExpense");
  };

  if (loading) {
    return (
      <div className="page-container">
        Loading...
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="v-card-custom">

        <div className="card-header">
          <h2>
            {isEdit
              ? "Edit Expense"
              : isView
              ? "View Expense"
              : "Add Expense"}
          </h2>
        </div>

        <div className="card-body">

          <div className="form-section">
            <h3 className="form-section-title">
              Expense Information
            </h3>

            <div className="form-grid">

              <div>
                <label className="v-label">
                  Expense No
                </label>

                <input
                  className="v-input"
                  value={form.ExpenseNo}
                  readOnly
                />
              </div>

              <div>
                <label className="v-label">
                  Expense Date
                </label>

                <input
                  className="v-input"
                  type="date"
                  value={form.ExpenseDate}
                  disabled={readOnly}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      ExpenseDate: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="v-label">
                  Category Id
                </label>

                <input
                  className="v-input"
                  value={form.CategoryId}
                  disabled={readOnly}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      CategoryId: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="v-label">
                  Category Name
                </label>

                <input
                  className="v-input"
                  value={form.CategoryName}
                  disabled={readOnly}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      CategoryName:
                        e.target.value,
                    })
                  }
                />
              </div>

              <div className="col-span-2">
                <label className="v-label">
                  Description
                </label>

                <textarea
                  className="v-textarea"
                  value={form.Description}
                  disabled={readOnly}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      Description:
                        e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="v-label">
                  Amount
                </label>

                <input
                  className="v-input"
                  type="number"
                  value={form.Amount}
                  disabled={readOnly}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      Amount: Number(
                        e.target.value
                      ),
                    })
                  }
                />
              </div>

              <div>
                <label className="v-label">
                  Currency
                </label>

                <select
                  className="v-input"
                  value={form.Currency}
                  disabled={readOnly}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      Currency:
                        e.target.value,
                    })
                  }
                >
                  <option value="INR">
                    INR
                  </option>
                  <option value="USD">
                    USD
                  </option>
                  <option value="EUR">
                    EUR
                  </option>
                </select>
              </div>

              <div>
                <label className="v-label">
                  Payment Method
                </label>

                <select
                  className="v-input"
                  value={form.PaymentMethod}
                  disabled={readOnly}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      PaymentMethod:
                        e.target.value,
                    })
                  }
                >
                  <option value="Cash">
                    Cash
                  </option>
                  <option value="Card">
                    Card
                  </option>
                  <option value="UPI">
                    UPI
                  </option>
                  <option value="Bank Transfer">
                    Bank Transfer
                  </option>
                </select>
              </div>

              <div>
                <label className="v-label">
                  Status
                </label>

                <select
                  className="v-input"
                  value={form.Status}
                  disabled={readOnly}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      Status:
                        e.target.value,
                    })
                  }
                >
                  <option value="Draft">
                    Draft
                  </option>
                  <option value="Submitted">
                    Submitted
                  </option>
                  <option value="Approved">
                    Approved
                  </option>
                  <option value="Rejected">
                    Rejected
                  </option>
                </select>
              </div>

              <div className="col-span-2">
                <label className="v-label">
                  Remarks
                </label>

                <textarea
                  className="v-textarea"
                  value={form.Remarks}
                  disabled={readOnly}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      Remarks:
                        e.target.value,
                    })
                  }
                />
              </div>

            </div>
          </div>

        </div>

        <div className="card-actions">

          <button
            className="v-btn v-btn-secondary"
            onClick={() =>
              navigate("/MyExpense")
            }
          >
            Cancel
          </button>

          {!readOnly && (
            <button
              className="v-btn v-btn-primary"
              onClick={handleSave}
            >
              Save
            </button>
          )}

        </div>

      </div>
    </div>
  );
}

export default ExpenseRegistrationForm;