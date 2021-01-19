import React, { useEffect, useRef, useState } from 'react';
import { apiUserDetail, apiUserUpdate } from '@/api';
import { useParams, Link } from 'react-router-dom';
import classnames from 'classnames';
import isEqual from 'lodash/isEqual';
import './style.scss';
import { setToast } from '@/redux/actions';
import { useDispatch } from 'react-redux';

const DomBirthday = ({ birthday = '', handleEdit }) => {
  const nowYear = useRef(new Date().getFullYear());
  const [year, setYear] = useState(new Date(birthday).getFullYear());
  const [month, setMonth] = useState(new Date(birthday).getMonth());
  const [day, setDay] = useState(new Date(birthday).getDate());
  const [oneMonth, setOneMonth] = useState(31);
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handleMonth = (e) => {
    setMonth(e.target.value);
  };
  const handleDay = (e) => {
    setDay(e.target.value);
  };
  useEffect(() => {
    handleEdit('birthday', new Date(`${year}/${month + 1}/${day}`).valueOf());
  }, [year, month, day]);

  // useEffect(() => {
  //   setDay(1);
  // }, [month]);
  // useEffect(() => {
  //   setMonth(0);
  //   setDay(1);
  // }, [year]);

  useEffect(() => {
    switch (month) {
      case 1:
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          // 闰年
          setOneMonth(29);
        } else {
          setOneMonth(28);
        }
        return;
      case 0:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        setOneMonth(31);
        return;
      default:
        setOneMonth(30);
    }
  }, []);
  return (
    <>
      <select className="select" value={year} onChange={handleYear}>
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
      <select className="select" value={month} onChange={handleMonth}>
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
      <select className="select" value={day} onChange={handleDay}>
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

export default () => {
  const dispatch = useDispatch();
  const { uid } = useParams();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const [edit, setEdit] = useState({});
  const [signature, setSignature] = useState('');
  const [disabled, setDisabled] = useState(true);
  const handleInit = async () => {
    try {
      const {
        code, profile,
      } = await apiUserDetail({
        uid,
      });
      if (code === 200) {
        setProfile(profile);
        setEdit(profile);
        // setGender(gender);
        // setbirthday(birthday);
        // setNickname(nickname);
        // setProvince(province);
        // setCity(city);
        // setSignature(signature);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const params = {
        gender: edit.gender,
        birthday: edit.birthday,
        nickname: edit.nickname,
        province: edit.province,
        city: edit.city,
        signature: edit.signature,
      };
      const { code } = await apiUserUpdate(params);
      if (code === 200) {
        setDisabled(true);
        setProfile(edit);
        dispatch(setToast({ toast: { title: '修改个人资料成功' } }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (name, value) => {
    setEdit({ ...edit, [name]: value });
  };

  useEffect(() => {
    handleInit();
  }, [uid]);
  useEffect(() => {
    console.log(profile, edit, isEqual(profile, edit));
    if (isEqual(profile, edit)) {
      // console.log(profile.nickname, edit.nickname);
      // console.log(111);
      setDisabled(true);
    } else {
      // console.log(profile.nickname, edit.nickname);
      // console.log(222);
      setDisabled(false);
    }
  }, [
    edit,
    // gender,
    // birthday,
    // nickname,
    // province,
    // city,
    // signature
  ]);
  if (loading) return <div>loading</div>;
  return (
    <div className="domUserEdit">
      <div className="h1 domUser_subpage_header ui_header">
        编辑个人信息
      </div>
      <div className="domUserEdit_main">
        <div className="left">
          <div className="row">
            <div className="key">昵称：</div>
            <div className="value">
              <input
                type="text"
                value={edit.nickname}
                className="input"
                onChange={({ target }) => handleEdit('nickname', target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="key">介绍：</div>
            <div className="value">
              <div className="signature">
                <textarea
                  type="text"
                  value={edit.signature}
                  className="textarea"
                  onChange={({ target }) => handleEdit('signature', target.value)}
                />
                <div className={classnames('signatureLength', { ui_red: signature.length > 300 })}>
                  {300 - signature.length}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="key">性别：</div>
            <div className="value">
              <label htmlFor="secret" className="gender">
                <input
                  type="radio"
                  className="radio"
                  name="gender"
                  id="secret"
                  checked={edit.gender === 0}
                  onChange={() => handleEdit('gender', 0)}
                />
                <i className="ico" />
                <span>保密</span>
              </label>
              <label htmlFor="male" className="gender">
                <input
                  type="radio"
                  className="radio"
                  name="gender"
                  id="male"
                  checked={edit.gender === 1}
                  onChange={() => handleEdit('gender', 1)}
                />
                <i className="ico" />
                <span>男</span>
              </label>
              <label htmlFor="famale" className="gender">
                <input
                  type="radio"
                  className="radio"
                  name="gender"
                  id="famale"
                  checked={edit.gender === 2}
                  onChange={() => handleEdit('gender', 2)}
                />
                <i className="ico" />
                <span>女</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="key">生日：</div>
            <div className="value" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <DomBirthday
                birthday={edit.birthday}
                handleEdit={handleEdit}
              />
            </div>
          </div>
          <div className="row">
            <div className="key">地区：</div>
            <div className="value">
              <select name="" id="" className="select">
                <option value="" />
              </select>
            </div>
          </div>
          <div className="row">
            <div className="key" />
            <div className="value">
              <div className="actions">
                <button
                  type="button"
                  className={classnames('ui_btn red', { disabled })}
                  style={{ marginRight: '2em' }}
                  disabled={disabled}
                  onClick={handleSave}
                >
                  保&nbsp;存

                </button>
                <Link to="./" className="ui_btn">取&nbsp;消</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="avatar">
            <img className="ui_coverimg" src={edit.avatarUrl} alt="" />
          </div>
          <label htmlFor="avatar">
            <input type="file" name="" id="avatar" hidden />
            <span className="ui_btn update">修改头像</span>
          </label>
        </div>
      </div>
    </div>
  );
};
