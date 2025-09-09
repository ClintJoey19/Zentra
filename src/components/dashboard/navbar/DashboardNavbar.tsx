import SystemLogo from "@/components/system/SystemLogo";
import SystemUserDropdown from "@/components/system/SystemUserDropdown";
import React from "react";

const DashboardNavbar = () => {
  return (
    <div className="fixed top-0 w-full h-[6vh] bg-background border-b flex justify-between items-center px-4">
      <div className="h-full flex items-center">
        <SystemLogo />
      </div>
      <div className="h-full flex items-center">
        <SystemUserDropdown />
      </div>
    </div>
  );
};

export default DashboardNavbar;
