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
  background-color: rgba(0, 0, 0, 0.8);
`;

const ViewClose = styled.div`
  position: absolute;
  cursor: pointer;
  top: 1rem;
  right: 1rem;
  color: #fff;
  font-size: 2rem;
`;

const ViewInner = styled.div`
  display: flex;
  overflow: auto;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
`;

const ViewSource = styled.div`
  position: relative;
  max-width: 80%;
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
  max-width: 100%;
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
  position: absolute;
  bottom: 10%;
  right: 0;
  left: 0;
  width: min-content;
  margin: auto;
  padding: 0.8em 1.6em;
  color: gray;
  border-radius: 0.25rem;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: #000;
  }
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
      <ViewInner>
        <ViewSource>
          <ViewControl dir={`left`} onClick={() => detailControl.dec()} />
          <ViewControl dir={`right`} onClick={() => detailControl.inc()} />
          <ViewImg
            src={srcList[detail].originUrl}
            onClick={handleImgClick}
            alt=""
          />
        </ViewSource>
      </ViewInner>
      <ViewDownload>
        {detail + 1}/{srcList.length} |
        <span
          style={{ cursor: "pointer" }}
          onClick={() => download(srcList[detail].originUrl)}
        >
          下载
        </span>
      </ViewDownload>
    </ViewContainer>
  );
};

export default memo(View);
