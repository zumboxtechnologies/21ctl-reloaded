import React from 'react';
import { AccordionDemo } from './security/Accordion';
import { faqs } from '@/constants/FAQs';

const FAQs = () => {
  return (
    <div className="myContainer max-w-[900px] mx-auto">
      <div className="space-y-6">
        <div className="text-center text-primaryGray">
          <h2>Need Immediate Assistance?</h2>
          <p>Need to understand things quickly check out FAQs</p>
        </div>
        <div>
          <h5 className="">Frequenty Asked Question</h5>
          <AccordionDemo data={faqs} />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
