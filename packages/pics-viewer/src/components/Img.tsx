import styled, { css } from "styled-components";

interface ImgProps {
  readonly only?: boolean;
}

const Img = styled.img<ImgProps>`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  ${(props) =>
    !props.only &&
    css`
      aspect-ratio: 1 / 1;
    `}
`;

export default Img;
