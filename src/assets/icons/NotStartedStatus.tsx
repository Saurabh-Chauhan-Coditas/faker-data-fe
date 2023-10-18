import React from 'react';
import { SVGProps } from '../../helpers/types';

const NotStarted: React.FC<SVGProps> = () => {
  return (
    <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Icon">
        <path
          id="Vector"
          d="M23.7917 12.9999C23.7917 13.2274 23.7013 13.4455 23.5405 13.6064C23.3797 13.7672 23.1615 13.8576 22.9341 13.8576C22.7066 13.8576 22.4885 13.7672 22.3276 13.6064C22.1668 13.4455 22.0764 13.2274 22.0764 12.9999C22.0739 10.7261 21.1695 8.5461 19.5617 6.93825C17.9539 5.33041 15.7739 4.42603 13.5 4.42353C13.2726 4.42353 13.0544 4.33317 12.8936 4.17233C12.7328 4.01149 12.6424 3.79335 12.6424 3.56589C12.6424 3.33843 12.7328 3.12029 12.8936 2.95945C13.0544 2.79861 13.2726 2.70825 13.5 2.70825C16.2287 2.7112 18.8447 3.79645 20.7741 5.72587C22.7035 7.65529 23.7888 10.2713 23.7917 12.9999ZM16.9306 13.8576C17.1581 13.8576 17.3762 13.7672 17.537 13.6064C17.6979 13.4455 17.7882 13.2274 17.7882 12.9999C17.7882 12.7725 17.6979 12.5543 17.537 12.3935C17.3762 12.2326 17.1581 12.1423 16.9306 12.1423H14.9778C14.8283 11.8854 14.6146 11.6717 14.3577 11.5222V8.71172C14.3577 8.48426 14.2673 8.26612 14.1065 8.10528C13.9456 7.94444 13.7275 7.85408 13.5 7.85408C13.2726 7.85408 13.0544 7.94444 12.8936 8.10528C12.7328 8.26612 12.6424 8.48426 12.6424 8.71172V11.5222C12.4149 11.6532 12.2207 11.8348 12.0746 12.0529C11.9286 12.271 11.8348 12.5198 11.8004 12.78C11.766 13.0402 11.7919 13.3049 11.8762 13.5535C11.9605 13.802 12.1009 14.0279 12.2865 14.2135C12.4721 14.3991 12.6979 14.5395 12.9465 14.6238C13.1951 14.7081 13.4597 14.734 13.7199 14.6996C13.9802 14.6652 14.229 14.5713 14.4471 14.4253C14.6652 14.2793 14.8468 14.085 14.9778 13.8576H16.9306ZM4.77528 8.52647C4.60566 8.52647 4.43984 8.57677 4.2988 8.67101C4.15776 8.76525 4.04784 8.8992 3.98293 9.05591C3.91801 9.21262 3.90103 9.38506 3.93412 9.55143C3.96721 9.7178 4.0489 9.87061 4.16884 9.99056C4.28878 10.1105 4.4416 10.1922 4.60796 10.2253C4.77433 10.2584 4.94677 10.2414 5.10348 10.1765C5.2602 10.1116 5.39414 10.0016 5.48838 9.86059C5.58262 9.71955 5.63292 9.55374 5.63292 9.38411C5.63292 9.15665 5.54256 8.93851 5.38172 8.77767C5.22088 8.61683 5.00274 8.52647 4.77528 8.52647ZM4.92365 12.9999C4.92365 12.8303 4.87335 12.6645 4.77911 12.5234C4.68488 12.3824 4.55093 12.2725 4.39422 12.2076C4.2375 12.1427 4.06506 12.1257 3.8987 12.1588C3.73233 12.1919 3.57951 12.2735 3.45957 12.3935C3.33963 12.5134 3.25795 12.6662 3.22485 12.8326C3.19176 12.999 3.20875 13.1714 3.27366 13.3281C3.33857 13.4848 3.4485 13.6188 3.58953 13.713C3.73057 13.8073 3.89639 13.8576 4.06601 13.8576C4.29347 13.8576 4.51162 13.7672 4.67246 13.6064C4.83329 13.4455 4.92365 13.2274 4.92365 12.9999ZM13.5 21.5763C13.3304 21.5763 13.1646 21.6266 13.0236 21.7208C12.8825 21.8151 12.7726 21.949 12.7077 22.1057C12.6428 22.2625 12.6258 22.4349 12.6589 22.6013C12.692 22.7676 12.7737 22.9204 12.8936 23.0404C13.0135 23.1603 13.1664 23.242 13.3327 23.2751C13.4991 23.3082 13.6715 23.2912 13.8282 23.2263C13.985 23.1614 14.1189 23.0515 14.2131 22.9104C14.3074 22.7694 14.3577 22.6036 14.3577 22.4339C14.3577 22.2065 14.2673 21.9883 14.1065 21.8275C13.9456 21.6667 13.7275 21.5763 13.5 21.5763ZM6.82847 5.4587C6.65884 5.4587 6.49303 5.509 6.35199 5.60324C6.21095 5.69748 6.10103 5.83142 6.03611 5.98813C5.9712 6.14485 5.95422 6.31729 5.98731 6.48366C6.0204 6.65002 6.10208 6.80284 6.22203 6.92278C6.34197 7.04272 6.49479 7.12441 6.66115 7.1575C6.82752 7.19059 6.99996 7.17361 7.15667 7.10869C7.31339 7.04378 7.44733 6.93386 7.54157 6.79282C7.63581 6.65178 7.68611 6.48596 7.68611 6.31634C7.68611 6.08888 7.59575 5.87073 7.43491 5.7099C7.27407 5.54906 7.05593 5.4587 6.82847 5.4587ZM9.87995 3.42953C9.71032 3.42953 9.54451 3.47983 9.40347 3.57406C9.26243 3.6683 9.1525 3.80225 9.08759 3.95896C9.02268 4.11567 9.0057 4.28812 9.03879 4.45448C9.07188 4.62085 9.15356 4.77366 9.2735 4.89361C9.39345 5.01355 9.54626 5.09523 9.71263 5.12832C9.879 5.16142 10.0514 5.14443 10.2082 5.07952C10.3649 5.01461 10.4988 4.90468 10.593 4.76364C10.6873 4.62261 10.7376 4.45679 10.7376 4.28717C10.7376 4.05971 10.6472 3.84156 10.4864 3.68072C10.3256 3.51988 10.1074 3.42953 9.87995 3.42953ZM4.77528 15.7581C4.60566 15.7581 4.43984 15.8084 4.2988 15.9026C4.15776 15.9969 4.04784 16.1308 3.98293 16.2875C3.91801 16.4442 3.90103 16.6167 3.93412 16.783C3.96721 16.9494 4.0489 17.1022 4.16884 17.2222C4.28878 17.3421 4.4416 17.4238 4.60796 17.4569C4.77433 17.49 4.94677 17.473 5.10348 17.4081C5.2602 17.3432 5.39414 17.2332 5.48838 17.0922C5.58262 16.9512 5.63292 16.7853 5.63292 16.6157C5.63292 16.3883 5.54256 16.1701 5.38172 16.0093C5.22088 15.8484 5.00274 15.7581 4.77528 15.7581ZM6.82847 18.8259C6.65884 18.8259 6.49303 18.8762 6.35199 18.9704C6.21095 19.0646 6.10103 19.1986 6.03611 19.3553C5.9712 19.512 5.95422 19.6844 5.98731 19.8508C6.0204 20.0172 6.10208 20.17 6.22203 20.2899C6.34197 20.4099 6.49479 20.4916 6.66115 20.5247C6.82752 20.5577 6.99996 20.5408 7.15667 20.4759C7.31339 20.4109 7.44733 20.301 7.54157 20.16C7.63581 20.0189 7.68611 19.8531 7.68611 19.6835C7.68611 19.456 7.59575 19.2379 7.43491 19.0771C7.27407 18.9162 7.05593 18.8259 6.82847 18.8259ZM9.87995 20.855C9.71032 20.855 9.54451 20.9053 9.40347 20.9996C9.26243 21.0938 9.1525 21.2278 9.08759 21.3845C9.02268 21.5412 9.0057 21.7136 9.03879 21.88C9.07188 22.0464 9.15356 22.1992 9.2735 22.3191C9.39345 22.4391 9.54626 22.5207 9.71263 22.5538C9.879 22.5869 10.0514 22.5699 10.2082 22.505C10.3649 22.4401 10.4988 22.3302 10.593 22.1891C10.6873 22.0481 10.7376 21.8823 10.7376 21.7127C10.7376 21.4852 10.6472 21.2671 10.4864 21.1062C10.3256 20.9454 10.1074 20.855 9.87995 20.855ZM22.2248 15.7581C22.0552 15.7581 21.8894 15.8084 21.7483 15.9026C21.6073 15.9969 21.4974 16.1308 21.4324 16.2875C21.3675 16.4442 21.3505 16.6167 21.3836 16.783C21.4167 16.9494 21.4984 17.1022 21.6184 17.2222C21.7383 17.3421 21.8911 17.4238 22.0575 17.4569C22.2238 17.49 22.3963 17.473 22.553 17.4081C22.7097 17.3432 22.8437 17.2332 22.9379 17.0922C23.0321 16.9512 23.0824 16.7853 23.0824 16.6157C23.0824 16.3883 22.9921 16.1701 22.8312 16.0093C22.6704 15.8484 22.4523 15.7581 22.2248 15.7581ZM20.1716 18.8259C20.002 18.8259 19.8362 18.8762 19.6951 18.9704C19.5541 19.0646 19.4442 19.1986 19.3793 19.3553C19.3143 19.512 19.2974 19.6844 19.3305 19.8508C19.3635 20.0172 19.4452 20.17 19.5652 20.2899C19.6851 20.4099 19.8379 20.4916 20.0043 20.5247C20.1707 20.5577 20.3431 20.5408 20.4998 20.4759C20.6565 20.4109 20.7905 20.301 20.8847 20.16C20.979 20.0189 21.0293 19.8531 21.0293 19.6835C21.0293 19.456 20.9389 19.2379 20.7781 19.0771C20.6172 18.9162 20.3991 18.8259 20.1716 18.8259ZM17.1201 20.855C16.9505 20.855 16.7847 20.9053 16.6437 20.9996C16.5026 21.0938 16.3927 21.2278 16.3278 21.3845C16.2629 21.5412 16.2459 21.7136 16.279 21.88C16.3121 22.0464 16.3937 22.1992 16.5137 22.3191C16.6336 22.4391 16.7865 22.5207 16.9528 22.5538C17.1192 22.5869 17.2916 22.5699 17.4483 22.505C17.6051 22.4401 17.739 22.3302 17.8332 22.1891C17.9275 22.0481 17.9778 21.8823 17.9778 21.7127C17.9778 21.4852 17.8874 21.2671 17.7266 21.1062C17.5657 20.9454 17.3476 20.855 17.1201 20.855Z"
          fill="#1ECEF7"
        />
      </g>
    </svg>
  );
};

export default NotStarted;
