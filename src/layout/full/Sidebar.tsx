import { NavLink } from "react-router-dom";
import {
  IconLayoutDashboard,
  IconChartBar,
  IconReceipt,
  IconSettings,
} from "@tabler/icons-react";
import Darklogo from "@/assets/56.png";

const menuItems = [
  { title: "Dashboard", icon: IconLayoutDashboard, to: "/" },
  { title: "Analytics", icon: IconChartBar, to: "/AIAnalytics" },
  { title: "Expenses", icon: IconReceipt, to: "/MyExpense" },
  { title: "Settings", icon: IconSettings, to: "/Settings" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={Darklogo} alt="home" style={{ maxHeight: "88px" }} />

      <nav className="menu">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.to}
              className={({ isActive }) =>
                `menu-item ${isActive ? "active" : ""}`
              }
            >
              <Icon size={20} stroke={1.8} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;