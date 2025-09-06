import SignUpForm from "@/components/auth/sign-up/SignUpForm";
import SystemLogo from "@/components/system/SystemLogo";
import React from "react";

const page = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <SystemLogo />
      <SignUpForm />
    </div>
  );
};

export default page;
