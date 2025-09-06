import { authClient } from "../auth-client";

type SignUpEmailAndPasswordCredentials = {
  name: string;
  email: string;
  password: string;
  image?: string;
};

export const signUpWithEmailAndPassword = async (
  credentials: SignUpEmailAndPasswordCredentials
) => {
  try {
    const response = await authClient.signUp.email(credentials);

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const response = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

type SocialProvider = "google";

export const signInWithSocialProvider = async (provider: SocialProvider) => {
  try {
    const response = await authClient.signIn.social({
      provider,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const signOut = async () => {
  try {
    await authClient.signOut();
  } catch (error) {
    console.error(error);
  }
};
