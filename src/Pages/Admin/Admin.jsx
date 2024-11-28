import { Outlet } from "react-router-dom";
import "./Admin.css";
import { useEffect } from "react";

export default function Admin() {
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (
    <div className="admin">
      <Outlet />
    </div>
  );
}
