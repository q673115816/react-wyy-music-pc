import React, { FC, memo, MouseEventHandler, useCallback } from "react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons";
import classNames from "classnames";
import Button from "./Button";
import { pageProps } from "./types";

const Ellipsis = memo(function Ellipsis() {
  return <span className="border px-2 h-6 flex-center rounded">…</span>;
});

const PageList = ({ start = 1, page = 1, func = () => null, len = 0 }) =>
  Array.from(Array(len).keys()).map((item) => {
    const currentPage = item + start;
    return (
      <Button
        key={item}
        current={currentPage === page}
        handleClick={() => func(currentPage)}
      >
        {currentPage}
      </Button>
    );
  });

const Center: FC<pageProps> = ({ page, total, func }) => (
  <>
    <Button handleClick={() => func(1)}>1</Button>
    <Ellipsis />
    <PageList start={page - 3} len={7} page={page} func={func} />
    <Ellipsis />
    <Button handleClick={() => func(total)}>{total}</Button>
  </>
);

const Left: FC<pageProps> = ({ page, total, func }) => (
  <>
    <PageList start={1} page={page} func={func} len={8} />
    <Ellipsis />
    <Button handleClick={() => func(total)}>{total}</Button>
  </>
);

const Right: FC<pageProps> = ({ page, total, func }) => (
  <>
    <Button handleClick={() => func(1)}>1</Button>
    <Ellipsis />
    <PageList start={total - 7} page={page} func={func} len={8} />
  </>
);

const Position: FC<pageProps> = (props) => {
  const { page, total } = props;
  switch (true) {
    case page > 5 && page < total - 4:
      return <Center {...props} />;
    case page < total - 4 && total > 9:
      return <Left {...props} />;
    case page > 5 && total > 9:
      return <Right {...props} />;
    default:
      return (
        <PageList
          {...{
            ...props,
            len: total,
          }}
        />
      );
  }
};

const Page: FC<pageProps> = ({ total = 0, page, func }) => {
  if (Number(total) <= 1) return null;
  page = Number(page);
  return (
    <div className="flex items-center justify-center pt-10 pb-10 space-x-1 flex-wrap">
      <Button handleClick={() => func(page - 1)} status={page === 1}>
        <IconChevronLeft size={12} />
      </Button>
      <Position {...{ total, page, func }} />
      <Button handleClick={() => func(page + 1)} status={page === total}>
        <IconChevronRight size={12} />
      </Button>
    </div>
  );
};

export default memo(Page);
