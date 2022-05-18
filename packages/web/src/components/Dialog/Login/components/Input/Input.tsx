import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from "react";
type iProps = {
  Prefix?: ReactNode | any | null;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = (props: iProps, ref) => {
  const { Prefix, type = "text", ...otherProps } = props;
  return (
    <div className={`flex-center px-2.5`}>
      {Prefix ? <div className={`pr-2`}>{Prefix}</div> : null}
      <input
        ref={ref}
        type={type}
        {...otherProps}
        className={"w-full h-9 appearance-none bg-white"}
      />
    </div>
  );
};

export default forwardRef(Input);
