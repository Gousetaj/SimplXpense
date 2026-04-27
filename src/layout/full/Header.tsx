import {
  IconMenu2,
  IconBell,
  IconRefresh,
  IconInfoCircle,
  IconUserCircle,
} from "@tabler/icons-react";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <IconMenu2 size={24} />
        <span>Home</span>
      </div>

      <div className="header-right">
        <IconInfoCircle size={20} />
        <IconRefresh size={20} />
        <IconBell size={20} />
        <IconUserCircle size={28} />
      </div>
    </header>
  );
}

export default Header;