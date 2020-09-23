import React from 'react'
import './style.css'
import {BsFillGearFill} from 'react-icons/bs';
import { FaSteam } from 'react-icons/fa'
import {FiMaximize} from 'react-icons/fi'
import { BiSearch } from 'react-icons/bi'
const HeaderBar = () => {
    return (
        <div id="header">
            <a href="/" id="logo">
                <FaSteam/>
                网易云音乐
            </a>
            <div className="header_page">
                <a href="#">&lt;</a>
                <a href="#">&gt;</a>
            </div>
            <form className="header_search">
                <input type="text" placeholder="搜索音乐，视频，歌词，电台"/>
                <button type="submit">
                    <BiSearch/>
                </button>
            </form>
            <a href="/login">
                <img src="" alt=""/>
            </a>
            <a href="#">
                未登录
            </a>
            <a href="#">
                开通VIP
            </a>
            <a href="#">

            </a>
            <a href="#" title="设置">
                <BsFillGearFill/>
            </a>
            <a href="#">
                <FiMaximize/>
            </a>
        </div>
    );
}


export default HeaderBar