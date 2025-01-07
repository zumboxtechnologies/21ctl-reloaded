'use client';
import { service, serviceFilter } from '@/constants/security-services';
import React, { useState } from 'react';
import Button from '../Button';
import SmallGrayCard from './graybg/SmallGrayCard';

const Service = () => {
  const [active, setActive] = useState<string>(serviceFilter[0]);

  return (
    <div className="myContainer">
      <h2 className="max-w-[650px]">
        Everything you need to build high-quality generative AI at scale
      </h2>
      <div className="myFlex gap-3 mt-6 flex-wrap">
        {serviceFilter.map((item, index) => (
          <Button
            cta={item}
            key={index}
            className={`hover:bg-cerise-light hover:text-white ${
              active === item ? 'bg-cerise-light text-white' : 'bg-dimGray'
            }`}
            polycolor="bg-white"
            action={() => setActive(item)}
          />
        ))}
      </div>
      <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {service.map((item, index) => (
          <SmallGrayCard button={item.button} title={item.title} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Service;
