import "./settings.css";
import { NavLink } from "react-router-dom";
import {
  IconUsers,
  IconCategory,
} from "@tabler/icons-react";

function Settings() {
  const settingsConfig = [
    {
      title: "Employee Management",
      items: [
        { label: "Employees", icon: IconUsers, to: "/employees" },
      ],
    },
    {
      title: "Expense Management",
      items: [
        { label: "Expense Categories", icon: IconCategory, to: "/expense-categories" },
      ],
    },
  ];

  return (
    <div className="settings-page">
      <div className="settings-header">
        <h2>Settings</h2>
      </div>

      <div className="settings-grid">
        {settingsConfig.map((section) => (
          <div key={section.title} className="settings-section">
            <h3>{section.title}</h3>

            {section.items.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `settings-item ${isActive ? "active" : ""}`
                  }
                >
                  {Icon && <Icon size={18} />}
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Settings;