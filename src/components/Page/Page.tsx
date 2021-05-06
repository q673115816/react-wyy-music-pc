import { memo } from 'react';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons';
import classNames from 'classnames';

type pageProps = {
  total: number
  page: number
  func: (nextPage: number) => void
}

const DomCenter = ({ page, total, func }) => (
  <>
    <button
      type="button"
      className="border hover:bg-gray-200 px-2 h-6 flex-center rounded"
      onClick={() => func(1)}
    >
      1
    </button>
    <span className="border px-2 h-6 flex-center rounded">…</span>
    <DomList start={page - 3} len={7} page={page} func={func} />
    <span className="border px-2 h-6 flex-center rounded">…</span>
    <button
      type="button"
      className="border hover:bg-gray-200 px-2 h-6 flex-center rounded"
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
      className="border px-2 h-6 flex-center rounded ui_theme_bg_color text-white"
    >
      {page}
    </span>
  )
    : (
      <button
        type="button"
        key={item}
        className="border hover:bg-gray-200 px-2 h-6 flex-center rounded"
        onClick={() => func(Number(item) + start)}
      >
        {Number(item) + start}
      </button>
    )))
);

const DomLeft = ({ page, total, func }) => (
  <>
    <DomList start={1} page={page} func={func} />
    <span className="border px-2 h-6 flex-center rounded">…</span>
    <button
      type="button"
      className="border hover:bg-gray-200 px-2 h-6 flex-center rounded"
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
      className="border hover:bg-gray-200 px-2 h-6 flex-center rounded"
      onClick={() => func(1)}
    >
      1
    </button>
    <span className="border px-2 h-6 flex-center rounded">…</span>
    <DomList start={total - 7} page={page} func={func} />
  </>
);

const DomPosition = (props: pageProps) => {
  const { page, total, func } = props
  switch (true) {
    case (page > 5 && page < total - 4):
      return <DomCenter {...props} />;
    case (page < total - 4 && total > 9):
      return <DomLeft {...props} />;
    case (page > 5 && total > 9):
      return <DomRight {...props} />;
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
}: pageProps) => {
  if (total === 1) return null;
  return (
    <div className="flex items-center justify-center pt-10 pb-10 space-x-1 flex-wrap">
      <button
        type="button"
        onClick={() => page !== 1 && func(page - 1)}
        className={classNames('border px-2 h-6 flex-center rounded', page === 1 ? 'cursor-auto text-gray-500' : 'hover:bg-gray-200')}
      >
        <IconChevronLeft size={12} />
      </button>
      <DomPosition {...{ total, page, func }} />

      <button
        type="button"
        onClick={() => page !== total && func(page + 1)}
        className={classNames('border px-2 h-6 flex-center rounded', page === total ? 'cursor-auto text-gray-500' : 'hover:bg-gray-200')}
      >
        <IconChevronRight size={12} />
      </button>
    </div>
  );
});
