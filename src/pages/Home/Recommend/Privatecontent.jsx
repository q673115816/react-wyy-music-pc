import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Lazyload from 'react-lazyload';
import { IconPlayerPlay } from '@tabler/icons';
import DomMenuCreate from '@/components/MenuCreate';

export default memo(({ privatecontent = [] }) => (
  <div className="domHome_recommend_privatecontent grid grid-cols-3 gap-4 mt-4">
    {
      privatecontent.map((item) => (
        <div className="item" key={item.id}>
          <DomMenuCreate
            item={item}
            type="mv"
            schema={[
              ['播放MV'],
            ]}
          >
            <div className="cover relative rounded overflow-hidden">
              <Link to={`/player/mv/${item.id}`}>
                <span className="ico absolute top-2 left-2 rounded-full text-white w-6 h-6 bg-black bg-opacity-40 flex-center border border-gray-200">
                  <IconPlayerPlay size={14} className="fill-current" />
                </span>
                <Lazyload>
                  <img className="ui_containimg" src={item.sPicUrl} alt="" />
                </Lazyload>
              </Link>
            </div>
          </DomMenuCreate>
          <div className="name text-sm loading-4 mt-2">
            <Link to={`/player/mv/${item.id}`}>
              {item.name}
            </Link>
          </div>
        </div>
      ))
    }
  </div>
));
