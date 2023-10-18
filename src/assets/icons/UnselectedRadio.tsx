import React from 'react';
import { SVGProps } from '../../helpers/types';

const UnSelectedRadio: React.FC<SVGProps> = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="9" fill="white" stroke="#1ECEF7" strokeWidth="2" />
    </svg>
  );
};

export default UnSelectedRadio;