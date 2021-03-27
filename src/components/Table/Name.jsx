import React from 'react';
import DomTags from '@/components/Tags';

export default ({ item = {} }) => (
  <div className="flex items-center">
    <div className="truncate">
      {/* {item.name} */}
      <span title={item.name}>
        {item.name}
      </span>
      {
        item.alia.length > 0
        && (
          <span
            className="alia text-gray-400"
            title={`（${item.alia}）`}
          >
            {`（${item.alia}）`}
          </span>
        )
      }
      {
        item.tns?.length > 0
        && (
          <>
            <span
              className="alia text-gray-400"
              title={item.tns}
            >
              {`（${item.tns}）`}
            </span>
          </>
        )
      }
    </div>
    <DomTags item={item} />
  </div>
);
