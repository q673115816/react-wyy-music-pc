import React, { memo, useEffect, useState } from "react";
import { apiUserDetail, apiUserUpdate } from "@/api";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";
import { setDialogUploadAvatarShow } from "@/modules/reducers/mask/slice";
import "./style.scss";
import Loading from "@/components/Loading";
import DialogUploadAvatar from "@/components/Dialog/UploadAvatar";
import Birthday from "./components/Birthday";
import Location from "./components/Location";
import { useAppDispatch } from "@/modules/hooks";
import { useImmer } from "use-immer";
import useToast from "@/hooks/useToast";
import Row from "./components/Row";

const Edit = () => {
  const { uid } = useParams();
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useImmer({});
  const [edit, setEdit] = useImmer({});

  const [signature, setSignature] = useState("");
  const [disabled, setDisabled] = useState(true);
  const handleInit = async () => {
    try {
      const { code, profile } = await apiUserDetail({
        uid,
      });
      if (code !== 200) return;
      setProfile(profile);
      setEdit(profile);
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
      if (code !== 200) return;
      setDisabled(true);
      setProfile(edit);
      toast("修改个人资料成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (name, value) => {
    setEdit((draft) => {
      draft[name] = value;
    });
  };

  const handleUpload = ({ target }) => {
    // console.log(target);
    const reader = new FileReader();
    const [file] = target.files;
    if (!file) return;
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      dispatch(
        setDialogUploadAvatarShow({
          avatar: event.target.result,
        })
      );
    };
  };

  useEffect(() => {
    handleInit();
  }, [uid]);

  useEffect(() => {
    // console.log(initialState.current === edit);
    // console.log(JSON.stringify(profile) === JSON.stringify(edit));
    // 可以保存修改值判断
    setDisabled(JSON.stringify(profile) === JSON.stringify(edit));
  }, [edit]);

  if (loading)
    return (
      <div className="flex-center w-full h-full">
        <Loading />
      </div>
    );
  return (
    <div className="domUserEdit">
      <div className="h1 domUser_subpage_header ui_header">编辑个人信息</div>
      <div className="domUserEdit_main flex px-8 py-5">
        <div className="left flex flex-col gap-5">
          <Row label={`昵称`}>
            <div className="value">
              <input
                type="text"
                value={edit.nickname}
                className="h-8 block w-full px-2.5 border rounded"
                onChange={({ target }) => handleEdit("nickname", target.value)}
              />
            </div>
          </Row>
          <Row label="介绍">
            <div className="border flex-1">
              <div className="signature rounded flex flex-col items-end">
                <textarea
                  type="text"
                  value={edit.signature}
                  className="w-full outline-0 py-1 px-2.5 border-0 h-12 resize-none"
                  onChange={({ target }) =>
                    handleEdit("signature", target.value)
                  }
                />
                <div
                  className={classNames("p-1", {
                    ui_red: signature.length > 300,
                  })}
                >
                  {300 - signature.length}
                </div>
              </div>
            </div>
          </Row>
          <Row label={"性别"}>
            <div className="value">
              <label htmlFor="secret" className="gender">
                <input
                  type="radio"
                  className="hidden"
                  name="gender"
                  id="secret"
                  checked={edit.gender === 0}
                  onChange={() => handleEdit("gender", 0)}
                />
                <i className="ico flex-center" />
                <span>保密</span>
              </label>
              <label htmlFor="male" className="gender">
                <input
                  type="radio"
                  className="hidden"
                  name="gender"
                  id="male"
                  checked={edit.gender === 1}
                  onChange={() => handleEdit("gender", 1)}
                />
                <i className="ico flex-center" />
                <span>男</span>
              </label>
              <label htmlFor="famale" className="gender">
                <input
                  type="radio"
                  className="hidden"
                  name="gender"
                  id="famale"
                  checked={edit.gender === 2}
                  onChange={() => handleEdit("gender", 2)}
                />
                <i className="ico flex-center" />
                <span>女</span>
              </label>
            </div>
          </Row>
          <Row label={"生日"}>
            <Birthday birthday={edit.birthday} handleEdit={handleEdit} />
          </Row>
          <Row label="地区">
            <Location
              province={edit.province}
              city={edit.city}
              handleEdit={handleEdit}
            />
          </Row>
          <Row label="">
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
                  to="./"
                  className="flex-center border px-3 h-8 rounded-full"
                >
                  取&nbsp;消
                </Link>
              </div>
            </div>
          </Row>
        </div>
        <div className="right ml-20">
          <div className="avatar border rounded overflow-hidden w-40 h-40">
            <img className="" src={edit.avatarUrl} alt="" />
          </div>
          <label
            htmlFor="avatar"
            className="border cursor-pointer hover:bg-gray-50 flex-center h-8 m-auto mt-5 px-3 rounded-full update w-min whitespace-nowrap"
          >
            <input
              onChange={handleUpload}
              type="file"
              name=""
              id="avatar"
              hidden
              accept="image/bmp,image/gif,image/jpg,image/svg,image/png,image/webp,image/ico,image/svgz,image/tif,image/jpeg,image/jfif,image/pjpeg,image/pjp,image/tiff,image/xbm"
            />
            修改头像
          </label>
          <DialogUploadAvatar />
        </div>
      </div>
    </div>
  );
};

export default memo(Edit);
