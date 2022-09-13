import React, { FC, memo } from "react";
import SvgMale from "@img/male.svg";
import SvgFemale from "@img/famale.svg";

export const Male = ({ size = 0 }) => (
  <span
    className="inline-flex items-center justify-center rounded-full p-0.5"
    style={{
      backgroundColor: "#BCEFFB",
      width: size,
      height: size,
    }}
  >
    <img className="w-full h-full" src={SvgMale} alt="" />
  </span>
);

export const Female = ({ size = 0 }) => (
  <span
    className="inline-flex items-center justify-center rounded-full p-0.5"
    style={{
      backgroundColor: "#FBC9E4",
      width: size,
      height: size,
    }}
  >
    <img className="w-full h-full" src={SvgFemale} alt="" />
  </span>
);

interface iProps {
  gender: number;
  size?: number;
}

const Gender: FC<iProps> = ({ gender, ...props }) => {
  switch (gender) {
    case 1:
      return <Male {...props} />;
    case 2:
      return <Female {...props} />;
    default:
      return null;
  }
};

export default memo(Gender);
