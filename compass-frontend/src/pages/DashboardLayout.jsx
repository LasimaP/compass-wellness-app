import React from "react";
import AppHeader from "../components/AppHeader";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-[100vh] bg-parchment">
      <AppHeader />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
