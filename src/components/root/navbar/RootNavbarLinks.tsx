import { rootNavbarLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const RootNavbarLinks = () => {
  return (
    <div className="h-full flex items-center gap-16">
      {rootNavbarLinks.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className="text-muted-foreground hover:text-primary transition"
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default RootNavbarLinks;
