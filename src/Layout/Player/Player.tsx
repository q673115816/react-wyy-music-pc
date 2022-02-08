import React, { useEffect, memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IconChevronLeft } from "@tabler/icons";
import { setAudioRunningPause } from "@/modules/reducers/audio/slice";
import { useAppDispatch } from "@/modules/hooks";
import Content from "./Content";
import Related from "./Related";
import config from "./config";

const Player = () => {
  const { type = "", vid = "" } = useParams();
  const navigate = useNavigate();
  if (type === "" || vid === "") {
    navigate("/", { replace: true });
  }
  const { name } = config[type];
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setAudioRunningPause());
  }, []);

  return (
    <div className="overflow-auto h-full">
      <div
        style={{ width: 930, gridTemplate: `50px 1fr/620px 280px` }}
        className="grid m-auto justify-between"
      >
        <div className="flex items-center">
          <button
            type="button"
            className="flex items-center text-base font-bold"
            onClick={() => navigate(-1)}
          >
            <IconChevronLeft size={28} stroke={1} />
            {name}
          </button>
        </div>
        <div className="flex items-center text-base font-bold">相关推荐</div>
        <Content type={type} vid={vid} />
        <Related id={vid} />
      </div>
    </div>
  );
};

export default memo(Player);
