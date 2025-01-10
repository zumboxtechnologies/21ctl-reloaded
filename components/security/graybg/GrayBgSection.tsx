import React, { ReactNode } from 'react';
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
  title: string | ReactNode;
  smallText?: string;
  container?: boolean;
  classname?: string;
  // flexItems?: "items-end" | "items-start" | "items-center"
  // flexJustify?: "justify-between" | "justify-start" | "justify-center" | "justify-end"
}) => {
  return (
    <div className={cn(container && 'myContainer')}>
      <div
        className={cn(
          'bg-dimGray min-h-[85vh] flex items-end p-6 mt-2 mb-8',
          classname
        )}
      >
        <div className="space-y-2 max-w-[700px]">
          {buttontext && (
            <Button
              cta={buttontext}
              className="bg-cerise text-white"
              polycolor="bg-dimGray"
            />
          )}
          {typeof title === 'string' ? <h2>{title}</h2> : title}
          <Button
            cta={smallText}
            className="bg-transparent p-0 hover:text-primaryGray transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default GrayBgSection;
