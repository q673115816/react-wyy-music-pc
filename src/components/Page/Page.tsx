import React, { FC, memo, useCallback } from 'react';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons';
import classNames from 'classnames';

type pageProps = {
  total: number
  page: number
  func: (nextPage: number) => null
}

interface btnProps {
  handleClick: () => null
  status: boolean
  current: boolean
}

const PageBtn = memo<Partial<btnProps>>(({
  handleClick = () => void 0,
  status = false,
  current = false,
  children
}) => {
  const Click = (status || current) ? () => null : handleClick
  return (
    <button
      type="button"
      onClick={Click}
      className={classNames(
        'border px-2 h-6 flex-center rounded',
        status ? 'cursor-auto text-gray-500' : 'hover:bg-gray-200',
        current && 'cursor-auto ui_theme_bg_color text-white'
      )}
    >
      {children}
    </button>
  )
})

const PageList = ({
  start = 1, page, func, len,
}) => (
  Array.from(Array(len).keys()).map((item) => {
    const currentPage = item + start
    return (<PageBtn key={item}
      current={currentPage === page}
      handleClick={() => func(currentPage)}>
      {currentPage}
    </PageBtn>)
  })
);

const DomCenter: FC<pageProps> = ({ page, total, func }) => (
  <>
    <PageBtn handleClick={() => func(1)}>1</PageBtn>
    <span className="border px-2 h-6 flex-center rounded">…</span>
    <PageList start={page - 3} len={7} page={page} func={func} />
    <span className="border px-2 h-6 flex-center rounded">…</span>
    <PageBtn handleClick={() => func(total)}>{total}</PageBtn>
  </>
);

const DomLeft: FC<pageProps> = ({ page, total, func }) => (
  <>
    <PageList start={1} page={page} func={func} len={8} />
    <span className="border px-2 h-6 flex-center rounded">…</span>
    <PageBtn handleClick={() => func(total)}>{total}</PageBtn>
  </>
);

const DomRight: FC<pageProps> = ({ page, total, func }) => (
  <>
    <PageBtn handleClick={() => func(1)}>1</PageBtn>
    <span className="border px-2 h-6 flex-center rounded">…</span>
    <PageList start={total - 7} page={page} func={func} len={8} />
  </>
);

const DomPosition: FC<pageProps> = (props) => {
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
        <PageList {...{
          page, total, func, len: total,
        }}
        />
      );
  }
};

export default memo<pageProps>(({
  total = 1, page, func,
}) => {
  if (total <= 1) return null;
  return (
    <div className="flex items-center justify-center pt-10 pb-10 space-x-1 flex-wrap">
      <PageBtn
        handleClick={() => func(page - 1)}
        status={page === 1}>
        <IconChevronLeft size={12} />
      </PageBtn>
      <DomPosition {...{ total, page, func }} />
      <PageBtn
        handleClick={() => func(page + 1)}
        status={page === total}>
        <IconChevronRight size={12} />
      </PageBtn>
    </div>
  );
});
