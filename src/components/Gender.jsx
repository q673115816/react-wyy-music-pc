import React from 'react';

const svgMale = require('@/assets/images/male.svg');
const svgFamale = require('@/assets/images/famale.svg');

export const DomMale = ({ size = 0 }) => (
  <span
    className="inline-flex items-center justify-center rounded-full p-0.5"
    style={{
      backgroundColor: '#BCEFFB',
      width: size,
      height: size,
    }}
  >
    <img className="w-full h-full" src={svgMale} alt="" />
  </span>
);

export const DomFamale = ({ size = 0 }) => (
  <span
    className="inline-flex items-center justify-center rounded-full p-0.5"
    style={{
      backgroundColor: '#FBC9E4',
      width: size,
      height: size,
    }}
  >
    <img className="w-full h-full" src={svgFamale} alt="" />
  </span>
);
