import React from 'react';
import { SVGProps } from '../../helpers/types';

const RadioCheckedDisabled: React.FC<SVGProps> = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="#FCFCFC" />
      <circle cx="8" cy="8" r="3" fill="#E2E2E2" />
      <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#E2E2E2" />
    </svg>
  );
};

export default RadioCheckedDisabled;
