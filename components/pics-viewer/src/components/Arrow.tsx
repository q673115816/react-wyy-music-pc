import styled, { css } from "styled-components";

type Dirs = "left" | "right";

interface ArrowProps {
  readonly dir: Dirs;
  readonly hidden: boolean;
}

const left = `url(data:;base64,AAABAAEAEBwAAAEAIACYBwAAFgAAACgAAAAQAAAAOAAAAAEAIAAAAAAAAAcAABILAAASCwAAAAAAAAAAAAAAAAAG+fn5hfX19YEAAAAKAAAACQAAAAcAAAAFAAAAAwAAAAIAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAA+fn5gv//////////9fX1gwAAAAsAAAAJAAAABwAAAAUAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAP39/YL////////////////19fWEAAAACwAAAAkAAAAHAAAABQAAAAMAAAACAAAAAQAAAAEAAAABAAAAAAAAAAAAAAAD+/v7gv////////////////X19YUAAAALAAAACQAAAAcAAAAFAAAAAwAAAAIAAAABAAAAAQAAAAEAAAAAAAAAAgAAAAP7+/uA////////////////9vb2hwAAAAsAAAAJAAAABwAAAAUAAAADAAAAAgAAAAEAAAABAAAAAQAAAAEAAAACAAAAA/v7+3/////////////////29vaIAAAACwAAAAkAAAAHAAAABQAAAAMAAAACAAAAAQAAAAEAAAABAAAAAQAAAAIAAAAD+/v7fv////////////////b29okAAAALAAAACQAAAAcAAAAFAAAAAwAAAAIAAAABAAAAAQAAAAEAAAABAAAAAgAAAAP7+/t8////////////////9vb2iwAAAAsAAAAJAAAABwAAAAUAAAADAAAAAgAAAAAAAAABAAAAAQAAAAEAAAACAAAAA/v7+3v////////////////29vaMAAAACwAAAAkAAAAHAAAABQAAAAMAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAIAAAAD+/v7ev////////////////b29o0AAAALAAAACQAAAAcAAAAFAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAP7+/t4////////////////9vb2jwAAAAsAAAAJAAAABgAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAQAAAAEAAAACAAAABPn5+Xj////////////////29vaQAAAACgAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAQAAAAH9PT0ef////////////////j4+JAAAAAHAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAMAAAAFAAAACAAAAAry8vJ5////////////////+/v7jwAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9vb2iv////////////////v7+3QAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9vb2iP////////////////v7+3cAAAADAAAAAQAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9fX1hf////////////////v7+3oAAAADAAAAAgAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9fX1gv////////////////v7+30AAAADAAAAAgAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9fX1f/////////////////v7+4AAAAADAAAAAgAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9fX1fP////////////////v7+4MAAAADAAAAAgAAAAEAAAABAAAAAQAAAAMAAAAFAAAABwAAAAkAAAAL9PT0ef////////////////v7+4YAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAEAAAABgAAAAkAAAAK8vLyd/////////////////v7+4kAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAABQAAAAgAAAAK8vLydf////////////////v7+4sAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAYAAAAI9PT0cf////////////////v7+44AAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAF9vb2bf////////////////v7+5EAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAA+vr6af////7///////////39/ZMAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP39/Wr////+//////39/ZYAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC/f39aP///5aAgIACAAAAAQAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAHAAAAAwAAAAEAAAAAAAAAAAAAAAAAAAAAAACAAAAAwAAAAOAAAADwAAAA8AAAAOAAAADAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAMAAAAHAAAADwAAAB8AAAA/AAAAfwAAAP8AAA==),auto`;
const right = `url(data:;base64,AAABAAEAEBwAAAEAIACYBwAAFgAAACgAAAAQAAAAOAAAAAEAIAAAAAAAAAcAABILAAASCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAK9fX1gfn5+YUAAAAGAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9fX1g///////////+fn5ggAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9fX1hP////////////////39/YIAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9fX1hf////////////////v7+4IAAAADAAAAAQAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9vb2h/////////////////v7+4AAAAADAAAAAgAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9vb2iP////////////////v7+38AAAADAAAAAgAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9vb2if////////////////v7+34AAAADAAAAAgAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9vb2i/////////////////v7+3wAAAADAAAAAgAAAAEAAAABAAAAAQAAAAMAAAAFAAAABwAAAAkAAAAL9vb2jP////////////////v7+3sAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAFAAAABwAAAAkAAAAL9vb2jf////////////////v7+3oAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAABgAAAAkAAAAL9vb2j/////////////////v7+3gAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAcAAAAK9vb2kP////////////////n5+XgAAAAEAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAH+Pj4kP////////////////T09HkAAAAHAAAABAAAAAIAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAA+/v7j/////////////////Ly8nkAAAAKAAAACAAAAAUAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAPv7+3T////////////////29vaKAAAACwAAAAkAAAAHAAAABQAAAAMAAAACAAAAAQAAAAEAAAABAAAAAAAAAAAAAAAD+/v7d/////////////////b29ogAAAALAAAACQAAAAcAAAAFAAAAAwAAAAIAAAABAAAAAQAAAAEAAAAAAAAAAgAAAAP7+/t6////////////////9fX1hQAAAAsAAAAJAAAABwAAAAUAAAADAAAAAgAAAAEAAAABAAAAAQAAAAEAAAACAAAAA/v7+33////////////////19fWCAAAACwAAAAkAAAAHAAAABQAAAAMAAAACAAAAAQAAAAEAAAABAAAAAQAAAAIAAAAD+/v7gP////////////////X19X8AAAALAAAACQAAAAcAAAAFAAAAAwAAAAIAAAABAAAAAQAAAAEAAAABAAAAAgAAAAP7+/uD////////////////9fX1fAAAAAsAAAAJAAAABwAAAAUAAAADAAAAAgAAAAAAAAABAAAAAQAAAAEAAAACAAAAA/v7+4b////////////////09PR5AAAACwAAAAkAAAAHAAAABQAAAAMAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAIAAAAD+/v7if////////////////Ly8ncAAAAKAAAACQAAAAYAAAAEAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAP7+/uM////////////////8vLydQAAAAoAAAAIAAAABQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAQAAAAEAAAACAAAAA/v7+47////////////////09PRxAAAACAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAIAAAAD+/v7kf////////////////b29m0AAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAP9/f2T///////////////++vr6aQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAQAAAAEAAAACAAAAA/39/Zb//////////v39/WkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAGAgIAC////lv39/WgAAAAC8AAAAOAAAADAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAMAAAAHAAAADwAAAA8AAAAHAAAAAwAAAAEAAAAAAAAAAAAAAAAAAAAAAACAAAAAwAAAAOAAAADwAAAA+AAAAPwAAAD+AAAA/wAAAA==), auto`;
const curs: { [key in Dirs]: any } = {
  right,
  left,
};

const Arrow = styled.div<ArrowProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  flex-direction: column;
  justify-content: center;
  ${(props) => css`
    display: ${props.hidden ? "none" : "flex"};
  `}
`;

export default Arrow;
