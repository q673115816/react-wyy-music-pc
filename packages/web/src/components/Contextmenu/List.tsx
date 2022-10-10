import React, { FC, HTMLAttributes, memo, PropsWithChildren } from "react";
import classNames from "classnames";

const List: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  children,
  style,
  className,
}) => {
  return (
    <div
      style={style}
      className={classNames(
        `ui_contextmenu divide-y bg-white border shadow p-0.5 absolute`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default memo(List);
