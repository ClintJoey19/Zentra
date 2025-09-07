"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const RootNavbarActions = () => {
  return (
    <div className="flex items-center gap-4">
      <Button asChild>
        <Link href="/auth/sign-in">Sign in</Link>
      </Button>
    </div>
  );
};

export default RootNavbarActions;
