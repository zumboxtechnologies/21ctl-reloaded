import React, { ReactNode } from 'react';

const Equal = ({ children }: { children: ReactNode }) => {
  return <div className="grid grid-col lg:grid-cols-2 gap-20">{children}</div>;
};

export default Equal;
