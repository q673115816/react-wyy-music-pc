import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  inset: 0;
  z-index: 99;
  display: flex;
`;

export const Mask = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Close = styled.div`
  position: absolute;
  cursor: pointer;
  top: 1rem;
  right: 1rem;
  color: #fff;
  font-size: 2rem;
`;

export const Inner = styled.div`
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

export const Source = styled.div`
  position: relative;
  max-width: 80%;
`;

export const Control = styled.div<{ dir: "left" | "right" }>`
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

export const Img = styled.img`
  display: block;
  max-width: 100%;
  object-fit: scale-down;
`;

export const Page = styled.div<{ dir: "left" | "right" }>`
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

export const Download = styled.div`
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
