import React from 'react';

const Symbols = () => {
  // convenient connection of svg to the project
  return (
    <svg
      aria-hidden="true"
      className="svg_fix-height"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <symbol id="attention" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_85_3094)">
          <path d="M12 12L12 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M17.9896 18.7162C12.6655 24.0403 11.534 24.2399 5.63604 18.3419C-0.261933 12.4439 -0.0689104 11.3189 5.63604 5.61396C11.341 -0.0909886 12.2564 -0.49359 18.364 5.61396C24.4715 11.7215 24.2619 12.4439 17.9896 18.7162Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16C12.2761 16 12.5 15.7761 12.5 15.5C12.5 15.2239 12.2761 15 12 15C11.7239 15 11.5 15.2239 11.5 15.5C11.5 15.7761 11.7239 16 12 16Z"
            fill="black"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_85_3094">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </symbol>

      <symbol id="checkMark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 10L12 14L23 3M16.5 3.06729C15.1474 2.38456 13.6186 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.5767 21.9737 11.1595 21.9226 10.75"
          stroke="black"
          strokeWidth="2"
        />
      </symbol>

      <symbol id="plus" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3V21M21 12L3 12" stroke="black" strokeWidth="2" />
      </symbol>
    </svg>
  );
};

export default Symbols;
