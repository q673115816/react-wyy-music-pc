import React, { memo } from "react";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { Link } from "react-router-dom";
import { toggleLoginVisibility } from "@/modules/reducers/mask/slice";
import { accountSelector } from "@/modules/reducers/account/slice";

const BuildBinding = (item: any) => null;

const Logined = () => {
  const { profile, bindings } = useAppSelector(accountSelector);
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

const UnLogin = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="text-gray-400 mb-3">
        登录网易云音乐，手机电脑多端同步，320K高音质无限下载
      </div>
      <button
        type="button"
        className="flex-center h-6 px-3 rounded-full border"
        onClick={() => dispatch(toggleLoginVisibility())}
      >
        立即登录
      </button>
    </>
  );
};

const Account = () => {
  const { isLogin } = useAppSelector(accountSelector);
  return isLogin ? <Logined /> : <UnLogin />;
};

export default memo(Account);
