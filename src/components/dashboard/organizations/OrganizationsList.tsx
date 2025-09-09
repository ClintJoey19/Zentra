import React from "react";
import OrganizationListItem from "./OrganizationListItem";

export const organizations = [
  {
    id: "1",
    name: "Organization 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quam nihil corporis libero provident consequuntur?",
    logo: "/vercel.svg",
    background: "/next.svg",
  },
  {
    id: "2",
    name: "Organization 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quam nihil corporis libero provident consequuntur?",
    logo: "/vercel.svg",
    background: "/next.svg",
  },
  {
    id: "3",
    name: "Organization 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quam nihil corporis libero provident consequuntur?",
    logo: "/vercel.svg",
    background: "/next.svg",
  },
  {
    id: "4",
    name: "Organization 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quam nihil corporis libero provident consequuntur? hello na word pa",
    logo: "/vercel.svg",
    background: "/next.svg",
  },
];

const OrganizationsList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {organizations.map((organization) => (
        <OrganizationListItem
          key={organization.id}
          organization={organization}
        />
      ))}
    </div>
  );
};

export default OrganizationsList;
