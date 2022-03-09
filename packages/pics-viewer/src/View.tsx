import React, { FC, memo, MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import { SrcObject } from "./types";
import { CounterActions } from "react-use/lib/useCounter";
import JsFileDownLoader from "js-file-downloader";
import Cur from "./Cur";

const ViewContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 99;
  display: flex;
`;

const ViewMask = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ViewClose = styled.div`
  position: absolute;
  cursor: pointer;
  top: 1rem;
  right: 1rem;
  color: #fff;
  font-size: 2rem;
`;

const ViewSource = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  max-width: 60%;
  max-height: 60%;
`;

const ViewControl = styled.div<{ dir: "left" | "right" }>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  ${(props) =>
    props.dir &&
    css`
      ${props.dir}: 0;
    `}
`;

const ViewImg = styled.img`
  display: block;
  object-fit: scale-down;
`;

const ViewPage = styled.div<{ dir: "left" | "right" }>`
  position: absolute;
  top: 0;
  bottom: 0;
  height: min-content;
  margin: auto 1rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #000;
  ${(props) => css`
    ${props.dir}: 0;
  `}
`;

const ViewDownload = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 10%;
  right: 0;
  left: 0;
  width: min-content;
  margin: auto;
  border: 1px solid;
  padding: 0.4em 1.6em;
  color: white;
  border-radius: 1000px;
  white-space: nowrap;
`;

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
    <ViewContainer>
      <ViewMask onClick={() => detailControl.reset()} />
      <ViewClose onClick={() => detailControl.reset()}>×</ViewClose>
      <ViewPage dir={`left`} onClick={() => detailControl.dec()}>
        <Cur.Left size={25} />
      </ViewPage>
      <ViewPage dir={`right`} onClick={() => detailControl.inc()}>
        <Cur.Right size={25} />
      </ViewPage>

      <ViewSource>
        <ViewControl dir={`left`} onClick={() => detailControl.dec()} />
        <ViewControl dir={`right`} onClick={() => detailControl.inc()} />
        <ViewImg
          src={srcList[detail].originUrl}
          onClick={handleImgClick}
          alt=""
        />
      </ViewSource>
      <ViewDownload onClick={() => download(srcList[detail].originUrl)}>
        下载
      </ViewDownload>
    </ViewContainer>
  );
};

export default memo(View);
