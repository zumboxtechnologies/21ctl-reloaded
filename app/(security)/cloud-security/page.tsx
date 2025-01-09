import GrayBgSection from '@/components/security/graybg/GrayBgSection';
import SecurityHero from '@/components/security/SecurityHero';
import { AccordionDemo } from '@/components/security/Accordion';
import Equal from '@/components/security/Equal';
import PolygonBox from '@/components/security/PolygonBox';
import { info } from '@/constants/FAQs';
import React from 'react';
import Button from '@/components/Button';
import SmallGrayCard from '@/components/security/graybg/SmallGrayCard';
import FAQs from '@/components/FAQs';
import ContactUs from '@/components/ContactUs';
import { cloudSecurityProgress } from '@/constants/cloud-security-progress';
import { ProgressComponent } from '@/components/security/progress';

const CloudSecurity = () => {
  return (
    <>
      <SecurityHero
        title="Cloud Security"
        subTitle={
          <>
            Stay ahead of threats with innovative solutions designed to protect
            your
            <br className="hidden sm:block" />
            data and strengthen your digital infrastructure
          </>
        }
      />
      <GrayBgSection
        title="Delivering Complete Multi-Cloud Security Coverage Across Environments, Workloads, and Identities"
        smallText="Start learning"
      />
      <div className="myContainer">
        <Equal>
          <PolygonBox
            classname="bg-white w-10 h-10"
            otherclasses="bg-dimGray min-h-[500px]"
          ></PolygonBox>
          <div>
            <Button
              cta="Full Scale Remodel"
              className="bg-cerise-light text-white"
              polycolor="bg-white"
            />
            <h2 className="mt-3 mb-8">Extended Protection for Your Cloud</h2>
            <AccordionDemo data={info} />
          </div>
        </Equal>
      </div>
      <div className="myContainer">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-8">
          {/* First Grid Item */}
          <div className="lg:col-span-3 space-y-3">
            <h2>The Value Of Cloud Security</h2>
            <h4 className="text-2xl md:text-[24px] md:leading-[44.8px] text-primaryGray">
              Remember when 4G felt fast?
            </h4>
            <Button
              cta="Start learning"
              className="bg-transparent transition-all duration-300 p-0 hover:text-gray-700"
            />
          </div>

          {/* Second Grid Item */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {cloudSecurityProgress.map((progress, i) => (
                <ProgressComponent
                  key={i}
                  title={progress.title}
                  percent={progress.percent}
                  subText={progress.subText}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="myContainer">
        <Button
          cta="Full Scale Remodel"
          className="bg-cerise-light text-white"
          polycolor="bg-white"
        />
        <h2 className="mt-3 mb-8">
          Managed Network <br /> Security Services
        </h2>
        <GrayBgSection title="" container={false} />
      </div>

      <div className="myContainer">
        <h2 className="mt-3 mb-8 text-center">
          Take Control Of Your Entire Security Ecosystem
        </h2>
        <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {Array.from({ length: 3 }, (_, i) => (
            <SmallGrayCard
              key={i}
              title="Schedule regular, automated backups."
              subTitle="Ensure your backups remain current and functional with continuous monitoring and periodic testing."
              smallText="Get Demo"
            />
          ))}
        </div>
      </div>
      <div className="myContainer">
        <Equal>
          <div>
            <h2>
              Beyond Speed. <br /> Beyond Connection.
            </h2>
            <GrayBgSection title="" container={false} />
          </div>
          <div>
            <h4 className="text-2xl md:text-[24px] md:leading-[44.8px] text-primaryGray">
              Remember when 4G felt fast? That&apos;s like comparing a paper
              airplane to a rocket ship. Welcome to the realm where milliseconds
              matter and possibilities explode. Our 5G infrastructure isn&apos;t
              just an upgrade {'–'} it&apos;s a portal to tomorrow.
            </h4>
          </div>
        </Equal>
      </div>
      <FAQs />
      <ContactUs />
    </>
  );
};

export default CloudSecurity;
