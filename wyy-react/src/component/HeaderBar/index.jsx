import React from 'react'
import './style.css'
import {BsFillGearFill} from 'react-icons/bs';
import { FaSteam } from 'react-icons/fa'
import {FiMaximize} from 'react-icons/fi'
const HeaderBar = () => {
    return (
        <div id="header">
            <a href="/" id="logo">
                <FaSteam></FaSteam>
                网易云音乐
            </a>
            <div class="header__page">
                <a href="javascript;">&lt;</a>
                <a href="javascript;">&gt;</a>
            </div>
            <form class="header__search">
                <input type="text" placeholder="搜索音乐，视频，歌词，电台" />
                <button type="submit"></button>
            </form>
            <a href="/login">
                <img src="" alt="" />
            </a>
            <a href="javascript:;">
                未登录
            </a>
            <a href="javascript:;">
                开通VIP
            </a>
            <a href="javascript:;">

            </a>
            <a href="javascript:;" title="设置">
                <BsFillGearFill></BsFillGearFill>
            </a>
            <a href="javascript:;">
                <FiMaximize></FiMaximize>
            </a>
        </div>
    )
}


export default HeaderBar