import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { IconCaretDown, IconDeviceMobile } from '@tabler/icons';
import { useSelector } from 'react-redux';
import { LoginContext } from '../index';

export default () => {
  const { countriesCodeList } = useSelector(({ common }) => common);
  const {
    loginReducer: {
      countrycode,
    },
    loginDispatch,
  } = useContext(LoginContext);

  const [visibility, setVisibility] = useState(false);
  const handleChoose = (code) => {
    loginDispatch({
      type: 'SET_SIGNIN_COUNTRYCODE',
      payload: { countrycode: code },
    });
  };
  return (
    <div className="customSelect">
      <button
        onClick={() => setVisibility(!visibility)}
        type="button"
        className="default"
      >
        <IconDeviceMobile size={24} stroke={0.5} className="ico" />
        +
        {countrycode}
        <div className="arrow">
          <IconCaretDown size={12} className="fill-current" />
        </div>
      </button>
      <div className="customOptionGroup" style={{ display: visibility ? null : 'none' }}>
        {
          countriesCodeList
            .map(({ countryList }) => countryList.map((item) => (
              <button
                key={item.zh}
                type="button"
                className={classNames('customOption', { on: item.code === countrycode })}
                onClick={() => handleChoose(item.code)}
              >
                <span className="flag">
                  { }
                </span>
                <span className="zh">{item.zh}</span>
                <span className="code">
                  +
                  {item.code}
                </span>
              </button>
            )))
        }
      </div>
    </div>
  );
};
