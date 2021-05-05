import React, { useRef, useState, useEffect } from 'react';

export default ({ birthday = '', handleEdit }) => {
  const nowYear = useRef(new Date().getFullYear());
  const year = useRef(new Date(birthday).getFullYear());
  const month = useRef(new Date(birthday).getMonth());
  const day = useRef(new Date(birthday).getDate());
  const [oneMonth, setOneMonth] = useState();
  // console.log('year', year);
  // console.log('%centry DomBirthday', 'color: #fcc');

  const callhandleEdit = () => {
    handleEdit('birthday', new Date(`${year.current}/${month.current + 1}/${day.current}`).valueOf());
  };

  const handleMonthLenChange = () => {
    // console.log('month');
    switch (Number(month.current)) {
      case 1:
        if ((year.current % 4 === 0 && year.current % 100 !== 0)
          || year.current % 400 === 0) {
          // 闰年
          setOneMonth(29);
        } else {
          setOneMonth(28);
        }
        return;
      case 0:
      case 2:
      case 4:
      case 6:
      case 7:
      case 9:
      case 11:
        setOneMonth(31);
        return;
      default:
        setOneMonth(30);
    }
  };

  const handleYear = (e) => {
    year.current = e.target.value;
    month.current = 0;
    day.current = 1;
    // handleMonthLenChange();
    callhandleEdit();
  };

  const handleMonth = (e) => {
    month.current = e.target.value;
    day.current = 1;
    // handleMonthLenChange();
    callhandleEdit();
  };

  const handleDay = (e) => {
    day.current = e.target.value;
    callhandleEdit();
  };
  useEffect(() => {
    handleMonthLenChange();
  }, [month.current]);

  return (
    <>
      <select className="select" value={year.current} onChange={handleYear}>
        {Object.keys(Array(100).fill(0)).reverse().map((item) => (
          <option
            key={nowYear.current - item}
            value={nowYear.current - item}
          >
            {nowYear.current - item}
            年
          </option>
        ))}
      </select>
      <select className="select" value={month.current} onChange={handleMonth}>
        {Object.keys(Array(12).fill(0)).map((item) => (
          <option
            key={item}
            value={item}
          >
            {Number(item) + 1}
            月
          </option>
        ))}
      </select>
      <select className="select" value={day.current} onChange={handleDay}>
        {Object.keys(Array(oneMonth).fill(0)).map((item) => (
          <option
            key={Number(item) + 1}
            value={Number(item) + 1}
          >
            {Number(item) + 1}
            日
          </option>
        ))}
      </select>
    </>
  );
};
