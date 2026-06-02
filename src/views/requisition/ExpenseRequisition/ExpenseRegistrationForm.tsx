function ExpenseRegistrationForm() {
  return (
    <div className="page-container">
      <h1>Expense Registration</h1>

      <div className="card">
        <div className="form-grid">

          <input placeholder="Expense No" />

          <input type="date" />

          <select>
            <option>Food</option>
            <option>Travel</option>
            <option>Hotel</option>
          </select>

          <input
            type="number"
            placeholder="Amount"
          />

          <select>
            <option>Cash</option>
            <option>Card</option>
            <option>UPI</option>
          </select>

          <select>
            <option>Draft</option>
            <option>Submitted</option>
          </select>

          <textarea
            placeholder="Description"
          />

          <textarea
            placeholder="Remarks"
          />

          <input type="file" />
        </div>

        <div className="page-actions">
          <button>Save</button>
          <button>Submit</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseRegistrationForm