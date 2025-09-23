import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="max-w-[1220px] mx-auto flex flex-col items-center justify-center gap-8 py-20">
      <div className="flex flex-col gap-4">
        <h1 className="max-w-[1000px] text-6xl font-semibold text-center">
          Run Your Business. One ERP, Endless Possibilities.
        </h1>
        <p className="text-muted-foreground text-center">
          All-in-one ERP that simplifies operations, connects your teams, and
          powers growth.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Button size="lg">Get started for free</Button>
        <Button size="lg" variant="outline">
          Book a demo
        </Button>
      </div>
      <div className="w-full aspect-video relative rounded-xl overflow-hidden">
        <Image
          src="/root/hero/dummy-hero.webp"
          alt="hero-dashboard-preview"
          fill
        />
      </div>
    </section>
  );
};

export default Hero;
