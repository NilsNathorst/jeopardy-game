import React from "react";
import styled from "styled-components";
import Grid from "./templates/Grid";
import Team from "./Team";
const Container = styled(Grid)`
  margin-left: ${({ theme }) => theme.gridGap};
  margin-right: ${({ theme }) => theme.gridGap};
  grid-template-columns: repeat(4, 1fr);
`;

const Teams = props => {
  return (
    <Container>
      {props.teamInfo.map((item, key) => {
        return <Team key={key} name={item.name} score={item.score} />;
      })}
    </Container>
  );
};

export default Teams;
