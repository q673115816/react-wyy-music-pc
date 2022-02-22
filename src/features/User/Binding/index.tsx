import React, { memo, useEffect, useState } from "react";
import "./style.scss";
import {
  SymbolPhone,
  SymbolWY,
  SymbolWX,
  SymbolQQ,
  SymbolWB,
} from "@/components/Symbol";
import { useParams } from "react-router-dom";
import Loading from "@/components/Loading";
import { useGetUserBindingQuery } from "@/modules/services/user";

const maskPhone = (str = "") =>
  str.length === 11 ? str.replace(/(?<=\d{3})(\d{4})(?=\d{4})/, "****") : str;

const Binding = () => {
  const { uid } = useParams();
  const { data, isLoading } = useGetUserBindingQuery({
    uid: uid as string,
  });
  console.log(data);
  const bindings = data?.bindings || [];
  const code = data?.code;
  if (isLoading) return <Loading />;
  if (code === 301) {
    return "登录查看";
  }
  return (
    <>
      <div className="h1 ui_header">绑定账号</div>
      <div className="px-8">
        <div className="domUser_binding_phone">
          <div className="text-sm text-gray-500">注册账号</div>
          <div className="domUser_binding_bar domUser_binding_box">
            <div className="ico">
              <SymbolPhone active />
            </div>
            <div className="content">
              <div className="name">手机</div>
              <div>
                使用手机号注册：
                {maskPhone(JSON.parse(bindings[0].tokenJsonStr).cellphone)}
                &nbsp; &nbsp;
                <button type="button" className="ui_link">
                  更换手机
                </button>
              </div>
            </div>
            <div className="ml-auto">
              <button
                type="button"
                className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"
              >
                修改密码
              </button>
            </div>
          </div>
        </div>
        <div className="domUser_binding_three mt-10">
          <div className="text-sm text-gray-500">其他登录方式</div>
          <div className="domUser_binding_list">
            <div className="domUser_binding_bar domUser_binding_item">
              <div className="ico">
                <SymbolWY active />
              </div>
              <div className="content">
                <div className="name">网易邮箱账号</div>
              </div>
              <div className="ml-auto">
                <button
                  type="button"
                  className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"
                >
                  修改密码
                </button>
              </div>
            </div>
            <div className="domUser_binding_bar domUser_binding_item">
              <div className="ico">
                <SymbolWX active />
              </div>
              <div className="content">
                <div className="name">微信</div>
                <div>
                  ID：
                  {JSON.parse(bindings[4].tokenJsonStr).nickname}
                </div>
              </div>
              <div className="ml-auto">
                <button
                  type="button"
                  className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"
                >
                  已绑定
                </button>
              </div>
            </div>
            <div className="domUser_binding_bar domUser_binding_item">
              <div className="ico">
                <SymbolQQ active />
              </div>
              <div className="content">
                <div className="name">QQ</div>
                <div>
                  ID：
                  {JSON.parse(bindings[3].tokenJsonStr).nickname}
                </div>
              </div>
              <div className="ml-auto">
                <button
                  type="button"
                  className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"
                >
                  已绑定
                </button>
              </div>
            </div>
            <div className="domUser_binding_bar domUser_binding_item">
              <div className="ico">
                <SymbolWB active />
              </div>
              <div className="content">
                <div className="name">新浪微博</div>
                <div>
                  ID：
                  {JSON.parse(bindings[1].tokenJsonStr).name}
                </div>
              </div>
              <div className="ml-auto">
                <button
                  type="button"
                  className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"
                >
                  寻找并邀请好友
                </button>
                <button
                  type="button"
                  className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"
                >
                  已绑定
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Binding);
