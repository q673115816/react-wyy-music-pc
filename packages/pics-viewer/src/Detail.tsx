import React, { FC, memo } from "react";
import JsFileDownLoader from "js-file-downloader";
import { iProps, Active } from "./types";
import {
  Arrow,
  Button,
  DetailImg,
  DetailInner,
  ControlPoint,
  DetailBar,
  DetailContainer,
  Controls,
} from "./components";
import { createPortal } from "react-dom";
import View from "./View";
import { useCounter } from "react-use";

const Detail: FC<iProps & Active> = ({
  srcList,
  value,
  control,
  className,
  el = "",
}) => {
  const [detail, detailControl] = useCounter(-1, srcList.length, -1);
  const root = (el && document.querySelector(el)) || document.body;
  const download = async (url: string) => {
    const result = await new JsFileDownLoader({
      url,
    }).catch((err) => {
      console.log(err);
    });
    return result;
  };

  return (
    <DetailContainer className={className}>
      <DetailBar>
        <Button onClick={() => control.reset()}>收起</Button>
        <Button onClick={() => detailControl.set(value)}>查看大图</Button>
        <Button onClick={() => download(srcList[value].originUrl)}>下载</Button>
      </DetailBar>
      <DetailInner>
        <Arrow dir="left" hidden={value === 0} onClick={() => control.dec()} />
        <DetailImg
          onClick={() => control.reset()}
          src={srcList[value].originUrl}
          alt=""
        />
        <Arrow dir="right" hidden={false} onClick={() => control.inc()} />
      </DetailInner>
      {srcList.length > 1 && (
        <Controls>
          {srcList.map((_, index) => (
            <ControlPoint
              onClick={() => control.set(index)}
              key={index}
              active={value === index}
            />
          ))}
        </Controls>
      )}
      {detail >= 0 &&
        detail < srcList.length &&
        createPortal(
          <View
            srcList={srcList}
            detail={detail}
            detailControl={detailControl}
          />,
          root
        )}
    </DetailContainer>
  );
};

export default memo(Detail);
