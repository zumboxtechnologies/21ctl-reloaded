import Button from '@/components/Button';
import React, { ReactNode } from 'react';

const SmallGrayCard = ({
  button,
  title,
  subTitle,
  smallText,
  width,
}: {
  button?: string;
  title: string | ReactNode;
  subTitle?: string;
  smallText?: string;
  width?: string;
}) => {
  return (
    <div
      style={{ minWidth: width }}
      className="bg-dimGray min-h-[450px] flex items-end p-7"
    >
      <div className="space-y-5 max-w-[700px]">
        {button && (
          <Button
            cta={button}
            className="bg-cerise text-white"
            polycolor="bg-dimGray"
          />
        )}
        <h3>{title}</h3>
        <p>{subTitle}</p>
        <h5>{smallText}</h5>
      </div>
    </div>
  );
};

export default SmallGrayCard;
