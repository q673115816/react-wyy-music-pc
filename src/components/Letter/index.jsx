import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMsgPrivateHistory } from '@/reducers/letter/actions';
import DomList from './List';
import DomHistory from './History';

export default () => {
  const { showMsgPrivateHistory } = useSelector(({ letter }) => letter);
  const dispatch = useDispatch();

  useEffect(() => () => {
    dispatch(setMsgPrivateHistory({
      showMsgPrivateHistory: false,
    }));
  }, []);
  return (
    <div id="privateLetter" className="flex flex-col">
      {
        showMsgPrivateHistory
          ? <DomHistory />
          : <DomList />
      }
    </div>
  );
};
