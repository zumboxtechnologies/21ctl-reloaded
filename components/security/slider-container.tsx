'use client';

import React, { useState } from 'react';
import Equal from '@/components/security/Equal';
import Button from '@/components/Button';
import SmallGrayCard from '@/components/security/graybg/SmallGrayCard';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SliderContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardWidth = 400; // Adjust the width based on the actual size of SmallGrayCard components

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < 3 ? prev + 1 : 3)); // Assuming there are 3 cards
  };

  return (
    <div className="myContainer overflow-x-hidden">
      <Equal>
        <div>
          <h2>
            Beyond Speed. <br /> Beyond Connection.
          </h2>
          <div className="flex space-x-10 mt-5">
            <Button
              className={cn(
                'bg-cerise-lighter text-white transform px-6 py-9 -scale-x-100',
                currentSlide == 0 && 'bg-gray-400/60'
              )}
              polycolor="bg-white"
              cta={
                <ChevronRight
                  className={cn(
                    'text-cerise w-10 h-10',
                    currentSlide == 0 && ' text-gray-100'
                  )}
                />
              }
              action={handlePrev}
            />
            <Button
              className={cn(
                'bg-cerise-lighter text-white transform px-6 py-9',
                currentSlide == 3 && 'bg-gray-400/60'
              )}
              polycolor="bg-white"
              cta={
                <ChevronRight
                  className={cn(
                    'text-cerise w-10 h-10',
                    currentSlide == 3 && ' text-gray-100'
                  )}
                />
              }
              action={handleNext}
            />
          </div>
        </div>
        <div className="space-y-5 w-full max-w-full overflow-hidden">
          <h4 className="text-lg sm:text-xl md:text-2xl md:leading-snug text-primaryGray">
            Remember when 4G felt fast? That&apos;s like comparing a paper
            airplane to a rocket ship.
          </h4>
          <div className="overflow-hidden">
            <div
              className="flex gap-5 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * cardWidth}px)`,
              }}
            >
              {Array.from({ length: 4 }, (_, i) => (
                <SmallGrayCard
                  key={i}
                  width="400px"
                  button="Academy"
                  title={
                    <>
                      Schedule regular, <br />
                      automated backups
                    </>
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </Equal>
    </div>
  );
};

export default SliderContainer;
