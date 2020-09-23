import React from 'react'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import './style.css'

const Aside = () => {
    return (
        <div id="aside">
            <dl className="aside_route_dl">
                <dt className="aside_route_dt">推荐</dt>
                <dd className="aside_route_dd">
                    <a href="#" className="aside_route on">
                        <BsMusicNoteBeamed/>
                        发现音乐
                    </a>
                </dd>
                <dd className="aside_route_dd">
                    <a href="#" className="aside_route">私人FM</a>
                </dd>
                <dd className="aside_route_dd">
                    <a href="#" className="aside_route">LOOK直播</a>
                </dd>
                <dd className="aside_route_dd">
                    <a href="#" className="aside_route">视频</a>
                </dd>
                <dd className="aside_route_dd">
                    <a href="#" className="aside_route">朋友</a>
                </dd>

            </dl>
        </div>
    )
}


export default Aside