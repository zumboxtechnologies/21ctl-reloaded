import Button from '@/components/Button';
import ContactUs from '@/components/ContactUs';
import FAQs from '@/components/FAQs';
import { AccordionDemo } from '@/components/security/Accordion';
import Equal from '@/components/security/Equal';
import GrayBgSection from '@/components/security/graybg/GrayBgSection';
import SmallGrayCard from '@/components/security/graybg/SmallGrayCard';
import PolygonBox from '@/components/security/PolygonBox';
import SecurityHero from '@/components/security/SecurityHero';
import Service from '@/components/security/Service';
import { info } from '@/constants/FAQs';
import React from 'react';

const Security = () => {
  return (
    <div>
      <SecurityHero
        title="Resist. Defend. Empower"
        lightbgTitle="Security Solutions"
        subTitle="Stay ahead of cyber threats with innovative solutions designed to protect your data and strengthen your digital infrastructure."
        buttontext="Explore Our Capabilities"
      />

      <GrayBgSection
        buttontext="Academy"
        title="We provide world-class services to the top 1000 companies in Nigeria and key residential areas."
        smallText="Start Learning"
      />

      <Service />

      <div className="myContainer">
        <Equal>
          <div>
            <Button
              cta="Full Scale Remodel"
              className="bg-cerise-light text-white"
              polycolor="bg-white"
            />
            <h2 className="mt-3 mb-8">Managed Network Security Services</h2>
            <AccordionDemo data={info} />
          </div>
          <PolygonBox
            classname="bg-white w-10 h-10"
            otherclasses="bg-dimGray min-h-[500px]"
          ></PolygonBox>
        </Equal>
      </div>

      <div className="myContainer">
        <Equal>
          <div>
            <h2 className="mt-3 mb-8">
              Proven Excellence Backed by Experience and Results
            </h2>
            <div className="flex flex-wrap gap-10">
              <div className="text-center">
                <h1>20k</h1>
                <p>Company Stat 1</p>
              </div>
              <div className="text-center">
                <h1>15k</h1>
                <p>Company Stat 1</p>
              </div>
              <div className="text-center">
                <h1>10k</h1>
                <p>Company Stat 1</p>
              </div>
            </div>
          </div>
          <PolygonBox
            classname="bg-white w-10 h-10"
            otherclasses="bg-dimGray min-h-[400px]"
          ></PolygonBox>
        </Equal>
      </div>

      <GrayBgSection
        buttontext="Academy"
        title="We provide world-class services to the top 1000 companies in Nigeria and key residential areas."
        smallText="Start Learning"
      />

      <div className="myContainer">
        <Button
          cta="Full Scale Remodel"
          className="bg-cerise-light text-white"
          polycolor="bg-white"
        />
        <h2 className="mt-3 mb-8">Managed Network Security Services</h2>
        <Equal>
          <SmallGrayCard
            button="Academy"
            title="Schedule regular, automated backups."
            smallText="Learn More"
          />
          <SmallGrayCard
            button="Academy"
            title="Schedule regular, automated backups."
            smallText="Learn More"
          />
        </Equal>
      </div>

      <FAQs />

      <ContactUs />
    </div>
  );
};

export default Security;
