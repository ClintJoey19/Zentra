import SystemLogo from "@/components/system/SystemLogo";
import SystemUserDropdown from "@/components/system/SystemUserDropdown";
import React from "react";

const DashboardNavbar = () => {
  return (
    <div className="w-full h-[5vh] flex justify-between items-center px-4">
      <div>
        <SystemLogo />
      </div>
      <div>
        <SystemUserDropdown />
      </div>
    </div>
  );
};

export default DashboardNavbar;
