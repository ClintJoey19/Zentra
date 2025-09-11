import { APIError } from "better-auth";
import { authClient } from "../auth-client";

type OrganizationInput = {
  name: string;
  slug: string;
  logo?: File;
  metadata: {
    background?: File;
  };
};

export const createOrganization = async (organization: OrganizationInput) => {
  try {
    const isSlugTaken = await authClient.organization.checkSlug({
      slug: organization?.slug,
    });

    if (isSlugTaken)
      throw new APIError("NOT_ACCEPTABLE", {
        message: "Organization domain is already taken",
      });

    // TODO: upload logo and background to uploadthing
    const logo = "";
    const background = "";

    const response = await authClient.organization.create({
      ...organization,
      logo,
      metadata: {
        background,
      },
      keepCurrentActiveOrganization: false,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getOrganization = async () => {
  try {
    // todo
  } catch (error) {
    console.error(error);
  }
};

export const getOrganizations = async () => {
  try {
    const response = await authClient.organization.list();

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateOrganization = async () => {
  try {
    // todo
  } catch (error) {
    console.error(error);
  }
};

export const deleteOrganization = async () => {
  try {
    // todo
  } catch (error) {
    console.error(error);
  }
};
