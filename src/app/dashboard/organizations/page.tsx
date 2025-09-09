import CreateOrganizationForm from "@/components/dashboard/organizations/CreateOrganizationForm";
import OrganizationsList from "@/components/dashboard/organizations/OrganizationsList";
import SearchInput from "@/components/system/SearchInput";
import React from "react";

const page = () => {
  return (
    <div className="w-[1200px] mx-auto flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="page-title">My Organizations</h2>
        <div className="flex items-center gap-4">
          <SearchInput placeholder="Search organization" />
          <CreateOrganizationForm />
        </div>
      </div>
      <OrganizationsList />
    </div>
  );
};

export default page;
