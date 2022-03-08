import styled, { css } from "styled-components";

const cols: { [key: number]: string } = {
  1: `span 12 / span 12`,
  2: `span 6 / span 6`,
  3: `span 4 / span 4`,
  4: `span 3 / span 3`,
};

const GridColumn = ({ length, index }: GridItemProps): string => {
  if (length === 9) return cols[3];
  if (length < 4) return cols[length];
  const half = length >> 1;
  const col: number = half + (length % 2 === 1 ? (index >= half ? 1 : 0) : 0);
  return cols[col];
};

interface GridItemProps {
  length: number;
  index: number;
}

const GridItem = styled.div<GridItemProps>`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 1rem;
  ${(props) => css`
    grid-column: ${GridColumn(props)};
  `}
`;

export default GridItem;
