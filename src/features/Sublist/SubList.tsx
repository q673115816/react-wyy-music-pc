import React, {createElement, memo} from 'react'
import Album from "./Album";
import Artist from "./Artist";
import MV from "./MV";
import Topic from "./Topic";
import {useParams} from "react-router-dom";

const config = {
  '专辑': Album,
  '歌手': Artist,
  '视频': MV,
  '专栏': Topic,
}

const SubList = () => {
  const {path = ''} = useParams()
  return createElement(config[path])
}

export default memo(SubList)
