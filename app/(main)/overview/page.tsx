import Button from "@/components/Button";
import Polygon from "@/components/Polygon";
import React from "react";

const OverviewPage = () => {
  return (
    <main>
      <section className="!py-24">
        <div className="basis-[50%] space-y-4">
          <h1>Building Africa's Largest</h1>
          <div className="relative bg-primary w-fit py-2 px-8">
            <h1>Digital Infrastructure</h1>
            <Polygon className="size-10 bg-white" />
          </div>
          <p className="animate-text text-primaryGray tracking-wide">
            At 21st century tech we’re building bold digital infrastructure to
            solve today’s challenges and shape tomorrow’s industries.
          </p>
          <Button
            className="animate-button"
            cta="Get Started Now"
            polycolor="bg-white"
          />
        </div>
      </section>
    </main>
  );
};

export default OverviewPage;
