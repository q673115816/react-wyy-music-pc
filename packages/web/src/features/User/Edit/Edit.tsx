import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Loading from "@/components/Loading";
import Birthday from "./components/Birthday";
import Location from "./components/Location";
import { useImmer } from "use-immer";
import { useToast } from "@/components/Toast";
import Row from "./components/Row";
import { EditHandler } from "@/features/User/Edit/types";
import {
  useGetUserAccountQuery,
  usePostUserUpdateMutation,
  Profile,
} from "@/modules/services/user";
import Gender from "./components/Gender";
import Upload from "./components/Upload";

const Edit = () => {
  const toast = useToast();
  const { data, isLoading, isSuccess } = useGetUserAccountQuery();

  const [updatePost, { isLoading: isUpdating }] = usePostUserUpdateMutation();
  const profile: Profile = data?.profile || {};
  const [edit, setEdit] = useImmer({
    nickname: "",
    signature: "",
    gender: 0,
    birthday: 0,
    province: 0,
    city: 0,
  });
  useEffect(() => {
    if (isSuccess) setEdit(profile);
  }, [isSuccess]);
  const [disabled, setDisabled] = useState(true);

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
      const { data } = await updatePost(params);
      if (data.code === 200) {
        setDisabled(true);
        toast("修改个人资料成功");
      } else if (data.code === 400) {
        toast(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit: EditHandler = (name, value) => {
    setEdit((draft) => {
      draft[name] = value;
    });
  };

  useEffect(() => {
    setDisabled(JSON.stringify(profile) === JSON.stringify(edit));
  }, [edit]);

  if (data?.code === 301) return null;
  if (isLoading)
    return (
      <div className="flex-center w-full h-full">
        <Loading />
      </div>
    );
  return (
    <div>
      <div className="h1 ui_header">编辑个人信息</div>
      <div className="flex px-8 py-5 gap-x-20">
        <div className="flex flex-1 flex-col gap-5">
          <Row text={`昵称`}>
            <div className="value">
              <input
                type="text"
                value={edit.nickname}
                className="h-8 block w-full px-2.5 border rounded"
                onInput={({ target }) => handleEdit("nickname", target.value)}
              />
            </div>
            {edit.nickname.length > 30 && (
              <div className={`text-red-800 mt-2`}>
                昵称为4-30个字，且不包含除-和_以外的特殊字符
              </div>
            )}
          </Row>
          <Row text="介绍">
            <div className="border flex-1">
              <div className="signature rounded flex flex-col items-end">
                <textarea
                  value={edit.signature}
                  className="w-full outline-0 py-1 px-2.5 border-0 h-12 resize-none"
                  onInput={({ target }) =>
                    handleEdit("signature", target.value)
                  }
                />
                <div
                  className={classNames("p-1", {
                    ui_red: edit?.signature?.length > 300,
                  })}
                >
                  {300 - edit?.signature?.length}
                </div>
              </div>
            </div>
          </Row>
          <Row text={"性别"}>
            <Gender gender={edit.gender} handleEdit={handleEdit} />
          </Row>
          <Row text={"生日"}>
            <Birthday birthday={edit.birthday} handleEdit={handleEdit} />
          </Row>
          <Row text="地区">
            <Location
              province={edit.province}
              city={edit.city}
              handleEdit={handleEdit}
            />
          </Row>
          <Row>
            <div className="value mt-5">
              <div className="actions flex gap-5 text-sm">
                <button
                  type="button"
                  className={classNames(
                    "flex-center border px-3 h-8 rounded-full ui_theme_bg_color text-white",
                    disabled && `opacity-60`
                  )}
                  disabled={disabled}
                  onClick={handleSave}
                >
                  保&nbsp;存
                </button>
                <Link
                  to={`/user/${profile.userId}`}
                  className="flex-center border px-3 h-8 rounded-full"
                >
                  取&nbsp;消
                </Link>
              </div>
            </div>
          </Row>
        </div>
        <div>
          <div className="border rounded overflow-hidden w-40 h-40">
            <img className="w-full" src={edit.avatarUrl} alt="" />
          </div>
          <Upload />
        </div>
      </div>
    </div>
  );
};

export default memo(Edit);
