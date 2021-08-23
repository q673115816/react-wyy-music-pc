import React, { useEffect } from 'react';
import { setMsgPrivateHistory } from '@/reducers/letter/slice';
import DomList from './List';
import DomMessage from './Message';
import './style.scss';
import {useAppDispatch, useAppSelector} from "@/reducers/hooks";

export default () => {
  const { showMsgPrivateHistory } = useAppSelector(({ letter }) => letter);
  const { popupStatus } = useAppSelector(({ mask }) => mask);
  const dispatch = useAppDispatch();

  useEffect(() => () => {
    dispatch(setMsgPrivateHistory({
      showMsgPrivateHistory: false,
    }));
  }, []);
  if (popupStatus !== 'letter') return null;
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
