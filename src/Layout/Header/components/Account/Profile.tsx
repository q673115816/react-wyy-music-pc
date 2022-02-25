import React, { FC, memo, MouseEventHandler, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { apiDailysignin, apiUserDetail } from "@/api";
import { setLoginInfoUpdate } from "@/modules/reducers/account/slice";
import { Link } from "react-router-dom";
import {
  IconBrandVimeo,
  IconCircleSquare,
  IconCoin,
  IconLogout,
  IconMedal,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons";
import Loading from "@/components/Loading";
import { Remove } from "@/modules/utils";
import { useGetLogoutMutation } from "@/modules/services/account";
import useToast from "@/hooks/useToast";

const Profile: FC<{ handleHide: MouseEventHandler }> = ({ handleHide }) => {
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const { profile } = useAppSelector(({ account }) => account);
  const { isLogin } = useAppSelector(({ common }) => common);
  const [logoutGet] = useGetLogoutMutation();
  const dispatch = useAppDispatch();
  const handleInit = async () => {
    try {
      // const { profile } = await apiUserAccount();
      const { profile: accountDetail } = await apiUserDetail({
        uid: profile.userId,
      });
      dispatch(setLoginInfoUpdate({ profile: accountDetail }));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      const data = await logoutGet();
      if (data?.data?.code !== 200) {
        toast("退出失败");
        return;
      }
      Remove({ key: "cookie" });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckIn = async () => {
    try {
      const {} = await apiDailysignin();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div
      style={{ width: 280 }}
      className="bg-white text-black z-20 absolute top-full left-1/2 transform -translate-x-1/2 shadow rounded"
    >
      {!loading && isLogin ? (
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
              <button
                type="button"
                className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full text-sm"
                onClick={handleCheckIn}
              >
                <IconCoin size={16} stroke={1} />
                &nbsp; 签到
              </button>
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
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default memo(Profile);
