import React, { FC, memo } from "react";
import classNames from "classnames";

interface iSettingRadio {
  list: string[];
  checked: string;
  name: string;
  handle?: () => void;
  row?: boolean;
}

const Radio: FC<iSettingRadio> = ({
  list = [],
  checked = "",
  name = "",
  handle = () => {},
  row = false,
}) => (
  <div className={classNames("domSetting_subBlock_content", { flex: row })}>
    {list.map((item) => (
      <div
        className={classNames("item leading-loose", { "mr-6": row })}
        key={item}
      >
        <label className="domSetting_radio flex items-center" htmlFor={item}>
          <input
            id={item}
            name={name}
            type="radio"
            checked={checked === item}
            onChange={() => handle(item)}
          />
          <i className="ico flex items-center justify-center mr-2" />
          <span>{item}</span>
        </label>
      </div>
    ))}
  </div>
);

export default memo(Radio);
