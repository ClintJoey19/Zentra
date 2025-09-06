import { authClient } from "../auth-client";

export const getSession = async () => {
  try {
    const response = await authClient.getSession();

    return response;
  } catch (error) {
    console.error(error);
  }
};
