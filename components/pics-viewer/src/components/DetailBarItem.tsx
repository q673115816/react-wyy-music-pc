import styled from "styled-components";

const DetailBarItem = styled.div`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    width: 1px;
    height: 12px;
    background-color: #dadadb;
  }
`;

export default DetailBarItem;
