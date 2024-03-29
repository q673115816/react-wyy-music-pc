import React, { FC } from "react";

interface iProps {
  size?: number;
}

export const Left: FC<iProps> = ({ size = 50 }) => (
  <svg viewBox="0 0 1024 1024" width={size} height={size}>
    <path
      d="M670.978 808.954c-5.3 0-10.597-2.045-14.604-6.126L368.69 509.868c-7.818-7.962-7.818-20.718 0-28.68l287.684-292.96c7.92-8.066 20.878-8.182 28.942-.263 8.066 7.92 8.183 20.877.264 28.942l-273.603 278.62 273.603 278.62c7.919 8.065 7.802 21.023-.264 28.943a20.399 20.399 0 0 1-14.338 5.864z"
      fill="#fff"
    />
  </svg>
);

export const Right: FC<iProps> = ({ size = 50 }) => (
  <svg viewBox="0 0 1024 1024" width={size} height={size}>
    <path
      d="M383.292 808.954a20.401 20.401 0 0 1-14.339-5.862c-8.065-7.92-8.182-20.878-.263-28.942l273.602-278.621L368.69 216.907c-7.92-8.065-7.802-21.023.263-28.942 8.066-7.918 21.023-7.803 28.942.263l287.685 292.96c7.818 7.962 7.818 20.718 0 28.68L397.895 802.826a20.404 20.404 0 0 1-14.603 6.127z"
      fill="#fff"
    />
  </svg>
);

export default {
  Left,
  Right,
};
