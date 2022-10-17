import React, { forwardRef } from "react";
import Select from "../Select";
import Input from "../Input";
import style from "./table.module.scss";
import classNames from "classnames";
import { IconLock } from "@tabler/icons";

const Table = forwardRef<HTMLTableElement>((props, ref) => {
  return (
    <table
      ref={ref}
      className={`w-full table-fixed border rounded border-collapse`}
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
                  type="password"
                  name="password"
                  placeholder="请输入密码"
                  autoComplete={"false"}
                />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
});

export default Table;
