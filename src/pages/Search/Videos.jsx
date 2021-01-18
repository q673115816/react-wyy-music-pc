import React from 'react';
import Lazyload from 'react-lazyload';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { transPlayCount } from '@/common/utils';

const type = {
  0: 'mv',
  1: 'video',
};

export default ({ videos = [] }) => (
  <div className="videos_list">
    <div className="ui_grid rectangle_width col_3">
      {
        videos.map((item) => (
          <div className="item" key={item.id}>
            <div className="cover">
              <div className="inner">
                <Link to={`/player/${type[item.type]}/${item.vid}`}>
                  <Lazyload overflow>
                    <img className="containimg" src={item.coverUrl} alt="" />
                  </Lazyload>
                  <div className="rt whitetext">
                    {transPlayCount(item.playTime)}
                  </div>
                  <div className="rb whitetext">
                    {dayjs(item.durationms).format('mm:ss')}
                  </div>
                </Link>
              </div>
            </div>
            <div className="footer text-overflow">
              <Link to={`/player/${type[item.type]}/${item.vid}`}>
                {item.type === 0
                  && (
                  <svg viewBox="0 0 1024 1024" width="24" height="24" fill="currentColor" style={{ color: 'var(--baseRed)', verticalAlign: 'top', marginRight: '0.2em' }}>
                    <path d="M908.334954 269.29202c40.090849 0 72.706997 32.616148 72.706997 72.706997v340.999992c0 40.090849-32.616148 72.706997-72.706997 72.706997H116.783953c-40.090849 0-72.706997-32.616148-72.706997-72.706997V341.999017c0-40.090849 32.616148-72.706997 72.706997-72.706997h791.551001m0-40.96H116.783953c-62.776695 0-113.666997 50.890302-113.666997 113.666997v340.999992c0 62.776695 50.890302 113.666997 113.666997 113.666997h791.552c62.776695 0 113.666997-50.890302 113.666997-113.666997V341.999017c-0.000999-62.775696-50.891301-113.666997-113.667996-113.666997z" />
                    <path d="M469.485518 690.207969V454.79886c0-19.42503 1.165861-42.750252 3.44064-69.987652h-1.137889c-3.968125 17.136265-7.492683 29.068613-10.545701 35.798041l-117.245503 269.59872h-25.475122L201.497225 422.677229c-2.747317-6.119024-6.271875-18.745694-10.545701-37.866021h-1.387645c1.526509 16.525861 2.30375 40.543407 2.30375 72.054634v233.341128h-43.818209V334.791056h62.161296l104.869588 243.679032c7.93625 18.662775 13.237073 33.189588 15.817554 43.596425h1.609428c7.964222-21.881631 13.542775-36.714146 16.761631-44.512531l106.701799-242.762926h59.192195v355.416913h-45.677393zM874.951555 334.791056L744.384062 690.207969h-50.950243L565.419832 334.791056h50.922271l95.684558 277.867644c3.218857 9.172043 5.577553 19.813651 7.104063 31.885862H720.296585c1.220808-10.545701 3.885206-21.34016 8.020168-32.343415l97.51577-277.410091h49.119032z" />
                  </svg>
                  )}
                {item.title}
              </Link>
            </div>
            <div className="text text-overflow ui_gray">
              by
              &nbsp;
              <Link to={`/user/${item.creator[0].userId}`} className="ui_gray hover">
                {item.creator[0].userName}
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  </div>
);
