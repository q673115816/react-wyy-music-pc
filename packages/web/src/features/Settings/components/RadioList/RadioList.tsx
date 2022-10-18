import React, { FC, memo } from "react";
import classNames from "classnames";
import style from "./radio.module.scss";

interface iSettingRadio<T = string> {
  list: T[];
  checked: string;
  name: string;
  handle?: (item: T) => void;
  row?: boolean;
}

const Radio: FC<iSettingRadio> = ({
  list = [],
  checked = "",
  name = "",
  handle = () => null,
  row = false,
}) => (
  <div className={classNames({ flex: row })}>
    {list.map((item) => (
      <div className={classNames("leading-loose", { "mr-6": row })} key={item}>
        <label className={classNames("flex items-center")} htmlFor={item}>
          <input
            className={classNames(style.input)}
            id={item}
            name={name}
            type="radio"
            checked={checked === item}
            onChange={() => handle(item)}
          />
          <i
            className={classNames(
              style.ico,
              "flex-center rounded-full w-4 h-4 text-transparent border"
            )}
          >
            <i className={`w-2.5 h-2.5 bg-current rounded-full`} />
          </i>
          <span className={"ml-2"}>{item}</span>
        </label>
      </div>
    ))}
  </div>
);

export default memo(Radio);
