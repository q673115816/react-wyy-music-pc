import React, { memo, useEffect, useState } from "react";
import Loading from "@/components/Loading";
import Content from "./Content";
import { useGetPersonalFMMutation } from "@/modules/services/song";

const FM = () => {
  console.log("fm");
  const [data, setData] = useState([{}]);
  const [PersonalFMGet, { isLoading }] = useGetPersonalFMMutation();
  const handleInit = async () => {
    try {
      const data = await PersonalFMGet();
      setData(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  if (isLoading)
    return (
      <div className="flex-center w-full h-full">
        <Loading />
      </div>
    );
  return (
    <div className="domFm m-auto overflow-auto h-full">
      <div className="m-auto" style={{ width: 760 }}>
        <div className="domFm_header pt-10 flex justify-between">
          <div>todo</div>
          <div style={{ width: 330 }}>
            <div className="font-bold text-lg">{data[0].name}</div>
            <div className="grid grid-cols-2">
              <span>专辑：</span>
              <span>歌手：</span>
            </div>
            <div style={{ height: 370 }} />
          </div>
        </div>
        <Content id={data[0].id} />
      </div>
    </div>
  );
};

export default memo(FM);
