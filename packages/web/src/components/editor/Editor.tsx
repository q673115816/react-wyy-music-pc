import React, {
  FormEventHandler,
  forwardRef,
  ForwardRefRenderFunction,
  useState,
} from "react";
import style from "./editor.module.scss";
import classNames from "classnames";
import AtSelect from "./AtSelect";
import HashSelect from "./HashSelect";

interface iProps {
  max?: number;
  placeholder?: string;
}

const Editor: ForwardRefRenderFunction<HTMLDivElement, iProps> = (
  { max, placeholder },
  ref
) => {
  const [lastIndex, setLastIndex] = useState(0);
  const [atSelectVisibility, setAtSelectVisibility] = useState(false);
  const [hashSelectVisibility, setHashSelectVisibility] = useState(false);
  const handleInput: FormEventHandler<HTMLDivElement> = (event) => {
    const { nativeEvent } = event;
    const { data } = nativeEvent;
    console.log(event);
    if (data === "@") {
      setAtSelectVisibility(true);
    }
    if (data === "#") {
      setHashSelectVisibility(true);
    }
  };

  const handleBlur = () => {
    const selection = getSelection();
    console.log(selection.getRangeAt(0));
  };
  return (
    <div
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      placeholder={placeholder}
      onInput={handleInput}
      onBlur={handleBlur}
      className={classNames(
        style.editor,
        "border p-2 focus:outline-none relative z-10"
      )}
    >
      {atSelectVisibility && <AtSelect setVisibility={setAtSelectVisibility} />}
      {hashSelectVisibility && (
        <HashSelect setVisibility={setHashSelectVisibility} />
      )}
    </div>
  );
};

export default forwardRef(Editor);
