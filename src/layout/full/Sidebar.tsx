import {
  IconLayoutDashboard,
  IconChartBar,
  IconReceipt,
  IconSettings,
} from "@tabler/icons-react";
import Darklogo from '@/assets/56.png';
const menuItems = [
  { name: "Dashboard", icon: IconLayoutDashboard },
  { name: "Analytics", icon: IconChartBar },
  { name: "Expenses", icon: IconReceipt },
  { name: "Settings", icon: IconSettings },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={Darklogo} alt="home"  style={{maxHeight: '88px'}} />

      <nav className="menu">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className={`menu-item ${
                item.name === "Dashboard" ? "active" : ""
              }`}
            >
              <Icon size={20} stroke={1.8} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;