import React from "react";
import RootNavbarLogo from "./RootNavbarLogo";
import RootNavbarLinks from "./RootNavbarLinks";
import RootNavbarActions from "./RootNavbarActions";

const RootNavbar = () => {
  return (
    <div className="w-full h-[6vh] px-4 flex items-center justify-between gap-4">
      <RootNavbarLogo />
      <RootNavbarLinks />
      <RootNavbarActions />
    </div>
  );
};

export default RootNavbar;
