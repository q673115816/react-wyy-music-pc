import React, { memo, useContext } from "react";
import "./style.scss";
import { useAppSelector } from "@/modules/hooks";
import { context } from "../context";
import Content from "./Content";
import Header from "./Header";

const Detail = () => {
  const { isLogin } = useAppSelector(({ common }) => common);
  const { code } = useContext(context);
  if (!isLogin) {
    return <div>查看个人信息请先登录</div>;
  }

  if (code === 404) return <div className={`flex`}>用户不存在</div>;
  return (
    <div className="domUserDetail">
      <Header />
      <Content />
    </div>
  );
};

export default memo(Detail);
