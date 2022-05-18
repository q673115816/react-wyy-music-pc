import React, { FC, forwardRef, memo, useRef } from "react";
import Select from "../Select";
import Input from "../Input";
import style from "./table.module.scss";
import classNames from "classnames";
import { IconLock } from "@tabler/icons";

interface iProps {
  reset?: boolean;
}

const Table = ({ reset = false }: iProps, ref) => {
  const RefPassword = useRef(null);
  return (
    <table
      ref={ref}
      className={classNames(style.table, `w-full table-fixed border rounded`)}
    >
      <tbody>
        <tr>
          <td className={classNames(style.minCell, `border`)}>
            <Select />
          </td>
          <td className={`border`}>
            <Input
              type="text"
              name="phone"
              maxLength={11}
              placeholder="请输入手机号"
              autoFocus
              autoComplete={"false"}
            />
          </td>
        </tr>
        <tr>
          <td className={`border`} colSpan={2}>
            <div className={`flex-center`}>
              <div className={`flex-1`}>
                <Input
                  Prefix={<IconLock size={18} stroke={1} />}
                  ref={RefPassword}
                  type="password"
                  name="password"
                  placeholder="请输入密码"
                  autoComplete={"false"}
                />
              </div>
              <div className={style.minCell}>
                {reset && (
                  <button
                    type="button"
                    className={classNames(
                      "w-full text-gray-400 whitespace-nowrap"
                    )}
                    onClick={() => (RefPassword.current.value = "")}
                  >
                    重设密码
                  </button>
                )}
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default memo(forwardRef(Table));
