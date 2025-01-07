"use client";

import { useEffect } from "react";
import FlipCard from "./FlipCard";
import Image from "next/image";
import { gsap } from "gsap";

const FlipCardsCont = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .from(".hexagon", {
        opacity: 0,
        scale: 0.2,
        //rotation: 100,
        stagger: {
          amount: 1.5,
          from: "start",
        },
      })
      .from(".center-hexagon", {
        opacity: 0,
        scale: 0.5,
        rotation: 360,
        duration: 1.5, // Slightly longer duration for a smoother stop
        ease: "expo.out", // Smooth deceleration
      });
  }, []);
  return (
    <div className="relative -z-0 max-xx:w-[340px] w-[570px] h-[550px] mx-auto">
      {/* Center Hexagon */}
      <Image
        width={102}
        height={102}
        src="/logos/logoIcon.svg"
        alt="center hexagon"
        className="center-hexagon absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
      />

      {/* Top Left Hexagon */}
      <FlipCard
        className="hexagon top-0 left-[17%] max-xx:left-[25%]"
        imageUrl="/polygon1.svg"
        imageUrl2="/logos/21ctl-logo2.svg"
      />

      {/* Top Right Hexagon */}
      <FlipCard
        imageUrl="/polygon2.svg"
        className="hexagon top-0 right-[17%] max-xx:right-[25%]"
        title="Data Center"
        description="At 21st century tech we’re building bold digital asdfghjiuytrewsdfn"
        icon="/icons/database-setting.svg"
      />

      {/* Right Hexagon */}
      <FlipCard
        imageUrl="/polygon3.svg"
        className="hexagon top-[50%] right-0 -translate-y-1/2 max-xx:right-[2%]"
        title="Konet"
        description="At 21st century tech we’re building bold digital asdfghjiuytrewsdfn"
        icon="/icons/connect.svg"
      />

      {/* Bottom Right Hexagon */}
      <FlipCard
        imageUrl="/polygon4.svg"
        className="hexagon bottom-0 right-[17%] max-xx:right-[25%]"
        title="Payment"
        description="At 21st century tech we’re building bold digital asdfghjiuytrewsdfn"
        icon="/icons/credit-card-validation.svg"
      />

      {/* Bottom Left Hexagon */}
      <FlipCard
        imageUrl="/polygon5.svg"
        className="hexagon bottom-0 left-[17%] max-xx:left-[25%]"
        title="Power"
        description="At 21st century tech we’re building bold digital asdfghjiuytrewsdfn"
        icon="/icons/power-service.svg"
      />

      {/* Left Hexagon */}
      <FlipCard
        imageUrl="/polygon6.svg"
        className="hexagon top-[50%] left-0 -translate-y-1/2 max-xx:left-[2%]"
        title="Academy"
        description="At 21st century tech we’re building bold digital asdfghjiuytrewsdfn"
        icon="/icons/school-tie.svg"
      />
    </div>
  );
};

export default FlipCardsCont;
