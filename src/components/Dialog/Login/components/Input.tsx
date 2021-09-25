import React, { ChangeEventHandler, memo, useCallback, useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons";

interface InputProps {
  value: any;
  onChange: ChangeEventHandler;
  name?: string;
  type?: string;
  placeholder?: string;
}

export default memo<InputProps>(
  ({
    value = "",
    onChange,
    name = "name",
    type = "text",
    placeholder = "",
  }) => {
    const [Type, setType] = useState(type);
    // const [isFocus, setIsFocus] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    // const handleFocus = useCallback(() => setIsFocus(true), []);
    const handleTogglePassword = useCallback(() => {
      setType(showPassword ? "password" : "text");
      setShowPassword(!showPassword);
    }, [showPassword]);
    return (
      <>
        <input
          type={Type}
          name={name}
          placeholder={placeholder}
          className="input"
          // readOnly={isFocus}
          // onFocus={handleFocus}
          value={value}
          onChange={onChange}
        />
        {type === "password" && (
          <button
            type="button"
            className="togglePassword"
            onClick={handleTogglePassword}
          >
            {showPassword ? <IconEye size={16} /> : <IconEyeOff size={16} />}
          </button>
        )}
      </>
    );
  }
);
