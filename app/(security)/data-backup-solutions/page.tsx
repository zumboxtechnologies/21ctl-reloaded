import GrayBgSection from '@/components/security/graybg/GrayBgSection';
import SecurityHero from '@/components/security/SecurityHero';
import Equal from '@/components/security/Equal';
import PolygonBox from '@/components/security/PolygonBox';
import React from 'react';
import Button from '@/components/Button';
import SmallGrayCard from '@/components/security/graybg/SmallGrayCard';
import FAQs from '@/components/FAQs';
import ContactUs from '@/components/ContactUs';
import SliderContainer from '@/components/security/slider-container';
const DataBackupSolutions = () => {
  return (
    <>
      <SecurityHero
        title={
          <>
            Data Backup <br className="hidden sm:block" /> Solutions
          </>
        }
        subTitle={
          <>
            Prepare for the unexpected with reliable data backup strategies
            designed for <br className="hidden sm:block" /> seamless recovery of
            critical information.
          </>
        }
      />
      <div className="myContainer">
        <Equal>
          <div>
            <h4 className="text-xl md:text-[24px] md:leading-[44.8px] text-primaryGray">
              Remember when 4G felt fast? That&apos;s like comparing a paper
              airplane to a rocket ship. Welcome to the realm where milliseconds
              matter and possibilities explode. Our 5G infrastructure isn&apos;t
              just an upgrade {'–'} it&apos;s a portal to tomorrow.
            </h4>
          </div>
          <div className="flex flex-col gap-10">
            <h2>
              Beyond Speed. <br /> Beyond Connection.
            </h2>
            <GrayBgSection title="" container={false} />
          </div>
        </Equal>
      </div>
      <GrayBgSection
        buttontext="Academy"
        title="We provide world-class services to the top 1000 companies in Nigeria and key residential areas."
        smallText="Start learning"
      />
      <SliderContainer />
      <div className="myContainer">
        <h2>
          We&apos;re here for you, from always-on customer support to thousands
          of integrations designed for every use case
        </h2>
        <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
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
      <div className="myContainer space-y-16">
        <div className="space-y-5">
          <h2>
            Take Control of Your Entire <br className="hidden sm:block" />{' '}
            Security Ecosystem
          </h2>
          <p>
            Empower your organization with specialized training programs
            designed <br className="hidden sm:block" /> to build expertise in
            defending against cyber threats
          </p>
        </div>

        <div className="space-y-10">
          {Array.from({ length: 4 }, (_, i) => (
            <PolygonBox
              key={i}
              classname="bg-white w-10 h-10"
              otherclasses="bg-dimGray min-h-[153px] flex items-center p-5"
            >
              <h3 className="">
                Schedule regular, <br />
                automated backups
              </h3>
            </PolygonBox>
          ))}
        </div>
      </div>
      <div className="myContainer space-y-16">
        <div className="space-y-5">
          <Button
            cta="Academy"
            className="bg-cerise-light text-white"
            polycolor="bg-white"
          />
          <h2>
            Everything you need to build <br className="hidden sm:block" />{' '}
            high-quality generative AI at
          </h2>
          <p>
            Empower your organization with specialized training programs
            designed <br className="hidden sm:block" /> to build expertise in
            defending against cyber threats
          </p>
        </div>

        <div className="gap-10 grid grid-cols-1 md:grid-cols-2">
          {Array.from({ length: 6 }, (_, i) => (
            <PolygonBox
              key={i}
              classname="bg-white w-10 h-10"
              otherclasses="bg-dimGray min-h-[216px] justify-center gap-5 flex flex-col p-5"
            >
              <h3 className="">
                Schedule regular, <br />
                automated backups
              </h3>
              <Button
                cta="Start learning"
                className="bg-transparent transition-all duration-300 p-0 hover:text-gray-700"
              />
            </PolygonBox>
          ))}
        </div>
      </div>
      <FAQs />
      <ContactUs />
    </>
  );
};

export default DataBackupSolutions;
