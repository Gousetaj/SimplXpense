import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./layout.css";

function FullLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-layout">
        <Header />

        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default FullLayout;