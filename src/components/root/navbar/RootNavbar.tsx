import React from "react";
import RootNavbarLogo from "./RootNavbarLogo";
import RootNavbarLinks from "./RootNavbarLinks";
import RootNavbarActions from "./RootNavbarActions";

const RootNavbar = () => {
  return (
    <div className="max-w-[1220px] h-[6vh] px-4 flex items-center justify-between gap-4 mx-auto">
      <RootNavbarLogo />
      <RootNavbarLinks />
      <RootNavbarActions />
    </div>
  );
};

export default RootNavbar;
