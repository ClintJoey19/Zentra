"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SystemUserAvatar from "./SystemUserAvatar";
import useAuth from "@/hooks/use-auth";

const SystemUserDropdown = () => {
  const { user, isLoading, handleSignOut } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <SystemUserAvatar image={user?.image as string} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem onClick={handleSignOut}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SystemUserDropdown;
