import React from 'react'
import { BsMusicNoteBeamed} from 'react-icons/bs'
const Aside = () => {
    return (
        <div>
            <dl>
                <dt>推荐</dt>
                <dd>
                    <a href="javascript:;">
                        <BsMusicNoteBeamed></BsMusicNoteBeamed>
                        发现音乐
                        </a>
                </dd>
                <dd>
                    <a href="javascript:;">私人FM</a>
                </dd>
                <dd>
                    <a href="javascript:;">LOOK直播</a>
                </dd>
                <dd>
                    <a href="javascript:;">视频</a>
                </dd>
                <dd>
                    <a href="javascript:;">朋友</a>
                </dd>
            </dl>
            <dl>
                <dt>
                    我的音乐
                </dt>
                <dd>
                    <a href="javascript:;">本地音乐</a>
                </dd>
                <dd>
                    <a href="javascript:;">下载管理</a>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="javascript:;">
                        创建的歌单
                    </a>
                </dt>
                <dd>
                    <a href="javascript:;">我喜欢的音乐</a>
                </dd>
            </dl>
        </div>
    )
}


export default Aside