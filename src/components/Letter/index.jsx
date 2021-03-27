import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMsgPrivateHistory } from '@/reducers/letter/actions';
import DomList from './List';
import DomMessage from './Message';

export default () => {
  const { showMsgPrivateHistory } = useSelector(({ letter }) => letter);
  const dispatch = useDispatch();

  useEffect(() => () => {
    dispatch(setMsgPrivateHistory({
      showMsgPrivateHistory: false,
    }));
  }, []);
  return (
    <div id="privateLetter" className="flex flex-col absolute z-40">
      {
        showMsgPrivateHistory
          ? <DomMessage />
          : <DomList />
      }
    </div>
  );
};
