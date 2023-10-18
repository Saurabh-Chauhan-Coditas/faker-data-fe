import React from 'react';
import { SVGProps } from '../../helpers/types';

const ChevronLeft: React.FC<SVGProps> = () => {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.29463 1.7573C7.62074 1.43254 7.62183 0.904905 7.29707 0.578795C6.97231 0.252685 6.44467 0.251593 6.11856 0.576355L0.578307 6.09372C0.421271 6.25011 0.332999 6.4626 0.333008 6.68423C0.333017 6.90585 0.421307 7.11834 0.578356 7.27472L6.11861 12.7912C6.44475 13.1159 6.97238 13.1148 7.29712 12.7886C7.62186 12.4625 7.62072 11.9349 7.29458 11.6101L3.39148 7.72379H10.5943L18.1995 7.72379C18.6598 7.72379 19.0329 7.35069 19.0329 6.89045C19.0329 6.43021 18.6598 6.05712 18.1995 6.05712L10.5943 6.05712H2.97698L7.29463 1.7573Z"
        fill="#3A3939"
      />
    </svg>
  );
};

export default ChevronLeft;