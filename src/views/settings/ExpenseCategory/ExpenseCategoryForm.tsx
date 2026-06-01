import { useState, useEffect } from "react";
import "./ExpenseCategoryForm.css";

function ExpenseCategoryForm({
  mode,
  data,
  fields,
  onClose,
  onSave,
}: any) {
  const [form, setForm] = useState<any>({});

  const isView = mode === "view";

  useEffect(() => {
    setForm(data || {});
  }, [data]);

  const handleChange = (key: string, value: any) => {
    setForm((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    onSave(form);
  };

  return (
    <div className="v-overlay-custom">
      <div className="v-dialog-custom">
        <div className="dialog-header">
          <h3>
            {mode === "add" && "Add Category"}
            {mode === "update" && "Edit Category"}
            {mode === "view" && "View Category"}
          </h3>
        </div>

        <div className="dialog-body">
          {fields.map((field: any) => (
            <div key={field.dataField} className="v-field">
              <label className="v-label">{field.caption}</label>

              <input
                className="v-input"
                value={form[field.dataField] || ""}
                disabled={isView}
                onChange={(e) =>
                  handleChange(field.dataField, e.target.value)
                }
              />
            </div>
          ))}
        </div>

        <div className="dialog-actions">
          <button
            className="v-btn v-btn-secondary"
            onClick={onClose}
          >
            Close
          </button>

          {!isView && (
            <button
              className="v-btn v-btn-primary"
              onClick={handleSubmit}
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExpenseCategoryForm;