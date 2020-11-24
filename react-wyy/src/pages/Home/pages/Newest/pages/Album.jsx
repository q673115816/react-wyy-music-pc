import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { top_album } from '@/api'
import { gettopalbum } from '@/redux/actions'
export default () => {
    const dispatch = useDispatch()
    const { monthData, weekData } = useSelector(({ home }) => home.newest)
    console.log(monthData, weekData)
    const [area, setArea] = useState('ALL')
    const [type, setType] = useState('new')
    const [year, setYear] = useState(new Date().getFullYear())
    const [month, setMonth] = useState(new Date().getMonth())
    const handleGetData = async () => {
        try {
            const { monthData, weekData } = await top_album({
                area,
                type
            })
            dispatch(gettopalbum({ monthData, weekData }))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleGetData()
    }, [area, type])
    return (
        <>
            <div className="domhome_newest_sub_nav">
                <span className="domhome_newest_sub_nav_link">全部</span>
                <span className="domhome_newest_sub_nav_link">华语</span>
                <span className="domhome_newest_sub_nav_link">欧美</span>
                <span className="domhome_newest_sub_nav_link">韩国</span>
                <span className="domhome_newest_sub_nav_link">日本</span>
            </div>
            <div className="domhome_newest_album_list">
                <div className="sign">本周<br />新碟</div>
                <div className="domhome_newest_album_weeklist">
                    {weekData.map((item) => (
                        <div className="item" key={item.id}>
                            <div className="cover">
                                <Link>
                                    <img className="containimg" src={`${item.blurPicUrl}?param=200y200`} alt="" />
                                </Link>
                            </div>
                            <div>
                                <Link>{item.name}</Link>
                            </div>
                            <div>
                                {item.artists.map(artist => (
                                    <Link to="/artist" key={artist.id}>{artist.name}</Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}