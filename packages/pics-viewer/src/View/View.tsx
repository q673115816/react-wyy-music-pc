import React, { FC, memo, MouseEventHandler } from "react";
import { SrcObject } from "../types";
import { CounterActions } from "react-use/lib/useCounter";
import JsFileDownLoader from "js-file-downloader";
import Cur from "../Cur";
import {
  Close,
  Container,
  Control,
  Download,
  Img,
  Inner,
  Mask,
  Page,
  Source,
} from "./components";

interface iProps {
  srcList: SrcObject[];
  detail: number;
  detailControl: CounterActions;
}

const View: FC<iProps> = ({ srcList, detail, detailControl }) => {
  const handleImgClick: MouseEventHandler = (e) => {
    console.log(e);
  };
  const download = async (url: string) => {
    const result = await new JsFileDownLoader({
      url,
    }).catch((err) => {
      console.log(err);
    });
    return result;
  };

  return (
    <Container>
      <Mask onClick={() => detailControl.reset()} />
      <Close onClick={() => detailControl.reset()}>×</Close>
      <Page dir={`left`} onClick={() => detailControl.dec()}>
        <Cur.Left size={25} />
      </Page>
      <Page dir={`right`} onClick={() => detailControl.inc()}>
        <Cur.Right size={25} />
      </Page>
      <Inner>
        <Source>
          <Control dir={`left`} onClick={() => detailControl.dec()} />
          <Control dir={`right`} onClick={() => detailControl.inc()} />
          <Img
            src={srcList[detail].originUrl}
            onClick={handleImgClick}
            alt=""
          />
        </Source>
      </Inner>
      <Download>
        {detail + 1}/{srcList.length} |
        <span
          style={{ cursor: "pointer" }}
          onClick={() => download(srcList[detail].originUrl)}
        >
          下载
        </span>
      </Download>
    </Container>
  );
};

export default memo(View);
