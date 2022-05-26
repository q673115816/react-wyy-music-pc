import React, { FC, memo, MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import { SrcObject } from "../types";
import { CounterActions } from "react-use/lib/useCounter";
import JsFileDownLoader from "js-file-downloader";
import Cur from "../Cur";

const Container = styled.div`
  position: absolute;
  inset: 0;
  z-index: 99;
  display: flex;
`;

const Mask = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Close = styled.div`
  position: absolute;
  cursor: pointer;
  top: 1rem;
  right: 1rem;
  color: #fff;
  font-size: 2rem;
`;

const Inner = styled.div`
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

const Source = styled.div`
  position: relative;
  max-width: 80%;
`;

const Control = styled.div<{ dir: "left" | "right" }>`
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

const Img = styled.img`
  display: block;
  max-width: 100%;
  object-fit: scale-down;
`;

const Page = styled.div<{ dir: "left" | "right" }>`
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

const Download = styled.div`
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
