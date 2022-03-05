import React, { FC, memo } from "react";
import { EditHandler } from "../types";

const genders = ["保密", "男", "女"];

interface iProps {
  gender: number;
  handleEdit: EditHandler;
}

const Gender: FC<iProps> = ({ gender, handleEdit }) => {
  return (
    <div>
      {genders.map((char, index) => (
        <label htmlFor={char} key={char} className="gender">
          <input
            type="radio"
            className="hidden"
            name="gender"
            id={char}
            checked={gender === index}
            onChange={() => handleEdit("gender", index)}
          />
          <i className="ico flex-center" />
          <span>{char}</span>
        </label>
      ))}
    </div>
  );
};

export default memo(Gender);
