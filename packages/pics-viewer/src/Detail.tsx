import { Arrow } from "./components";
import Cur from "./Cur";
import React, { FC, memo } from "react";
import JsFileDownLoader from "js-file-downloader";
import { iProps, Active } from "./types";
import {
  Button,
  DetailImg,
  DetailInner,
  ControlPoint,
  DetailBar,
  DetailContainer,
  Controls,
} from "./components";

const Detail: FC<iProps & Active> = ({ srcList, value, control }) => {
  const download = async (url: string) => {
    const result = await new JsFileDownLoader({
      url,
    }).catch((err) => {
      console.log(err);
    });
    return result;
  };

  return (
    <DetailContainer>
      <DetailBar>
        <Button type={"button"} onClick={() => control.reset()}>
          收起
        </Button>
        <Button type={"button"}>查看大图</Button>
        <Button
          type={"button"}
          onClick={() => download(srcList[value].originUrl)}
        >
          下载
        </Button>
      </DetailBar>
      <DetailInner>
        <Arrow dir="left" hidden={value === 0} onClick={() => control.dec()}>
          <Cur.Left />
        </Arrow>
        <DetailImg
          onClick={() => control.reset(-1)}
          src={srcList[value].originUrl}
          alt=""
        />
        <Arrow dir="right" hidden={false} onClick={() => control.inc()}>
          <Cur.Right />
        </Arrow>
      </DetailInner>
      <Controls>
        {srcList.map((_, index) => (
          <ControlPoint
            onClick={() => control.set(index)}
            key={index}
            active={value === index}
          />
        ))}
      </Controls>
    </DetailContainer>
  );
};

export default memo(Detail);
