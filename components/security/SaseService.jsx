'use client';
import saseservice  from '@/constants/saseservice';
import React, { useState } from 'react';
import Button from '../Button';
import GrayBgSection from './graybg/GrayBgSection';
import SmallGrayCard from './graybg/SmallGrayCard';

const SaseService = () => {
  const [active, setActive] = useState(saseservice[0]);

  return (
    <div className="myContainer">
      <h2 className="max-w-[650px]">
        Extend SASE to every part <br />of your Network
      </h2>
      <div className="myFlex gap-3 mt-6 flex-wrap">
        {saseservice.map((item, index) => (
          <Button
            cta={item}
            key={index}
            className={`hover:bg-cerise-light mb-6 hover:text-white ${
              active === item ? 'bg-cerise-light text-white' : 'bg-dimGray'
            }`}
            polycolor="bg-white"
            action={() => setActive(item)}
          />
        ))}
      </div>
      <SmallGrayCard
        title={<>
          Dectect advanced threats with AI-powered <br /> behaviour analysis, malware analysis, and <br /> sensitive data identification.
        </>}
      />
    </div>
  );
};

export default SaseService;
