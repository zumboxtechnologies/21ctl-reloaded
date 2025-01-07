import React from 'react';
import Button from '../../Button';
import { cn } from '@/lib/utils';

const GrayBgSection = ({
  buttontext,
  title,
  smallText,
  container = true,
  classname,
}: {
  buttontext?: string;
  title: string;
  smallText?: string;
  container?: boolean;
  classname?: string;
}) => {
  return (
    <div className={cn(`mt-16 ${container && 'myContainer'}`, classname)}>
      <div className="bg-dimGray min-h-[85vh] flex items-end p-6">
        <div className="space-y-2 max-w-[700px]">
          {buttontext && (
            <Button
              cta={buttontext}
              className="bg-cerise text-white"
              polycolor="bg-dimGray"
            />
          )}
          <h2>{title}</h2>
          <h5>{smallText}</h5>
        </div>
      </div>
    </div>
  );
};

export default GrayBgSection;
