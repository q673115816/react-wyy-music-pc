import React, { FC, memo } from "react";
import { EditHandler } from "../types";
import style from "./Gender.module.scss";
import classNames from "classnames";
const genders = ["保密", "男", "女"];

interface iProps {
  gender: number;
  handleEdit: EditHandler;
}

const Gender: FC<iProps> = ({ gender, handleEdit }) => {
  return (
    <div className={`flex gap-4`}>
      {genders.map((char, index) => (
        <label htmlFor={char} key={char} className={style.gender}>
          <input
            type="radio"
            className="hidden"
            name="gender"
            id={char}
            checked={gender === index}
            onChange={() => handleEdit("gender", index)}
          />
          <i
            className={classNames(
              style.ico,
              "relative rounded-full flex-center"
            )}
          />
          <span>{char}</span>
        </label>
      ))}
    </div>
  );
};

export default memo(Gender);
