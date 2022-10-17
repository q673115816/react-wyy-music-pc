import React, { memo, useContext, useState } from "react";
import classNames from "classnames";
import style from "./select.module.scss";
import { IconCaretDown, IconDeviceMobile } from "@tabler/icons";
import { SET_SIGNIN_COUNTRYCODE, loginContext } from "../../Content";
import { useGetCountriesCodeListQuery } from "@/modules/services/account";

const Select = () => {
  const { data, isLoading } = useGetCountriesCodeListQuery();
  const countriesCodeList = data?.data || [];
  const {
    loginState: { countrycode },
    loginDispatch,
  } = useContext(loginContext);

  const [visibility, setVisibility] = useState(false);
  const handleChoose = (countrycode: string) => {
    loginDispatch({
      type: SET_SIGNIN_COUNTRYCODE,
      payload: { countrycode },
    });
  };
  return (
    <div className="relative">
      <button
        onClick={() => setVisibility(!visibility)}
        type="button"
        className={style.default}
      >
        <IconDeviceMobile size={20} stroke={1} className="absolute left-2" />
        {`+${countrycode}`}
        <IconCaretDown size={12} className="fill-current" />
      </button>
      <div
        className={classNames(
          style.optionGroup,
          "absolute top-full left-0 bg-white rounded-b overflow-auto border"
        )}
        style={{ display: visibility ? "" : "none" }}
      >
        {countriesCodeList.map(({ countryList }) =>
          countryList.map(({ zh, code }) => (
            <button
              key={zh}
              type="button"
              className={classNames(
                style.option,
                "flex w-full px-3 leading-6",
                {
                  on: code === countrycode,
                }
              )}
              onClick={() => handleChoose(code)}
            >
              <div className="flag w-8">{}</div>
              <div className="zh">{zh}</div>
              <div className="code ml-auto">{`+${code}`}</div>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default memo(Select);
