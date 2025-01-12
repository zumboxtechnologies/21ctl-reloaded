"use client";

import Button from "@/components/Button";
import FlipCardsCont from "@/components/FlipCardsCont";
import Polygon from "@/components/Polygon";
//import { gsap } from "gsap";
//import { useEffect } from "react";

const HomePage = () => {
  // useEffect(() => {
  //   gsap.from(".animate-text", {
  //     opacity: 0,
  //     y: 50,
  //     duration: 1,
  //     stagger: 0.2,
  //   });

  //   gsap.from(".animate-button", {
  //     opacity: 0,
  //     scale: 0.8,
  //     duration: 1,
  //     delay: 0.5,
  //   });
  // }, []);
  return (
    <main className="!pt-40 myContainer min-h-screen">
      <section className="myFlex justify-between gap-10">
        <div className="basis-[50%] space-y-4">
          <h1>Welcome to</h1>
          <div className="relative bg-primary w-fit py-2 px-8">
            <h1 className="whitespace-nowrap">21CTL Website</h1>
            <Polygon className="size-10 bg-white" />
          </div>
          <p className="animate-text text-primaryGray tracking-wide">
            At 21st century tech we’re building bold digital infrastructure to
            solve today’s challenges <br /> and shape tomorrow’s industries.
          </p>
          <Button
            className="animate-button"
            cta="Select destination"
            polycolor="bg-white"
          />
        </div>
        <div className="basis-[50%]">
          <FlipCardsCont />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
