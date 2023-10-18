import React from 'react';
import { SVGProps } from '../../helpers/types';

const Rectangle: React.FC<SVGProps> = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" fill="#D9D9D9" />
    </svg>
  );
};

export default Rectangle;
