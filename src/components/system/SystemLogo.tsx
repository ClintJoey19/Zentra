import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";
import React from "react";

const SystemLogo = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Link
        href="/"
        className="flex items-center gap-2 self-center font-medium"
      >
        <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
          <GalleryVerticalEnd className="size-4" />
        </div>
        Zentra
      </Link>
    </div>
  );
};

export default SystemLogo;
