import React from 'react';
import { SVGProps } from '../../helpers/types';

const CloseIcon: React.FC<SVGProps> = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.3853 0.614703C16.9916 0.221109 16.4577 0 15.901 0C15.3442 0 14.8103 0.221109 14.4166 0.614703L8.98733 6.04399L3.55804 0.614703C3.16207 0.232264 2.63173 0.0206468 2.08125 0.0254304C1.53077 0.0302139 1.00419 0.251015 0.614927 0.640278C0.225664 1.02954 0.00486289 1.55612 7.93664e-05 2.1066C-0.00470416 2.65708 0.206913 3.18742 0.589352 3.58339L6.01864 9.01268L0.589352 14.442C0.206913 14.8379 -0.00470416 15.3683 7.93664e-05 15.9187C0.00486289 16.4692 0.225664 16.9958 0.614927 17.3851C1.00419 17.7743 1.53077 17.9951 2.08125 17.9999C2.63173 18.0047 3.16207 17.7931 3.55804 17.4106L8.98733 11.9814L14.4166 17.4106C14.8126 17.7931 15.3429 18.0047 15.8934 17.9999C16.4439 17.9951 16.9705 17.7743 17.3597 17.3851C17.749 16.9958 17.9698 16.4692 17.9746 15.9187C17.9794 15.3683 17.7677 14.8379 17.3853 14.442L11.956 9.01268L17.3853 3.58339C17.7789 3.18967 18 2.65575 18 2.09904C18 1.54233 17.7789 1.00842 17.3853 0.614703Z"
        fill="#515561"
      />
    </svg>
  );
};

export default CloseIcon;
