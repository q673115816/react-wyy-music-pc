import React, { useEffect, useState } from 'react';
import './style.scss';
import {
  SymbolPhone, SymbolWY, SymbolWX, SymbolQQ, SymbolWB,
} from '@/components/Symbol';
import { apiUserBinding } from '@/api';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const maskPhone = (str = '') => (str.length === 11 ? str.replace(/(?<=\d{3})(\d{4})(?=\d{4})/, '****') : str);

export default () => {
  const { uid } = useParams();
  const [bindings, setBindings] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleInit = async () => {
    try {
      const { bindings } = await apiUserBinding({
        uid,
      });
      setBindings(bindings);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  if (loading) return <div>loading</div>;
  return (
    <>
      <div className="h1 domUser_subpage_header ui_header">
        绑定账号
      </div>
      <div className="domUser_binding_main">
        <div className="domUser_binding_phone">
          <div className="domUser_binding_title">
            注册账号
          </div>
          <div className="domUser_binding_bar domUser_binding_box">
            <div className="ico"><SymbolPhone active /></div>
            <div className="content">
              <div className="name">手机</div>
              <div>
                使用手机号注册：
                {maskPhone(JSON.parse(bindings[0].tokenJsonStr).cellphone)}
                &nbsp;
                &nbsp;
                <button type="button" className="ui_link">更换手机</button>
              </div>
            </div>
            <div className="actions">
              <button type="button" className="ui_btn">修改密码</button>
            </div>
          </div>
        </div>
        <div className="domUser_binding_three">
          <div className="domUser_binding_title">
            其他登录方式
          </div>
          <div className="domUser_binding_list">
            <div className="domUser_binding_bar domUser_binding_item">
              <div className="ico"><SymbolWY active /></div>
              <div className="content">
                <div className="name">网易邮箱账号</div>
              </div>
              <div className="actions">
                <button type="button" className="ui_btn">修改密码</button>
              </div>
            </div>
            <div className="domUser_binding_bar domUser_binding_item">
              <div className="ico"><SymbolWX active /></div>
              <div className="content">
                <div className="name">微信</div>
                <div>
                  ID：
                  {JSON.parse(bindings[4].tokenJsonStr).nickname}
                </div>
              </div>
              <div className="actions">
                <button type="button" className="ui_btn">已绑定</button>
              </div>
            </div>
            <div className="domUser_binding_bar domUser_binding_item">
              <div className="ico"><SymbolQQ active /></div>
              <div className="content">
                <div className="name">QQ</div>
                <div>
                  ID：
                  {JSON.parse(bindings[3].tokenJsonStr).nickname}
                </div>
              </div>
              <div className="actions">
                <button type="button" className="ui_btn">已绑定</button>
              </div>
            </div>
            <div className="domUser_binding_bar domUser_binding_item">
              <div className="ico"><SymbolWB active /></div>
              <div className="content">
                <div className="name">新浪微博</div>
                <div>
                  ID：
                  {JSON.parse(bindings[1].tokenJsonStr).name}
                </div>
              </div>
              <div className="actions">
                <button type="button" className="ui_btn">寻找并邀请好友</button>
                <button type="button" className="ui_btn">已绑定</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
