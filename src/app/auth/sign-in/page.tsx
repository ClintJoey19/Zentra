import SignInForm from "@/components/auth/sign-in/SignInForm";
import SystemLogo from "@/components/system/SystemLogo";
import React from "react";

const page = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <SystemLogo />
      <SignInForm />
    </div>
  );
};

export default page;
