import React from "react";
import styled from "styled-components";
import Grid from "./templates/Grid";
const Container = styled(Grid)`
  margin-left: ${({ theme }) => theme.gridGap};
  margin-right: ${({ theme }) => theme.gridGap};
  h1 {
    background-color: ${({ theme }) => theme.green};
    padding: 2vh;
    height: 100%;
    text-align: center;
    text-transform: capitalize;
  }
`;

const Categories = props => {
  return (
    <Container>
      {Object.keys(props.items).map((item, key) => {
        return <h1 key={key}>{item}</h1>;
      })}
    </Container>
  );
};

export default Categories;
