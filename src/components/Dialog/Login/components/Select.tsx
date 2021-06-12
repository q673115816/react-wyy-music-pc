import React, {memo, useContext, useState} from 'react';
import classNames from 'classnames';
import { IconCaretDown, IconDeviceMobile } from '@tabler/icons';
import { useSelector } from 'react-redux';
import { LoginContext } from '../index';

export default memo(() => {
  const { countriesCodeList } = useSelector(({ common }) => common);
  const {
    loginReducer: {
      countrycode,
    },
    loginDispatch,
  } = useContext(LoginContext);

  const [visibility, setVisibility] = useState(false);
  const handleChoose = (countrycode) => {
    loginDispatch({
      type: 'SET_SIGNIN_COUNTRYCODE',
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
                className={classNames('customOption flex w-full px-3 h-6', { on: item.code === countrycode })}
                onClick={() => handleChoose(item.code)}
              >
                <div className="flag w-8">
                  { }
                </div>
                <div className="zh">{item.zh}</div>
                <div className="code ml-auto">
                  {`+${item.code}`}
                </div>
              </button>
            )))
        }
      </div>
    </div>
  );
});
