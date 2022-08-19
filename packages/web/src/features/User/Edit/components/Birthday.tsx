import React, { memo, FC, ChangeEventHandler, useMemo } from "react";
import Select from "./Select";
import { EditHandler } from "../types";
import dayjs from "dayjs";
interface iProps {
  birthday: number | null;
  handleEdit: EditHandler;
}
const currentYear = new Date().getFullYear();
const Birthday: FC<iProps> = ({ birthday = Date.now(), handleEdit }) => {
  const year = useMemo(() => dayjs(birthday).year(), [birthday]);
  const month = useMemo(() => dayjs(birthday).month(), [birthday]);
  const date = useMemo(() => dayjs(birthday).date(), [birthday]);
  const triggerEdit = ({
    year,
    month,
    date,
  }: Record<"year" | "month" | "date", string | number>) => {
    handleEdit("birthday", new Date(`${year}/${month}/${date}`).valueOf());
  };
  const handleYear: ChangeEventHandler<HTMLInputElement> = (e) => {
    triggerEdit({
      year: e.target.value,
      month: 1,
      date: 1,
    });
  };

  const handleMonth: ChangeEventHandler<HTMLInputElement> = (e) => {
    triggerEdit({
      year,
      month: e.target.value,
      date: 1,
    });
  };

  const handleDay: ChangeEventHandler<HTMLInputElement> = (e) => {
    triggerEdit({
      year,
      month,
      date: e.target.value,
    });
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      <Select value={year} onChange={handleYear}>
        {Array(100)
          .fill(0)
          .map((_, index) => (
            <option
              key={currentYear + index - 99}
              value={currentYear + index - 99}
            >
              {currentYear + index - 99}年
            </option>
          ))}
      </Select>
      <Select value={month} onChange={handleMonth}>
        {Array(12)
          .fill(0)
          .map((_, index) => (
            <option key={index} value={index}>
              {index + 1}月
            </option>
          ))}
      </Select>
      <Select value={date} onChange={handleDay}>
        {Array(dayjs(birthday).daysInMonth())
          .fill(0)
          .map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}日
            </option>
          ))}
      </Select>
    </div>
  );
};

export default memo(Birthday);
