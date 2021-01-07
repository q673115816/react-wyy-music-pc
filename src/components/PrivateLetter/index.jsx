import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMsgPrivateHistory } from '@/redux/actions';
import DomList from './List';
import DomHistory from './History';

export default () => {
  const { showMsgPrivateHistory } = useSelector(({ privateletter }) => privateletter);
  const dispatch = useDispatch();
  useEffect(() => () => {
    dispatch(setMsgPrivateHistory({
      showMsgPrivateHistory: false,
    }));
  }, []);
  return (
    <div id="privateLetter">
      {
        showMsgPrivateHistory
          ? (
            <DomHistory />
          )
          : (
            <DomList />
          )
      }
    </div>
  );
};
