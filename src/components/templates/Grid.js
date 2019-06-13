import styled from "styled-components";
const Grid = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.gridGap};
  grid-template-columns: repeat(6, 1fr);
  background-color: ${({ theme }) => theme.colorBackground};
`;

export default Grid;
