import React from 'react'
import {NavLink} from 'react-router-dom'


export default () => {
    return (
        <>
            <div className="domhome_newest_sub_nav">
                <NavLink className="domhome_newest_sub_nav_link" activeClassName="on" to="/home/newest/album/0">全部</NavLink>
                <NavLink className="domhome_newest_sub_nav_link" activeClassName="on" to="/home/newest/album/7">华语</NavLink>
                <NavLink className="domhome_newest_sub_nav_link" activeClassName="on" to="/home/newest/album/96">欧美</NavLink>
                <NavLink className="domhome_newest_sub_nav_link" activeClassName="on" to="/home/newest/album/16">韩国</NavLink>
                <NavLink className="domhome_newest_sub_nav_link" activeClassName="on" to="/home/newest/album/8">日本</NavLink>
            </div>
            <div className="domhome_newest_album_list">
                <div className="sign">本周<br/>新碟</div>
                
            </div>
        </>
    )
}