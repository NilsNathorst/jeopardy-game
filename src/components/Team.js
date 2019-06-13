import React, { Component } from "react";
import styled from "styled-components";
const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.darkblue};
  text-align: center;
  padding: 3vh;

  h1,
  h2 {
    font-size: ${({ theme }) => theme.fontSmall};
    line-height: calc(${({ theme }) => theme.fontSmall} * 2);
    color: ${({ theme }) => theme.white};
    text-transform: uppercase;
    padding: 0 0 0 0;
  }
  h1 {
    margin-left: 20%;
    padding: 0 0 0 8px;
    font-size: ${({ theme }) => theme.fontLarge};
  }
`;
class Team extends Component {
  render() {
    return (
      <StyledDiv>
        <h2>{this.props.name}:</h2>
        <h1>{this.props.score}</h1>
      </StyledDiv>
    );
  }
}

export default Team;
