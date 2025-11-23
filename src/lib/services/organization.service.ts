"use server";
import { APIError } from "better-auth";
import organizationRepository from "../dal/organizations.dal";
import { getServerSession } from "../server/session.server";

type OrganizationServiceInput = {
  name: string;
  slug: string;
  logo?: string;
};

export const createOrganization = async (
  organization: OrganizationServiceInput
) => {
  try {
    const session = await getServerSession();

    if (!session)
      throw new APIError("UNAUTHORIZED", {
        message: "Unauthorized user",
      });

    const isSlugTaken = await organizationRepository.checkOrgnizationSlug(
      organization?.slug
    );

    if (isSlugTaken)
      throw new APIError("NOT_ACCEPTABLE", {
        message: "Organization domain is already taken",
      });

    const newOrganization = await organizationRepository.createOrganization({
      ...organization,
    });

    return newOrganization;
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
    const session = await getServerSession();

    if (!session)
      throw new APIError("UNAUTHORIZED", {
        message: "Unauthorized user",
      });

    console.log(session.user);

    const response = await organizationRepository.listOrganizations();

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
