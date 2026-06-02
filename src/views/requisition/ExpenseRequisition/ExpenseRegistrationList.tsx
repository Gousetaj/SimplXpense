import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoleTable from "@/components/reusables/RoleTable";

function ExpenseRegistrationList() {
  const navigate = useNavigate();

  const [expenses, setExpenses] = useState([
    {
      ExpenseNo: "EXP0001",
      ExpenseDate: "2026-06-01",
      CategoryId: "FOOD",
      CategoryName: "Food",
      Description: "Team Lunch",
      Amount: 2500,
      Currency: "INR",
      PaymentMethod: "Cash",
      Status: "Draft",
      Remarks: "",
    },
  ]);

  const fields = [
    { caption: "Expense No", dataField: "ExpenseNo" },
    { caption: "Expense Date", dataField: "ExpenseDate" },
    { caption: "Category", dataField: "CategoryName" },
    { caption: "Description", dataField: "Description" },
    { caption: "Amount", dataField: "Amount" },
    { caption: "Status", dataField: "Status" },
  ];

  const handleAction = (action: string, item: any) => {
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
        setExpenses((prev) =>
          prev.filter(
            (expense) =>
              expense.ExpenseNo !== item.ExpenseNo
          )
        );
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