import React from 'react';
import { useSelector } from 'react-redux';
import Router from '@/Router';
import Playlist from '@/components/Playlist';
import PrivateLetter from '@/components/PrivateLetter';
import DomLeft from './Left';

const handlePopSwitch = (popupStatus) => {
  switch (popupStatus) {
    case 'playlist':
      return <Playlist />;
    case 'privateLetter':
      return <PrivateLetter />;
    default:
      return '';
  }
};
export default () => {
  const { popupStatus } = useSelector(({ common }) => common);
  return (
    <div className="dommain">
      <DomLeft />
      <div className="dommain_split" />
      <div className="dommain_right">
        <Router />
      </div>
      {handlePopSwitch(popupStatus)}
    </div>
  );
};
