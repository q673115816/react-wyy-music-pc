import React, { memo } from "react";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { Link } from "react-router-dom";
import { commonSelector } from "@/modules/reducers/common/slice";
import { toggleLoginVisibility } from "@/modules/reducers/mask/slice";

const BuildBinding = (item) => {};

const Logined = () => {
  const { profile, bindings } = useAppSelector(({ account }) => account);
  return (
    <>
      <div className="">{bindings.map((item) => BuildBinding(item))}</div>
      <div>
        <Link
          to={`/user/${profile.userId}/edit`}
          className="inline-block rounded-full px-3 py-1 border mr-2 hover:bg-gray-100"
        >
          修改个人信息
        </Link>
        <Link
          to="/friend/invite"
          className="inline-block rounded-full px-3 py-1 border hover:bg-gray-100"
        >
          寻找并邀请好友
        </Link>
      </div>
    </>
  );
};

const UnLogined = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="text-gray-400 mb-3">
        登录网易云音乐，手机电脑多端同步，320K高音质无限下载
      </div>
      <button
        type="button"
        className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full"
        onClick={() => dispatch(toggleLoginVisibility())}
      >
        立即登录
      </button>
    </>
  );
};

const Account = () => {
  const { isLogin } = useAppSelector(commonSelector);
  return isLogin ? <Logined /> : <UnLogined />;
};

export default memo(Account);
