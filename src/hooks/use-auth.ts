"use client";
import { authClient } from "@/lib/auth-client";
import { signOut } from "@/lib/services/auth.service";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const { data, isPending, error, refetch } = authClient.useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();

      router.push("/auth/sign-in");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    user: data?.user,
    isLoading: isPending,
    error,
    refetch,
    handleSignOut,
  };
};

export default useAuth;
