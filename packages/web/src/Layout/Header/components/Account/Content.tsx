import React, { FC, memo, useEffect } from "react";
import { useGetUserDetailQuery } from "@/modules/services/user";
import { Link } from "react-router-dom";
import {
  IconBrandVimeo,
  IconCircleSquare,
  IconLogout,
  IconMedal,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons";
import Cookies from "js-cookie";
import Loading from "@/components/Loading";
import { setLoginInfoUpdate, reset } from "@/modules/reducers/account/slice";
import { useAppDispatch } from "@/modules/hooks";
import { Remove } from "@/modules/utils";
import { useGetLogoutMutation } from "@/modules/services/account";
import { useToast } from "@/components/Toast";
import SignIn from "./SignIn";

interface iProps {
  uid: string;
  handleHide: () => void;
}

const Content: FC<iProps> = ({ uid, handleHide }) => {
  const toast = useToast();
  const { data, isLoading } = useGetUserDetailQuery({ uid });
  const [logoutGet] = useGetLogoutMutation();
  const dispatch = useAppDispatch();
  const profile = data?.profile || {};
  const handleLogout = async () => {
    try {
      const data = await logoutGet();
      if (data?.data?.code !== 200) {
        toast("退出失败");
        return;
      }
      Remove({ key: "cookie" });
      dispatch(reset());
      for (const c in Cookies.get()) {
        Cookies.remove(c);
      }
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      dispatch(setLoginInfoUpdate({ profile }));
    }
  }, [isLoading]);
  if (isLoading) return <Loading />;
  return (
    <ul className="divide-y">
      <li className="detail py-1.5 flex-auto">
        <div className="my-5 flex">
          <Link
            onClick={handleHide}
            to={`/user/${profile.userId}/dynamic`}
            className="info flex-1 text-center"
          >
            <div className="text-xl">{profile.eventCount}</div>
            <div className="mt-2">动态</div>
          </Link>
          <Link
            onClick={handleHide}
            to={`/user/${profile.userId}/follow`}
            className="info flex-1 text-center"
          >
            <div className="text-xl">{profile.follows}</div>
            <div className="mt-2">关注</div>
          </Link>
          <Link
            onClick={handleHide}
            to={`/user/${profile.userId}/fans`}
            className="info flex-1 text-center"
          >
            <div className="text-xl">{profile.followeds}</div>
            <div className="mt-2">粉丝</div>
          </Link>
        </div>
        <div className="flex-center">
          <SignIn />
        </div>
      </li>
      <li className="py-1.5">
        <button
          onClick={handleHide}
          type="button"
          className="h-9 px-5 hover:bg-gray-100 w-full flex items-center"
        >
          <i className="w-6">
            <IconBrandVimeo size={20} stroke={1} />
          </i>
          会员中心
        </button>
        <a
          onClick={handleHide}
          href="https://music.163.com/#/user/level"
          className="h-9 px-5 hover:bg-gray-100 w-full flex items-center"
        >
          <i className="w-6">
            <IconMedal size={20} stroke={1} />
          </i>
          等级
        </a>
        <a
          onClick={handleHide}
          href="https://music.163.com/store/product"
          className="h-9 px-5 hover:bg-gray-100 w-full flex items-center"
        >
          <i className="w-6">
            <IconShoppingCart size={20} stroke={1} />
          </i>
          商城
        </a>
      </li>
      <li className="py-1.5">
        <Link
          onClick={handleHide}
          to={`/user/${profile.userId}/edit`}
          className="h-9 px-5 hover:bg-gray-100 w-full flex items-center"
        >
          <i className="w-6">
            <IconUser size={20} stroke={1} />
          </i>
          个人信息设置
        </Link>
        <Link
          onClick={handleHide}
          to={`/user/${profile.userId}/binding`}
          className="h-9 px-5 hover:bg-gray-100 w-full flex items-center"
        >
          <i className="w-6">
            <IconCircleSquare size={20} stroke={1} />
          </i>
          绑定社交账号
        </Link>
      </li>
      <li className="py-1.5">
        <button
          className="h-9 px-5 hover:bg-gray-100 w-full flex items-center"
          type="button"
          onClick={handleLogout}
        >
          <i className="w-6">
            <IconLogout size={20} stroke={1} />
          </i>
          退出登录
        </button>
      </li>
    </ul>
  );
};

export default memo(Content);
