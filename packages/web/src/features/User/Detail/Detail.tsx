import React, { memo, useContext } from "react";
import "./style.scss";
import { context } from "../context";
import Content from "./Content";
import Header from "./Header";
import { useAccountStore } from "@/stores";

const Detail = () => {
  const { isLogin } = useAccountStore();
  const value = useContext(context);
  if (!isLogin) return <div>查看个人信息请先登录</div>;
  if (value.code === 404) return <div className={`flex`}>用户不存在</div>;
  return (
    <div className="">
      <Header />
      <Content />
    </div>
  );
};

export default memo(Detail);
