import React from "react";
import OrganizationListItem from "./OrganizationListItem";
import { getOrganizations } from "@/lib/services/organization.service";

const OrganizationsList = async () => {
  const organizations = await getOrganizations();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {organizations?.map((organization) => (
        <OrganizationListItem
          key={organization.id}
          organization={organization}
        />
      ))}
    </div>
  );
};

export default OrganizationsList;
