import React, { memo, useContext, useState } from "react";
import classNames from "classnames";
import { IconCaretDown, IconDeviceMobile } from "@tabler/icons";
import { SET_SIGNIN_COUNTRYCODE, LoginContext } from "../Content";
import { useGetCountriesCodeListQuery } from "@/modules/services/account";

const Select = () => {
  const { data, isLoading } = useGetCountriesCodeListQuery();
  const countriesCodeList = data?.data || [];
  const {
    loginReducer: { countrycode },
    loginDispatch,
  } = useContext(LoginContext);

  const [visibility, setVisibility] = useState(false);
  const handleChoose = (countrycode: string) => {
    loginDispatch({
      type: SET_SIGNIN_COUNTRYCODE,
      payload: { countrycode },
    });
  };
  return (
    <div className="customSelect">
      <button
        onClick={() => setVisibility(!visibility)}
        type="button"
        className="default"
      >
        <IconDeviceMobile size={24} stroke={0.5} className="ico" />+
        {countrycode}
        <div className="arrow">
          <IconCaretDown size={12} className="fill-current" />
        </div>
      </button>
      <div
        className="customOptionGroup"
        style={{ display: visibility ? "" : "none" }}
      >
        {countriesCodeList.map(({ countryList }) =>
          countryList.map(({ zh, code }) => (
            <button
              key={zh}
              type="button"
              className={classNames("customOption flex w-full px-3 h-6", {
                on: code === countrycode,
              })}
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
