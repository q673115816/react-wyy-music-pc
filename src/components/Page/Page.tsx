import {memo} from 'react';
import {IconChevronRight, IconChevronLeft} from '@tabler/icons';
import classNames from 'classnames';
import DomArrow from './Arrow'

type pageProps = {
  total: number
  page: number
  func: (nextPage: number) => void
}

const DomCenter = ({page, total, func}: pageProps) => (
  <>
    <DomArrow handleClick={() => func(1)}>1</DomArrow>
    <span className="border px-2 h-6 flex-center rounded">…</span>
    <DomList start={page - 3} len={7} page={page} func={func}/>
    <span className="border px-2 h-6 flex-center rounded">…</span>
    <DomArrow handleClick={() => func(total)}>{total}</DomArrow>
  </>
);

const DomList = ({
                   start = 1, page, func, len,
                 }) => (
  Array.from(Array(len).keys()).map((item) => {
    const currentPage = item + start
    return (currentPage === page ? (
        <DomArrow key={item} current={true}>
          {currentPage}
        </DomArrow>
      )
      : (
        <DomArrow key={item} handleClick={() => func(currentPage)}>
          {currentPage}
        </DomArrow>
      ))
  })
);

const DomLeft = ({page, total, func}: pageProps) => (
  <>
    <DomList start={1} page={page} func={func} len={8}/>
    <span className="border px-2 h-6 flex-center rounded">…</span>
    <DomArrow handleClick={() => func(total)}>{total}</DomArrow>
  </>
);

const DomRight = ({page, total, func}: pageProps) => (
  <>
    <DomArrow handleClick={() => func(1)}>1</DomArrow>
    <span className="border px-2 h-6 flex-center rounded">…</span>
    <DomList start={total - 7} page={page} func={func} len={8}/>
  </>
);

const DomPosition = (props: pageProps) => {
  const {page, total, func} = props
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
                       total = 1, page, func,
                     }: pageProps) => {
  if (total <= 1) return null;
  console.log(total)
  return (
    <div className="flex items-center justify-center pt-10 pb-10 space-x-1 flex-wrap">
      <DomArrow
        handleClick={() => page !== 1 && func(page - 1)}
        status={page === 1}>
        <IconChevronLeft size={12}/>
      </DomArrow>
      <DomPosition {...{total, page, func}} />
      <DomArrow
        handleClick={() => page !== total && func(page + 1)}
        status={page === total}>
        <IconChevronRight size={12}/>
      </DomArrow>
    </div>
  );
});
