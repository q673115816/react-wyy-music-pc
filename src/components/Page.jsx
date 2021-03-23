import React, { memo } from 'react';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons';
import classNames from 'classnames';

const DomCenter = ({ page, total, func }) => (
  <>
    <button
      type="button"
      className="border hover:bg-gray-200 w-6 h-6 flex-center rounded"
      onClick={() => func(1)}
    >
      1
    </button>
    <span className="border w-6 h-6 flex-center rounded">…</span>
    {
      [...Array(3).keys()].map((item) => (
        <button
          type="button"
          key={page - item}
          className="border hover:bg-gray-200 w-6 h-6 flex-center rounded"
          onClick={() => func(page - 3 + (Number(item) + 1))}
        >
          {page - 2 + Number(item) + 1}
        </button>
      ))
    }
    <span className="border w-6 h-6 flex-center rounded ui_theme_bg_color text-white">{page}</span>
    {
      [...Array(3).keys()].map((item) => (
        <button
          type="button"
          key={page - item}
          className="border hover:bg-gray-200 w-6 h-6 flex-center rounded"
          onClick={() => func(page + (Number(item) + 1))}
        >
          {page + Number(item) + 1}
        </button>
      ))
    }
    <span className="border w-6 h-6 flex-center rounded">…</span>
    <button
      type="button"
      className="border hover:bg-gray-200 w-6 h-6 flex-center rounded"
      onClick={() => func(total)}
    >
      {total}
    </button>
  </>
);

const DomList = ({
  start = 1, page, func, len = 8,
}) => (
  [...Array(len).keys()].map((item) => (Number(item) + start === page ? (
    <span
      key={item}
      className="border w-6 h-6 flex-center rounded ui_theme_bg_color text-white"
    >
      {page}
    </span>
  )
    : (
      <button
        type="button"
        key={item}
        className="border hover:bg-gray-200 w-6 h-6 flex-center rounded"
        onClick={() => func(Number(item) + start)}
      >
        {Number(item) + start}
      </button>
    )))
);

const DomLeft = ({ page, total, func }) => (
  <>
    <DomList start={1} page={page} func={func} />
    <span className="border w-6 h-6 flex-center rounded">…</span>
    <button
      type="button"
      className="border hover:bg-gray-200 w-6 h-6 flex-center rounded"
      onClick={() => func(total)}
    >
      {total}
    </button>
  </>
);

const DomRight = ({ page, total, func }) => (
  <>
    <button
      type="button"
      className="border hover:bg-gray-200 w-6 h-6 flex-center rounded"
      onClick={() => func(1)}
    >
      1
    </button>
    <span className="border w-6 h-6 flex-center rounded">…</span>
    <DomList start={total - 7} page={page} func={func} />
  </>
);

const DomPosition = ({ page, total, func }) => {
  switch (true) {
    case (page > 5 && page < total - 4):
      return <DomCenter {...{ page, total, func }} />;
    case (page < total - 4 && total > 9):
      return <DomLeft {...{ page, total, func }} />;
    case (page > 5 && total > 9):
      return <DomRight {...{ page, total, func }} />;
    default:
      return (
        <DomList {...{
          page, total, func, len: total,
        }}
        />
      );
  }
};

export default memo(({
  total, page, func,
}) => {
  page = Number(page);
  total = Number(total);
  return (
    <div className="flex items-center justify-center pt-10 pb-10 space-x-1 flex-wrap">
      <button
        type="button"
        onClick={() => page !== 1 && func(page - 1)}
        className={classNames('border w-6 h-6 flex-center rounded', page === 1 ? 'cursor-auto text-gray-500' : 'hover:bg-gray-200')}
      >
        <IconChevronLeft size={12} />
      </button>
      <DomPosition {...{ total, page, func }} />

      <button
        type="button"
        onClick={() => page !== total && func(page + 1)}
        className={classNames('border w-6 h-6 flex-center rounded', page === total ? 'cursor-auto text-gray-500' : 'hover:bg-gray-200')}
      >
        <IconChevronRight size={12} />
      </button>
    </div>
  );
});
