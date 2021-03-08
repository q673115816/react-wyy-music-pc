import React, { useEffect, useState } from 'react';
import { apiUserDetail, apiUserUpdate } from '@/api';
import { useParams, Link } from 'react-router-dom';
import classNames from 'classnames';
import isEqual from 'lodash/isEqual';
import { setToast, setDialogUploadAvatarShow } from '@/reducers/mask/actions';
import { useDispatch } from 'react-redux';
import './style.scss';
import DomBirthday from './components/Birthday';

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

  const handleUpload = (e) => {
    console.log(e);
    dispatch(
      setDialogUploadAvatarShow(),
    );
  };

  useEffect(() => {
    handleInit();
  }, [uid]);

  useEffect(() => {
    if (isEqual(profile, edit)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [edit]);

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
                <div className={classNames('signatureLength', { ui_red: signature.length > 300 })}>
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
                  className={classNames('ui_btn red', { disabled })}
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
            <input
              onChange={handleUpload}
              type="file"
              name=""
              id="avatar"
              hidden
              accept="image/bmp,image/gif,image/jpg,image/svg,image/png,image/webp,image/ico,image/svgz,image/tif,image/jpeg,image/jfif,image/pjpeg,image/pjp,image/tiff,image/xbm"
            />
            <span className="ui_btn update">修改头像</span>
          </label>
        </div>
      </div>
    </div>
  );
};
