import React, { useEffect, memo } from "react";
import { useNavigate, useParams } from "react-router";
import { IconChevronLeft } from "@tabler/icons-react";

import Content from "./Content";
import Related from "./Related";
import config from "./config";
import { useAudioStore } from "@/stores";

const Player = () => {
  const { type = "", vid = "" } = useParams();
  const navigate = useNavigate();
  const configItem = config[type as keyof typeof config];
  useEffect(() => {
    useAudioStore.getState().setAudioRunningPause();
  }, []);
  useEffect(() => {
    if (!configItem) navigate("/", { replace: true });
  }, [configItem, navigate]);

  if (!configItem) return null;

  const { name } = configItem;

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
