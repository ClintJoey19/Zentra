import { authClient } from "../auth-client";

const checkOrgnizationSlug = async (slugInput: string) => {
  try {
    const isSlugTaken = await authClient.organization.checkSlug({
      slug: slugInput,
    });

    return isSlugTaken;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

type OrganizationDALInput = {
  name: string;
  slug: string;
  logo?: string;
  metadata?: {
    background?: string;
  };
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

const organizationRepository = {
  checkOrgnizationSlug,
  createOrganization,
};

export default organizationRepository;
