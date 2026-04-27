import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="app-shell">
      

      <main className="page-container">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
