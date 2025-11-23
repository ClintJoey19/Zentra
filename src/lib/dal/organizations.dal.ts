import { headers } from "next/headers";
import { authClient } from "../auth-client";
import { db } from "../drizzle";
import { organization } from "../drizzle/schemas/organization.schema";
import { member } from "../drizzle/schemas/member.schema";
import { eq } from "drizzle-orm";
import { user } from "../drizzle/schemas/user.schema";

const checkOrgnizationSlug = async (slugInput: string) => {
  const isSlugTaken = await authClient.organization.checkSlug({
    slug: slugInput,
  });

  return isSlugTaken;
};

type OrganizationDALInput = {
  name: string;
  slug: string;
  logo?: string;
};

const createOrganization = async (organization: OrganizationDALInput) => {
  try {
    const newOrganization = await authClient.organization.create({
      ...organization,
      keepCurrentActiveOrganization: false,
    });

    return newOrganization;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const listOrganizations = async () => {
  try {
    const organizations = await authClient.organization.list();

    return organizations.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const organizationRepository = {
  checkOrgnizationSlug,
  listOrganizations,
  createOrganization,
};

export default organizationRepository;
