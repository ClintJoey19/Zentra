import { Card } from "@/components/ui/card";
import { Organization } from "@/lib/drizzle/schemas/organization.schema";
import Image from "next/image";
import Link from "next/link";
import React, { Ref } from "react";

type OrganizationListItemProps = {
  organization: Organization;
  ref?: Ref<HTMLDivElement>;
};

const OrganizationListItem = ({
  organization,
  ref,
}: OrganizationListItemProps) => {
  const { id, name, logo } = organization;

  return (
    <Link href={`/dashboard/organizations/${id}`}>
      <Card ref={ref} className="aspect-square p-0 overflow-hidden">
        <div className="flex flex-col">
          <div className="bg-muted border-b w-full aspect-video relative">
            <Image
              src={"/next.svg"}
              alt="organization-background"
              className="object-scale-down"
              fill
            />
            <div className="absolute bottom-2 left-2 bg-slate-900 rounded-md shadow-xl p-3 overflow-hidden">
              <Image
                src={logo || "./vercel.svg"}
                alt="organization-logo"
                className="object-contain"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="flex flex-col p-2">
            <span className="font-semibold">{name}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default OrganizationListItem;
