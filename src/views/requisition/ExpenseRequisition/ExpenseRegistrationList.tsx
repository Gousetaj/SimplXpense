import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoleTable from "@/components/reusables/RoleTable";
import {
  getExpenses,
  deleteExpense,
} from "@/db/expenseDb.ts";

function ExpenseRegistrationList() {
  const navigate = useNavigate();

  const [expenses, setExpenses] = useState<any[]>(
    []
  );

  const loadExpenses = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const fields = [
    { caption: "Expense No", dataField: "ExpenseNo" },
    { caption: "Expense Date", dataField: "ExpenseDate" },
    { caption: "Category", dataField: "CategoryName" },
    { caption: "Description", dataField: "Description" },
    { caption: "Amount", dataField: "Amount" },
    { caption: "Status", dataField: "Status" },
  ];

  const handleAction = async (
    action: string,
    item: any
  ) => {
    switch (action) {
      case "add":
        navigate("/expenses/add");
        break;

      case "view":
        navigate(`/expenses/view/${item.ExpenseNo}`);
        break;

      case "update":
        navigate(`/expenses/edit/${item.ExpenseNo}`);
        break;

      case "delete":
        await deleteExpense(item.ExpenseNo);
        loadExpenses();
        break;
    }
  };

  return (
    <RoleTable
      fields={fields}
      sampleData={expenses}
      handleAction={handleAction}
      noDataContent={{
        buttonText: "Add Expense",
      }}
    />
  );
}

export default ExpenseRegistrationList;